import React, {useContext, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useFormik} from "formik";
import {createDebtValidationSchema} from "../../forms/valid";
import DebtForm from "../../forms";
import {NotificationContext} from "../../../../notifications/context";
import {editDebtById} from "../../../../api/service/debtService";

const EditDebtDialog = ({isOpenEditDialog, debt, setDebt, handleToggleEditDialog}) => {
    const {showNotification} = useContext(NotificationContext);
    const [loading, setLoading] = useState(false);
    async function editDebt(data) {
        return await editDebtById(debt.id, data);
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: debt.id,
            name: debt.name,
            description: debt.description,
            price: debt.price,
        },
        validationSchema: createDebtValidationSchema,
        onSubmit: (values, actions) => {
            setLoading(true);
            editDebt(values).then(() => {
                setDebt(prevState => ({
                    ...prevState,
                    ...values,
                }));
                handleToggleEditDialog(false);
                showNotification("success", "Pomyślnie edytowano dług!");
            }).catch(error => {
                actions.setErrors(error.response.data);
            }).finally(() => {
                setLoading(false);
            })
        }
    })

    return (
        <Dialog open={isOpenEditDialog} onClose={() => handleToggleEditDialog(false)}>
            <DialogTitle>Edycja dług</DialogTitle>
            <DialogContent>
                <DebtForm isEditForm={true} formik={formik} actionButtons={
                    <DialogActions>
                        <Button disabled={loading} onClick={() => handleToggleEditDialog(false)}>Anuluj</Button>
                        <Button disabled={loading} type="submit" variant="contained">Edytuj</Button>
                    </DialogActions>
                }/>
            </DialogContent>
        </Dialog>
    );
};

export default EditDebtDialog;