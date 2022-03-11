import React, { useState } from "react";
import { InputAdornment, IconButton, Grid, CircularProgress } from "@mui/material/";
import { LoginModel } from "../../models/authentication/LoginModel";
import { useForm } from "react-hook-form";
import { useAuthenticationContext } from "../../contexts/authentication/authenticationContext";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import * as S from "./login-style";

export const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const authenticationContext = useAuthenticationContext();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginModel>({
    defaultValues: { login: "", senha: "" },
    mode: "onChange"
  });

  const onSubmit = async (data: LoginModel) => {
    try {
      setLoading(true);
      await authenticationContext.login(data);

      setTimeout(() => {
        setLoading(false);
        history.push("/home");
      }, 1000);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Usuário ou senha inválidos. Tente novamente", {
        variant: "error"
      });
    }
  };

  return (
    <Grid>
      <S.LoginContainer elevation={10}>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.LogoSouthSystem />
          <S.Field>
            <S.Label>Usuário</S.Label>
            <S.TextInput
              id="usuario"
              variant="outlined"
              fullWidth
              placeholder="Insira seu usuário..."
              {...register("login", { required: true })}
              error={errors.login ? true : false}
            />
          </S.Field>
          <S.Field>
            <S.Label>Senha</S.Label>
            <S.TextInput
              id="senha"
              variant="outlined"
              fullWidth
              placeholder="Insira sua senha..."
              type={showPassword ? "text" : "password"}
              {...register("senha", { required: true })}
              error={errors.senha ? true : false}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </S.Field>

          <S.LoginButton variant="contained" type="submit" fullWidth>
            {loading ? (
              <CircularProgress style={{ marginLeft: 16, color: "white" }} size={24} />
            ) : (
              "Entrar"
            )}
          </S.LoginButton>
        </S.Form>
      </S.LoginContainer>
    </Grid>
  );
};
