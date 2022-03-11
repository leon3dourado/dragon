export interface TokenPayload {
  sub: string;
  email: string;
  jti: string;
  role: string;
  DataCriacao: string;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}
