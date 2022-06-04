import React, {useContext, useEffect, useState} from "react";
import {Button} from "@mui/material";
import BoxWithIconCenter from "../../../components/boxWithIconCenter";
import {AttachMoney} from "@mui/icons-material";
import {useFormik} from "formik";
import {createDebtValidationSchema} from "../forms/valid";
import DebtForm from "../forms";
import {useNavigate, useParams} from "react-router-dom";
import {NotificationContext} from "../../../notifications/context";
import {getDebtorById} from "../../../api/service/debtorService";
import {createDebt} from "../../../api/service/debtService";
import {getRoute} from "../../../utils/routes";

const CreateDebtPage = () => {
    const navigate = useNavigate();
    const {showNotification} = useContext(NotificationContext);
    const [loading, setLoading] = useState(false);
    const {debtorId} = useParams();
    const [debtors, setDebtors] = useState({});

    async function postDebt(data) {
        return await createDebt(data);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            description: "",
            price: 0,
            debtorId: debtorId,
        },
        validationSchema: createDebtValidationSchema,
        onSubmit: (values, actions) => {
            setLoading(true);
            postDebt(values).then(() => {
                showNotification("success", "Dodano nowy dług!");
                navigate(getRoute.debtor.getWithId(debtorId));
            }).catch(error => {
                actions.setErrors(error.response.data);
            }).finally(() => {
                setLoading(false);
            })
        }
    })

    async function get(id) {
        return await getDebtorById(id);
    }

    useEffect(() => {
        get(debtorId).then(response => {
            setDebtors(response.data)
        }).catch(() => {
            navigate("/debtorNotFound");
        })
    }, []);

    return (
        <BoxWithIconCenter
            boxWidth="500px"
            icon={<AttachMoney color="primary"/>}
            textHeader="Dodaj nowy dług"
        >
            <DebtForm
                formik={formik}
                actionButtons={<Button disabled={loading} variant="contained" type="submit">
                    Dodaj
                </Button>}
                debtor={debtors}
            />
        </BoxWithIconCenter>
    );
};

export default CreateDebtPage;