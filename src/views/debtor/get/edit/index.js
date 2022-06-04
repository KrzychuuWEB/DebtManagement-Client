import React, {useContext, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useFormik} from "formik";
import {createDebtorValidationSchema} from "../../forms/valid";
import DebtorForm from "../../forms";
import {NotificationContext} from "../../../../notifications/context";
import {editDebtorById} from "../../../../api/service/debtorService";

const EditDebtorDialog = ({debtor, setDebtor, isOpenEditDialog, handleEditDialogIsOpen}) => {
    const {showNotification} = useContext(NotificationContext);
    const [loading, setLoading] = useState(false);

    async function editDebtor(data) {
        return await editDebtorById(debtor.id, data).then(() => {
            setDebtor(prevState => ({
                ...prevState,
                ...data
            }));
        });
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: debtor.id,
            firstName: debtor.firstName || '',
            lastName: debtor.lastName || '',
        },
        validationSchema: createDebtorValidationSchema,
        onSubmit: (values, actions) => {
            setLoading(true);
            editDebtor(values)
                .then(() => {
                    handleEditDialogIsOpen(false);
                    showNotification("success", "Pomyślnie edytowano dłużnika!");
                })
                .catch(error => {
                    console.log(error);
                    actions.setErrors(error.response.data)
                }).finally(() => {
                setLoading(false);
            });
        }
    });

    return (
        <div>
            <Dialog open={isOpenEditDialog} onClose={() => handleEditDialogIsOpen(false)}>
                <DialogTitle>Edycja dłużnika</DialogTitle>
                <DialogContent>
                    <DebtorForm formik={formik} actionButtons={
                        <DialogActions>
                            <Button disabled={loading} onClick={() => handleEditDialogIsOpen(false)}>Anuluj</Button>
                            <Button disabled={loading} type="submit" variant="contained">Edytuj</Button>
                        </DialogActions>
                    }/>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EditDebtorDialog;