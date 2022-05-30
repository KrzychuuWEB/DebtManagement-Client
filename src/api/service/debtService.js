import axios from "axios";
import {API_URL} from "../../utils/constants";

export async function getAllDebts() {
    return await axios.get(API_URL + "/debts");
}