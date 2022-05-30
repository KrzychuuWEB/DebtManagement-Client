import React from "react";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip} from "@mui/material";
import {Info, Person} from "@mui/icons-material";
import {getRoute} from "../../../utils/routes";

const DebtorsListItem = ({debtor}) => {

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Person/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Imię i nazwisko" secondary={debtor.firstName + " " + debtor.lastName}></ListItemText>
            <Tooltip title="Więcej informacji" placement="top">
                <IconButton href={getRoute.debtor.getWithId(debtor.id)}>
                    <Info/>
                </IconButton>
            </Tooltip>
        </ListItem>
    );
};

export default DebtorsListItem;