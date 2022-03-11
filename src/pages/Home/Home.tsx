import React, { useState, useEffect } from "react";
import { TableCell, TableHead, TableRow, TableBody, Table, Grid } from "@mui/material/";
import { AddCircle, Edit, Delete } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import jwt_decode from "jwt-decode";
import { TokenPayload } from "../../models/authentication/TokenPayload";
import {
  listDragons,
  detailsDragon,
  deleteDragons,
  addDragons,
  editDragons
} from "../../services/dragon.service";
import {
  IDragonsList,
  IAddDragonsList,
  IEditDragonsList
} from "../../models/DragonsListModel";
import { formatDate } from "../../utils/utils";
import { ModalAddDragon } from "../../components/ModalAddDragon/ModalAddDragon";
import { ModalEditDragon } from "../../components/ModalEditDragon/ModalEditDragon";
import Tooltip from "@mui/material/Tooltip";
import * as S from "./home-style";

export const Home = () => {
  const { enqueueSnackbar } = useSnackbar();
  const userLogged = localStorage.getItem("user");
  const userLoggedData = userLogged && jwt_decode<TokenPayload>(userLogged);
  const [dragonsList, setDragonsList] = useState<IDragonsList[]>([]);
  const [openModalAddDragons, setOpenModalAddDragons] = useState<boolean>(false);
  const [openModalEditDragons, setOpenModalEditDragons] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dragonIdToEdit, setDragonIdToEdit] = useState<string>("");
  const [dragonDetails, setDragonDetails] = useState<IEditDragonsList>();

  const handleCloseModalAddDragon = () => {
    getListOfDragons();
    setOpenModalAddDragons(false);
  };

  const getListOfDragons = async () => {
    try {
      setLoading(true);
      const response = await listDragons();
      response.sort((a, b) => a.name.localeCompare(b.name));
      setDragonsList(response);
      setLoading(false);
    } catch {
      setLoading(false);
      enqueueSnackbar("Erro ao carregar a lista de dragões", {
        variant: "error"
      });
    }
  };

  const deleteDragon = async (dragonId: string) => {
    try {
      await deleteDragons(dragonId);
      getListOfDragons();
    } catch {
      enqueueSnackbar("Erro ao deletar um dragão", {
        variant: "error"
      });
    }
  };

  const handleCloseModalEditDragon = () => {
    getListOfDragons();
    setOpenModalEditDragons(false);
  };

  const editDragon = async (dragonData: IAddDragonsList) => {
    try {
      await editDragons(dragonIdToEdit, dragonData);
      handleCloseModalEditDragon();
    } catch {
      enqueueSnackbar("Erro ao editar as informações do dragão", {
        variant: "error"
      });
    }
  };

  const addDragonsToList = async (dragonData: IAddDragonsList) => {
    try {
      await addDragons(dragonData);
      handleCloseModalAddDragon();
    } catch {
      enqueueSnackbar("Erro ao adicionar um novo dragão", {
        variant: "error"
      });
    }
  };

  const showDetailsDragon = async (dragonId: string) => {
    try {
      const response = await detailsDragon(dragonId);
      setDragonDetails(response);
      setDragonIdToEdit(dragonId);
      setOpenModalEditDragons(true);
    } catch {
      enqueueSnackbar("Erro ao carregar as informações do dragão", {
        variant: "error"
      });
    }
  };

  useEffect(() => {
    getListOfDragons();
  }, []);

  return (
    <S.GridContainer container>
      <S.GridItem item xs={12}>
        <S.WelcomeMessage>
          Seja bem vindo, <S.UserName>{userLoggedData?.sub}</S.UserName>
        </S.WelcomeMessage>

        <S.Instructions>
          Para adicionar um novo dragão, clicar na opção `Adicionar novo dragão`
        </S.Instructions>
        <S.PaperTeste>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Grid
                    container
                    direction="row"
                    onClick={() => setOpenModalAddDragons(true)}
                    style={{
                      justifyContent: "right",
                      cursor: "pointer",
                      fontSize: 16
                    }}>
                    <AddCircle style={{ color: "orange" }} />
                    Adicionar
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Data de criação</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dragonsList.length > 0 ? (
                dragonsList.map((dragon) => {
                  return (
                    <TableRow key={dragon.id}>
                      <TableCell>{formatDate(dragon.createdAt)}</TableCell>
                      <TableCell>{dragon.name}</TableCell>
                      <TableCell>{dragon.type}</TableCell>
                      <TableCell></TableCell>
                      <TableCell align="right">
                        <Tooltip title={`Editar o dragão ${dragon.name}`}>
                          <Edit
                            onClick={() => showDetailsDragon(dragon.id)}
                            style={{ cursor: "pointer", color: "black" }}
                          />
                        </Tooltip>
                        <Tooltip title={`Deletar o dragão ${dragon.name}`}>
                          <Delete
                            onClick={() => deleteDragon(dragon.id)}
                            style={{ cursor: "pointer", color: "#EB5757" }}
                          />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>Não existe informações sobre os dragões</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </S.PaperTeste>
        {openModalAddDragons && (
          <ModalAddDragon
            openModal={openModalAddDragons}
            closeModal={handleCloseModalAddDragon}
            addDragonsToList={addDragonsToList}
          />
        )}
        {openModalEditDragons && (
          <ModalEditDragon
            openModal={openModalEditDragons}
            closeModal={handleCloseModalEditDragon}
            editDragon={editDragon}
            dragonDetails={dragonDetails}
          />
        )}
      </S.GridItem>
    </S.GridContainer>
  );
};
