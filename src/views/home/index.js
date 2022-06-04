import React, {useEffect, useState} from "react";
import DebtsList from "../../components/debt/debtsList";
import {Fab, Paper, Tab, Tabs} from "@mui/material";
import {Add} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {getRoute} from "../../utils/routes";
import DebtorsList from "../../components/debtor/debtorsList";
import {getAllDebtors} from "../../api/service/debtorService";
import {getAllDebts} from "../../api/service/debtService";
import axios from "axios";


const HomePage = () => {
    const [debts, setDebts] = useState([{}]);
    const [debtors, setDebtors] = useState([{}]);
    const [tab, setTab] = React.useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.all([getAllDebtors(), getAllDebts()]).then(axios.spread((...responses) => {
            setDebtors(responses[0].data);
            setDebts(responses[1].data);
        })).finally(() => {
            setLoading(false);
        })
    }, []);

    const changeTab = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <div>
            <Paper sx={{marginBottom: 2}}>
                <Tabs value={tab} onChange={changeTab}>
                    <Tab label="Dłużnicy" id={0}/>
                    <Tab label="Niespłacone długi" id={1}/>
                </Tabs>
            </Paper>

            {tab === 0 && <DebtorsList debtorsList={debtors} loading={loading}/>}
            {tab === 1 &&
                <DebtsList debtsList={debts} setDebtsList={setDebts} withoutSubHeader={true} loading={loading}/>}

            <Fab sx={{position: 'fixed', bottom: 25, right: 25}} color="secondary" component={Link}
                 to={getRoute.debtor.create}>
                <Add/>
            </Fab>
        </div>
    );
};

export default HomePage;