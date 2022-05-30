import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useFormik} from "formik";
import {createDebtorValidationSchema} from "../../forms/valid";
import DebtorForm from "../../forms";

const EditDebtorDialog = ({debtor, setDebtor, isOpenEditDialog, handleEditDialogIsOpen}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: debtor.firstName || '',
            lastName: debtor.lastName || '',
        },
        validationSchema: createDebtorValidationSchema,
        onSubmit: (values) => {
            setDebtor(prevState => ({
                ...prevState,
                ...values
            }));

            handleEditDialogIsOpen(false);
        }
    });

    return (
        <div>
            <Dialog open={isOpenEditDialog} onClose={() => handleEditDialogIsOpen(false)}>
                <DialogTitle>Edycja dłużnika</DialogTitle>
                <DialogContent>
                    <DebtorForm formik={formik} actionButtons={
                        <DialogActions>
                            <Button onClick={() => handleEditDialogIsOpen(false)}>Anuluj</Button>
                            <Button type="submit" variant="contained">Edytuj</Button>
                        </DialogActions>
                    }/>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EditDebtorDialog;