import { axiosGetApi, axiosPutApi, axiosPostApi, axiosDeleteApi } from '../utils/useAxios';
import { IDragonsList, IAddDragonsList } from '../models/DragonsListModel'

export interface SuccessResult<T> {
	success: T;
}

export const listDragons = async () => {
    return await axiosGetApi<IDragonsList[]>(`api/v1/dragon`);
};

export const detailsDragon = async (dragonId: string) => {
    return await axiosGetApi<IDragonsList>(`api/v1/dragon/${dragonId}`);
};

export const addDragons = async (dragonToAdd: IAddDragonsList) => {
    return await axiosPostApi<IAddDragonsList>(`api/v1/dragon`, dragonToAdd);
};

export const editDragons = async (dragonId: string, dragonToEdit: IAddDragonsList) => {
    return await axiosPutApi<IDragonsList[]>(`api/v1/dragon/${dragonId}`, dragonToEdit);
};

export const deleteDragons = async (dragonId: string) => {
    return await axiosDeleteApi<SuccessResult<boolean>>(`api/v1/dragon/${dragonId}`);
};