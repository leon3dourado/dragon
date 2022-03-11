export interface IResult<T> {
	data: T;
	success: boolean;
	messages: string[];
	statusCode: number;
}


export interface IUser {
	id: string;
	nome: string;
	email: string;
	admin: boolean;
	token: string;
	refreshToken: string;
	expirationDate: Date;
	issuedAt: Date;
	isValid: boolean;
	role: string;
}
