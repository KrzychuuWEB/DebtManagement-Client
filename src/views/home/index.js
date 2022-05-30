import React, {useEffect, useState} from "react";
import DebtsList from "../../components/debt/debtsList";
import {debtorsInMemory, debtsInMemory} from "../../inMemoryDatabase";
import {Fab, Paper, Tab, Tabs} from "@mui/material";
import {Add} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {getRoute} from "../../utils/routes";
import DebtorsList from "../../components/debtor/debtorsList";


const HomePage = () => {
    const [debts, setDebts] = useState([]);
    const [debtors, setDebtors] = useState([]);
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        setDebts(debtsInMemory);
        setDebtors(debtorsInMemory);
    }, []);

    const changeTab = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Paper sx={{marginBottom: 2}}>
                <Tabs value={value} onChange={changeTab}>
                    <Tab label="Dłużnicy" id={0}/>
                    <Tab label="Długi" id={1}/>
                </Tabs>
            </Paper>

            {value === 0 && <DebtorsList debtorsList={debtors}/>}
            {value === 1 && <DebtsList debtsList={debts} setDebtsList={setDebts} withoutSubHeader={true}/>}

            <Fab sx={{position: 'fixed', bottom: 25, right: 25}} color="secondary" component={Link}
                 to={getRoute.debtor.create}>
                <Add/>
            </Fab>
        </div>
    );
};

export default HomePage;