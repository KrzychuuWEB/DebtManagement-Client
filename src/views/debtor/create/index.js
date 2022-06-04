import React, {useContext, useState} from "react";
import {AccountCircle} from "@mui/icons-material";
import {useFormik} from "formik";
import BoxWithIconCenter from "../../../components/boxWithIconCenter";
import {createDebtorValidationSchema} from "../forms/valid";
import DebtorForm from "../forms";
import {Button, CircularProgress} from "@mui/material";
import {NotificationContext} from "../../../notifications/context";
import {createDebtor} from "../../../api/service/debtorService";

const CreateDebtorPage = () => {
    const [loading, setLoading] = useState(false);
    const {showNotification} = useContext(NotificationContext);
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
        },
        validationSchema: createDebtorValidationSchema,
        onSubmit: (values, actions) => {
            setLoading(true);
            createDebtor(values)
                .then(response => {
                    actions.resetForm();
                    showNotification("success", "Dodano nowego dłużnika");
                }).catch(error => {
                actions.setErrors(error.response.data);
            }).finally(() => {
                setLoading(false);
            });
        }
    });

    return (
        <BoxWithIconCenter
            icon={<AccountCircle color="primary"/>}
            textHeader="Dodaj nowego dłużnika"
            boxWidth="500px"
        >
            <DebtorForm formik={formik} actionButtons={(
                <div>
                    {
                        loading ?
                            <CircularProgress/>
                            : <Button variant="contained" type="submit">
                                Dodaj
                            </Button>
                    }
                </div>
            )}/>
        </BoxWithIconCenter>
    );
};

export default CreateDebtorPage;