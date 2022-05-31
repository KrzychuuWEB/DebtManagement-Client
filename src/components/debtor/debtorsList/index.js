import React from "react";
import {Divider, List} from "@mui/material";
import DebtorsListItem from "./item";
import InfoAlert from "../../alerts/info";

const DebtorsList = ({debtorsList, loading}) => {

    return (
        <div>
            {
                <List sx={{bgcolor: 'background.paper'}}>
                    {
                        debtorsList.length > 0 ? debtorsList.map((debtor, index) => (
                            <div>
                                {index > 0 && <Divider/>}
                                <DebtorsListItem loading={loading} key={debtor.id} debtor={debtor}/>
                            </div>
                        )) : <InfoAlert title="Lista jest pusta!"/>
                    }
                </List>
            }
        </div>
    );
};

export default DebtorsList;