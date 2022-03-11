import { LoginModel } from '../models/authentication/LoginModel';
import { axiosPostApi } from '../utils/useAxios';
import {IResult} from '../models/authentication/User'


export function useAuthenticationService() {
  async function login(data: LoginModel) {
      return await axiosPostApi<IResult<any>>(`https://622685332dfa524018075960.mockapi.io/api/autenticar`, data);
  }
  return {
    login,
  };
}
