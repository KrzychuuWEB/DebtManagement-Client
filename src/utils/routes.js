export const getRoute = {
    home: "/",
    debtor: {
        getAll: "/debtors",
        getWithId: id => `/debtors/${id}`,
        create: "/debtors/create",
    },
    debt: {
        getAll: "/debts",
        getWithId: id => `/debts/${id}`,
        createWithDebtorId: id => `/debts/create/debtor/${id}`,
    },
};