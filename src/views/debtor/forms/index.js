import React from "react";
import {TextField} from "@mui/material";
import BoxActionButtons from "../../../components/boxWithIconCenter/boxActionButtons";

const DebtorForm = ({formik, actionButtons}) => {

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                label="Imię"
                fullWidth
                name="firstName"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && (formik.errors.firstName)}
                sx={{marginTop: 1}}
            />

            <TextField
                label="Nazwisko"
                fullWidth
                name="lastName"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && (formik.errors.lastName)}
                sx={{marginTop: 3}}
            />

            <BoxActionButtons>
                {actionButtons}
            </BoxActionButtons>
        </form>
    );
};

export default DebtorForm;