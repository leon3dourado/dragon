import React, { createContext, useReducer, useContext } from "react";
import { LoginModel } from "../../models/authentication/LoginModel";
import { useAuthenticationService } from "../../services/autenticacao.service";
import { AuthenticationActions } from "./authenticationActions";
import {
  AuthenticationDispatch,
  AuthenticationReducer,
  AUTHENTICATION_INITIAL_DISPATCH
} from "./authenticationReducer";
import { AuthenticationState, AUTHENTICATION_INITIAL_STATE } from "./authenticationState";
import jwt_decode from "jwt-decode";
import { TokenPayload } from "../../models/authentication/TokenPayload";
import TokenResponse from "../../models/authentication/TokenResponse";

const AuthenticationStateContext = createContext<AuthenticationState>(
  AUTHENTICATION_INITIAL_STATE
);
const AuthenticationDispatchContext = createContext<AuthenticationDispatch>(
  AUTHENTICATION_INITIAL_DISPATCH
);

type AuthenticationProps = { children: React.ReactNode };

function AuthenticationProvider({ children }: AuthenticationProps) {
  const [state, dispatch] = useReducer(
    AuthenticationReducer,
    AUTHENTICATION_INITIAL_STATE
  );

  return (
    <AuthenticationStateContext.Provider value={state}>
      <AuthenticationDispatchContext.Provider value={dispatch}>
        {children}
      </AuthenticationDispatchContext.Provider>
    </AuthenticationStateContext.Provider>
  );
}

function useAuthenticationContext() {
  const state = useContext(AuthenticationStateContext);
  const authenticationService = useAuthenticationService();

  if (state === undefined) {
    throw new Error(
      "useAuthenticationState deve ser utilizando dentro de um AuthenticationProvider"
    );
  }

  const dispatch = useContext(AuthenticationDispatchContext);

  if (dispatch === undefined) {
    throw new Error(
      "useAuthenticationDispatch deve ser utilizando dentro de um AuthenticationProvider"
    );
  }

  const actions = AuthenticationActions;

  function loadToken(tokenResponse: TokenResponse) {
    const tokenPayload = jwt_decode<TokenPayload>(tokenResponse.token);

    if (tokenResponse.expirationDate > new Date()) {
      localStorage.setItem("token", JSON.stringify(tokenResponse));
      dispatch({
        type: actions.SUCCESS_LOGIN,
        payload: {
          email: tokenPayload.email,
          role: tokenPayload.role,
          usuario: tokenPayload.sub
        }
      });
    } else {
      logout();
    }
  }

  async function login(data: LoginModel) {
    // eslint-disable-next-line no-useless-catch
    try {
      const loginMock = process.env.REACT_APP_LOGIN_MOCK;
      const passwordMock = process.env.REACT_APP_PASSWORD_MOCK;
      if (
        data.login.toLowerCase() === loginMock &&
        data.senha.toLowerCase() === passwordMock
      ) {
        const userModel = await authenticationService.login(data);
        localStorage.setItem("user", JSON.stringify(userModel));
        const tokenPayload = jwt_decode<TokenPayload>(userModel.data.token);
        dispatch({
          type: actions.SUCCESS_LOGIN,
          payload: {
            email: tokenPayload.email,
            role: tokenPayload.role,
            usuario: tokenPayload.sub
          }
        });
      } else {
        throw new Error("Login e senha inválidos");
      }
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    localStorage.clear();
    dispatch({ type: actions.LOGOUT });
  }

  function hasToken() {
    const tokenJson = localStorage.getItem("user");
    return !!tokenJson;
  }

  return {
    state,
    login,
    logout,
    hasToken,
    loadToken
  };
}

export { AuthenticationProvider, useAuthenticationContext };
