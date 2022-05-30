import axios from "axios";
import {API_URL} from "../../utils/constants";
import {getRoute} from "../../utils/routes";

export async function getAllDebts() {
    return await axios.get(API_URL + getRoute.debt.getAll);
}