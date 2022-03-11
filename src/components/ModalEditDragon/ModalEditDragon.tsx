import React, { useState, useEffect } from "react";
import * as S from "./styles/modalEditDragon";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { IAddDragonsList, IEditDragonsList } from "../../models/DragonsListModel";
import { currentDate } from "../../utils/utils";

type Props = {
  openModal: boolean;
  closeModal: () => void;
  dragonDetails: IEditDragonsList | undefined;
  editDragon: (dragonData: IAddDragonsList) => Promise<void>;
};

export const ModalEditDragon = ({
  openModal,
  closeModal,
  editDragon,
  dragonDetails
}: Props) => {
  const [name, setName] = useState<string | undefined>("");
  const [type, setType] = useState<string | undefined>("");

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

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };
  const handleChangeType = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setType(event.target.value);
  };

  useEffect(() => {
    setName(dragonDetails?.name);
    setValue("name", dragonDetails?.name, { shouldValidate: false });
    setType(dragonDetails?.type);
    setValue("type", dragonDetails?.type, { shouldValidate: false });
    setCurrentDate();
  }, []);

  return (
    <>
      <S.CustomDialog
        disableEscapeKeyDown
        maxWidth="lg"
        aria-labelledby="confirmation-dialog-title"
        open={openModal}>
        <S.Form onSubmit={handleSubmit(editDragon)}>
          <S.ModalContainer>
            <S.TittleContainer>Editar o dragão {dragonDetails?.name}</S.TittleContainer>
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
                  value={name}
                  id="nome"
                  variant="outlined"
                  fullWidth
                  placeholder="Insira o nome do dragão"
                  {...register("name", { required: true })}
                  error={errors.name ? true : false}
                  onChange={(event) => handleChangeName(event)}
                />
              </S.Field>
              <S.Field>
                <S.Label>Tipo:</S.Label>
                <S.TextInput
                  value={type}
                  id="tipo"
                  variant="outlined"
                  fullWidth
                  placeholder="Insira o tipo do dragão"
                  {...register("type", { required: true })}
                  error={errors.type ? true : false}
                  onChange={(event) => handleChangeType(event)}
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
