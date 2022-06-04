import React from "react";
import {Divider, List, ListSubheader} from "@mui/material";
import DebtItemList from "./item";
import InfoAlert from "../../alerts/info";
import {changeDebtDevotedById} from "../../../api/service/debtService";

const DebtsList = ({debtsList, setDebtsList, withoutSubHeader, loading}) => {

    const changeDevoted = (id, devoted) => {
        changeDebtDevotedById(id, {id: id, devoted: !devoted}).then(r => {
            setDebtsList(debtsList.map(debt => debt.id === id ? {...debt, isDevoted: !debt.isDevoted} : debt));
        });
    }

    return (
        <div>
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
                    debtsList.length > 0 ? debtsList.map((debt, index) => (
                            !debt.isDevoted && <div key={debt.id}>
                                {index > 0 && <Divider/>}
                                <DebtItemList loading={loading} key={debt.id} debt={debt} changeDevoted={changeDevoted}/>
                            </div>
                        ))
                        : <InfoAlert title="Lista jest pusta!"/>
                }
            </List>
        </div>
    );
};

export default DebtsList;