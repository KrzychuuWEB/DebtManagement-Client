import * as yup from "yup";

export const createDebtorValidationSchema = yup.object({
    firstName: yup
        .string('Imię musi zawierać znaki!')
        .required('Imię jest wymagane'),
    lastName: yup
        .string('Naziwsko musi zawierać znaki!')
        .required('Nazwisko jest wymagane'),
});