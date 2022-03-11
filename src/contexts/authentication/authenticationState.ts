import { UserModel } from "../../models/authentication/UserModel";

export interface AuthenticationState {
  user: UserModel | undefined;
  isAuthenticated: boolean;
  messageAuthenticated: string | undefined;
  unauthorized: boolean;
}

export const AUTHENTICATION_INITIAL_STATE: AuthenticationState = {
  user: undefined,
  isAuthenticated: false,
  messageAuthenticated: undefined,
  unauthorized: false,
};
