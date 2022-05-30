import React from "react";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip, useTheme} from "@mui/material";
import {AttachMoney, Info, PriceCheck} from "@mui/icons-material";
import {getRoute} from "../../../utils/routes";

const DebtItemList = ({debt, changeDevoted}) => {
    const theme = useTheme();

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar sx={{bgcolor: debt.isDevoted ? theme.palette.success.main : theme.palette.primary.main}}>
                    <AttachMoney/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={debt.name} secondary={debt.price + "zł"}></ListItemText>
            <Tooltip title="Więcej informacji" placement="top">
                <IconButton href={getRoute.debt.getWithId(debt.id)}>
                    <Info/>
                </IconButton>
            </Tooltip>

            <Tooltip title={debt.isDevoted ? "Zaciągnij dług" : "Spłac dług"} placement="top">
                <IconButton onClick={() => changeDevoted(debt.id)}>
                    <PriceCheck color={debt.isDevoted ? "primary" : "success"}/>
                </IconButton>
            </Tooltip>
        </ListItem>
    );
};

export default DebtItemList;