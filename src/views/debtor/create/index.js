import React from "react";
import {AccountCircle} from "@mui/icons-material";
import {useFormik} from "formik";
import BoxWithIconCenter from "../../../components/boxWithIconCenter";
import {createDebtorValidationSchema} from "../forms/valid";
import DebtorForm from "../forms";
import {Button} from "@mui/material";

const CreateDebtorPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
        },
        validationSchema: createDebtorValidationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <BoxWithIconCenter
            icon={<AccountCircle color="primary"/>}
            textHeader="Dodaj nowego dłużnika"
            boxWidth="500px"
        >
            <DebtorForm formik={formik} actionButtons={(
                <Button variant="contained" type="submit">
                    Dodaj
                </Button>
            )}/>
        </BoxWithIconCenter>
    );
};

export default CreateDebtorPage;