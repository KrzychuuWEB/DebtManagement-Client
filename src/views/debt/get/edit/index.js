import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useFormik} from "formik";
import {createDebtValidationSchema} from "../../forms/valid";
import DebtForm from "../../forms";

const EditDebtDialog = ({isOpenEditDialog, debt, setDebt, handleToggleEditDialog}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: debt.name,
            description: debt.description,
            price: debt.price,
        },
        validationSchema: createDebtValidationSchema,
        onSubmit: (values) => {
            setDebt(prevState => ({
                ...prevState,
                ...values,
            }));

            handleToggleEditDialog(false);
        }
    })

    return (
        <Dialog open={isOpenEditDialog} onClose={() => handleToggleEditDialog(false)}>
            <DialogTitle>Edycja dług</DialogTitle>
            <DialogContent>
                <DebtForm isEditForm={true} formik={formik} actionButtons={
                    <DialogActions>
                        <Button onClick={() => handleToggleEditDialog(false)}>Anuluj</Button>
                        <Button type="submit" variant="contained">Edytuj</Button>
                    </DialogActions>
                }/>
            </DialogContent>
        </Dialog>
    );
};

export default EditDebtDialog;