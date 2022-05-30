import * as yup from "yup";

export const createDebtValidationSchema = yup.object({
    name: yup
        .string('Nazwa musi zawierać znaki!')
        .required('Nazwa jest wymagany'),
    description: yup
        .string('Nazwa musi zawierać znaki!')
        .required('Opis jest wymagany'),
    price: yup
        .number('Cena musi być cyfrą')
        .required('Cena jest wymagana'),
});