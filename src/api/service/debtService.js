import axios from "axios";
import {ApiRoutes} from "../apiRoutes";

export const getAllDebts = () => {
    return axios.get(ApiRoutes.debts.slug);
}

export const getDebtById = id => {
    return axios.get(ApiRoutes.debts.slugWithId(id));
}

export const createDebt = data => {
    return axios.post(ApiRoutes.debts.slug, data);
}

export const editDebtById = (id, data) => {
    return axios.put(ApiRoutes.debts.slugWithId(id), data);
}

export const deleteDebtById = id => {
    return axios.delete(ApiRoutes.debts.slugWithId(id));
}

export const changeDebtDevotedById = (id, data) => {
    return axios.put(ApiRoutes.debts.changeDevotedWithId(id), data);
}

export const getAllDebtsByDebtorId = id => {
    return axios.get(ApiRoutes.debts.getAllDebtsByDebtorId(id));
}