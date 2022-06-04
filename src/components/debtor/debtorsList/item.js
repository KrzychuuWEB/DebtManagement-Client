import React from "react";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Skeleton, Tooltip} from "@mui/material";
import {Info, Person} from "@mui/icons-material";
import {getRoute} from "../../../utils/routes";
import {formatDate} from "../../../utils/formatDate";

const DebtorsListItem = ({debtor, loading}) => {

    return (
        <ListItem>
            <ListItemAvatar>
                {
                    loading
                        ? <Skeleton variant="circular">
                            <Avatar/>
                        </Skeleton>
                        : <Avatar>
                            <Person/>
                        </Avatar>
                }
            </ListItemAvatar>

            <ListItemText primary={loading ? <Skeleton width="8%"/> : debtor.firstName + " " + debtor.lastName} secondary={
                loading ? <Skeleton width="5%"/> : formatDate(debtor.createdAt)
            }></ListItemText>

            {
                loading
                    ? <Skeleton variant="circular"><IconButton></IconButton></Skeleton>
                    : <Tooltip title="Więcej informacji" placement="top">
                        <IconButton href={getRoute.debtor.getWithId(debtor.id)}>
                            <Info/>
                        </IconButton>
                    </Tooltip>
            }
        </ListItem>
    );
};

export default DebtorsListItem;