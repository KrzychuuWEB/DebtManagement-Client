import React from "react";
import {Divider, List, ListSubheader} from "@mui/material";
import DebtItemList from "./item";
import InfoAlert from "../../alerts/info";

const DebtsList = ({debtsList, setDebtsList, withoutSubHeader}) => {

    const changeDevoted = (id) => {
        setDebtsList(debtsList.map(debt => debt.id === id ? {...debt, isDevoted: !debt.isDevoted} : debt));
    }

    return (
        <List sx={{bgcolor: 'background.paper'}}>
            {
                !withoutSubHeader && <div>
                    <ListSubheader component="div">
                        Długi
                    </ListSubheader>
                    <Divider/>
                </div>
            }

            {
                debtsList.length > 0 ? debtsList.map(debt => (
                        <DebtItemList key={debt.id} debt={debt} changeDevoted={changeDevoted}/>
                    ))
                    : <InfoAlert title="Lista jest pusta!"/>
            }
        </List>
    );
};

export default DebtsList;