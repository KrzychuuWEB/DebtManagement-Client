import {API_URL} from "../utils/constants";

export const ApiRoutes = {
    debts: {
        slug: `${API_URL}/debts`,
        slugWithId: id => `${API_URL}/debts/${id}`,
        changeDevotedWithId: id => `${API_URL}/debts/${id}/devoted`,
        getAllDebtsByDebtorId: id => `${API_URL}/debts/debtors/${id}`,
    },
    debtors: {
        slug: `${API_URL}/debtors`,
        slugWithId: id => `${API_URL}/debtors/${id}`,
    }
}