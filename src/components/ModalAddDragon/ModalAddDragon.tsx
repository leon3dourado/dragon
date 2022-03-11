import React, { useEffect } from "react";
import * as S from "./styles/modalAddDragons-style";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { IAddDragonsList, IDragonsList } from "../../models/DragonsListModel";
import { currentDate } from "../../utils/utils";

type Props = {
  openModal: boolean;
  closeModal: () => void;
  dragonToEdit?: boolean;
  dragonDetails?: IDragonsList;
  addDragonsToList: (dragonData: IAddDragonsList) => Promise<void>;
};

export const ModalAddDragon = ({ openModal, closeModal, addDragonsToList }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<any>({
    defaultValues: { createdAt: "", name: "", type: "", histories: [] },
    mode: "onChange"
  });

  const setCurrentDate = () => {
    const formattedCurrentDate = currentDate();
    setValue("createdAt", formattedCurrentDate, { shouldValidate: false });
  };

  useEffect(() => {
    setCurrentDate();
  }, []);

  return (
    <>
      <S.CustomDialog
        disableEscapeKeyDown
        maxWidth="lg"
        aria-labelledby="confirmation-dialog-title"
        open={openModal}>
        <S.Form onSubmit={handleSubmit(addDragonsToList)}>
          <S.ModalContainer>
            <S.TittleContainer>Adicionar novo dragão</S.TittleContainer>
            <IconButton
              sx={{
                position: "absolute",
                right: 8,
                top: 8
              }}
              onClick={closeModal}>
              <CloseIcon />
            </IconButton>

            <S.SubtitleContainer>
              Digite abaixo as informações do dragão:
            </S.SubtitleContainer>
            <S.DialogContentContainer>
              <S.Field>
                <S.Label>Nome do dragão:</S.Label>
                <S.TextInput
                  id="nome"
                  variant="outlined"
                  fullWidth
                  placeholder="Insira o nome do dragão"
                  {...register("name", { required: true })}
                  error={errors.name ? true : false}
                />
              </S.Field>
              <S.Field>
                <S.Label>Tipo:</S.Label>
                <S.TextInput
                  id="tipo"
                  variant="outlined"
                  fullWidth
                  placeholder="Insira o tipo do dragão"
                  {...register("type", { required: true })}
                  error={errors.type ? true : false}
                />
              </S.Field>
            </S.DialogContentContainer>
          </S.ModalContainer>
          <S.ButtonsContainer>
            <S.ConfirmButton type="submit">Salvar</S.ConfirmButton>
          </S.ButtonsContainer>
        </S.Form>
      </S.CustomDialog>
    </>
  );
};
