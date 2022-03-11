import { UserModel } from '../../models/authentication/UserModel';
import { GenericContext } from '../genericContext';
import { AuthenticationActions } from './authenticationActions';
import { AuthenticationState, AUTHENTICATION_INITIAL_STATE } from './authenticationState';

export type AuthenticationDispatch = (action: AuthenticationAction) => void;
export const AUTHENTICATION_INITIAL_DISPATCH = (action: AuthenticationAction): void => {
  throw Error('Dispatch not implemented. Action: ' + action);
};

export function AuthenticationReducer(state: AuthenticationState, action: AuthenticationAction): AuthenticationState {
  switch (action.type) {
    case AuthenticationActions.SUCCESS_LOGIN: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        unauthorized: false,
        messageAuthenticated: AUTHENTICATION_INITIAL_STATE.messageAuthenticated,
      };
    }
    case AuthenticationActions.FAIL_LOGIN: {
      return {
        ...state,
        isAuthenticated: false,
        user: AUTHENTICATION_INITIAL_STATE.user,
        unauthorized: false,
        messageAuthenticated: action.payload,
      };
    }
    case AuthenticationActions.UNAUTHORIZED: {
      return {
        ...state,
        unauthorized: true,
        isAuthenticated: false,
        messageAuthenticated: AUTHENTICATION_INITIAL_STATE.messageAuthenticated,
      };
    }
    case AuthenticationActions.SESSION_EXPIRED: {
      return AUTHENTICATION_INITIAL_STATE;
    }
    case AuthenticationActions.LOGOUT: {
      return AUTHENTICATION_INITIAL_STATE;
    }
    default: {
      throw new Error(`Ação não identificada: ${action!}`);
    }
  }
}

type AuthenticationAction =
  | GenericContext<AuthenticationActions.SUCCESS_LOGIN, UserModel>
  | GenericContext<AuthenticationActions.FAIL_LOGIN, string>
  | GenericContext<AuthenticationActions.SESSION_EXPIRED>
  | GenericContext<AuthenticationActions.UNAUTHORIZED>
  | GenericContext<AuthenticationActions.LOGOUT> ;
