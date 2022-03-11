export default class TokenResponse {
  constructor({ token, refreshToken, expirationDate, issuedAt }: any) {
    this.token = token;

    expirationDate = new Date(Date.parse(expirationDate));
    this.expirationDate = expirationDate;

    issuedAt = new Date(Date.parse(issuedAt));
    this.issuedAt = issuedAt;

    this.refreshToken = refreshToken;
  }

  public token: string;
  public expirationDate: Date;
  public issuedAt: Date;
  public refreshToken: string;

  public carregar(json: any) {
    this.token = json.token;
    this.expirationDate = new Date(Date.parse(json.expirationDate));
    this.issuedAt = new Date(Date.parse(json.issuedAt));
    this.refreshToken = json.refreshToken;
  }
}
