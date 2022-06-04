import {formatDate} from "../../../utils/formatDate";

export const getUnPaidDebtsCount = (debts) => {
    return debts.filter(debt => !debt.isDevoted).length
}

export const getAmountOfDebt = (debts) => {
    let amount = 0;
    debts.map(debt => !debt.isDevoted && (amount += debt.price));
    return amount;
}

export const getPaidDebtsCount = (debts) => {
    return debts.filter(debt => debt.isDevoted).length
}

export const getLastDebtDate = (debts) => {
    return formatDate(debts.sort((a, b) => b.id - a.id)[0].createdAt);
}