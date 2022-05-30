import React from "react";
import {InputAdornment, TextField} from "@mui/material";
import BoxActionButtons from "../../../components/boxWithIconCenter/boxActionButtons";

const DebtForm = ({formik, actionButtons, debtor, isEditForm}) => {

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                label="Nazwa długu"
                fullWidth
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && (formik.errors.name)}
                sx={{marginTop: 1}}
            />

            <TextField
                label="Opis długu"
                fullWidth
                sx={{marginTop: 3}}
                multiline
                rows={3}
                name="description"
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && (formik.errors.description)}
            />

            <TextField
                label="Kwota długu"
                fullWidth
                sx={{marginTop: 3}}
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end">zł</InputAdornment>,
                }}
                name="price"
                id="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && (formik.errors.price)}
            />

            {
                !isEditForm && <TextField
                    label="Dłużnik"
                    fullWidth
                    sx={{marginTop: 3}}
                    value={debtor.firstName + " " + debtor.lastName}
                    disabled
                />
            }

            <BoxActionButtons>
                {actionButtons}
            </BoxActionButtons>
        </form>
    );
};

export default DebtForm;