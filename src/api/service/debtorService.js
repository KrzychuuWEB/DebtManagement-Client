import axios from "axios";
import {ApiRoutes} from "../apiRoutes";

export const getAllDebtors = () => {
    return axios.get(ApiRoutes.debtors.slug);
}

export const getDebtorById = id => {
    return axios.get(ApiRoutes.debtors.slugWithId(id));
}

export const createDebtor = data => {
    return axios.post(ApiRoutes.debtors.slug, data);
}

export const editDebtorById = (id, data) => {
    return axios.put(ApiRoutes.debtors.slugWithId(id), data);
}

export const deleteDebtorById = id => {
    return axios.delete(ApiRoutes.debtors.slugWithId(id));
}