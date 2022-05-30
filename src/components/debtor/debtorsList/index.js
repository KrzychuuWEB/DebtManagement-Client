import React from "react";
import {List} from "@mui/material";
import DebtorsListItem from "./item";
import InfoAlert from "../../alerts/info";

const DebtorsList = ({debtorsList}) => {

    return (
        <List sx={{bgcolor: 'background.paper'}}>
            {
                debtorsList.length > 0 ? debtorsList.map(debtor => (
                    <DebtorsListItem key={debtor.id} debtor={debtor}/>
                )) : <InfoAlert title="Lista jest pusta!"/>
            }
        </List>
    );
};

export default DebtorsList;