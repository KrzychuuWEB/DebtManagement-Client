import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import BoxWithIconCenter from "../../../components/boxWithIconCenter";
import {AttachMoney} from "@mui/icons-material";
import {useFormik} from "formik";
import {debtorsInMemory} from "../../../inMemoryDatabase";
import {createDebtValidationSchema} from "../forms/valid";
import DebtForm from "../forms";
import {useParams} from "react-router-dom";

const CreateDebtPage = () => {
    const {debtorId} = useParams();
    const [debtors, setDebtors] = useState(debtorsInMemory);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            description: "",
            price: "",
            debtor: debtorId,
        },
        validationSchema: createDebtValidationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    useEffect(() => {
        setDebtors(debtorsInMemory.find(debtor => debtor.id === parseInt(debtorId)));
    }, []);

    return (
        <BoxWithIconCenter
            boxWidth="500px"
            icon={<AttachMoney color="primary"/>}
            textHeader="Dodaj nowy dług"
        >
            <DebtForm
                formik={formik}
                actionButtons={<Button variant="contained" type="submit">
                    Dodaj
                </Button>}
                debtor={debtors}
            />
        </BoxWithIconCenter>
    );
};

export default CreateDebtPage;