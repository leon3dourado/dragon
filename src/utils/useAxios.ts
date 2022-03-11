import axios from 'axios';
import { BaseConfig } from "../utils/baseConfig"

const axiosBase = axios.create({
	baseURL: BaseConfig.baseApiUrl,
});

export async function axiosPostApi<T>(route: string, body: any = null) {
	const jsonBody = body ? JSON.stringify(body) : null;
    const { token } = JSON.parse(localStorage.getItem('token') || '{}');
	return axiosBase
		.post<T>(route, jsonBody, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
}

export async function axiosPutApi<T>(route: string, body: any) {
	const jsonBody = JSON.stringify(body);
    const { token } = JSON.parse(localStorage.getItem('token') || '{}');
	return axiosBase
		.put<T>(route, jsonBody, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
}

export async function axiosGetApi<T>(route: string) {
	const { token } = JSON.parse(localStorage.getItem('token') || '{}');
	return axiosBase
		.get<T>(route, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
		.then((response) => {
		
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
}

export async function axiosDeleteApi<T>(route: string) {
	const { token } = JSON.parse(localStorage.getItem('token') || '{}');
	return axiosBase
		.delete<T>(route, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
}
