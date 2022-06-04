import React from "react";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Skeleton, Tooltip, useTheme} from "@mui/material";
import {AttachMoney, Info, PriceCheck} from "@mui/icons-material";
import {getRoute} from "../../../utils/routes";

const DebtItemList = ({debt, changeDevoted, loading}) => {
    const theme = useTheme();

    return (
        <ListItem>
            <ListItemAvatar>
                {
                    loading
                        ? <Skeleton variant="circular">
                            <Avatar/>
                        </Skeleton>
                        : <Avatar
                            sx={{bgcolor: debt.isDevoted ? theme.palette.success.main : theme.palette.primary.main}}>
                            <AttachMoney/>
                        </Avatar>
                }
            </ListItemAvatar>
            <ListItemText primary={loading ? <Skeleton width="8%"/> : debt.name}
                          secondary={loading ? <Skeleton width="5%"/> : debt.price + "zł"}></ListItemText>

            {
                loading
                    ? <Skeleton variant="circular"><IconButton/></Skeleton>
                    : <Tooltip title="Więcej informacji" placement="top">
                        <IconButton href={getRoute.debt.getWithId(debt.id)}>
                            <Info/>
                        </IconButton>
                    </Tooltip>
            }

            {
                loading
                    ? <Skeleton variant="circular" sx={{marginLeft: 1}}><IconButton/></Skeleton>
                    : <Tooltip title={debt.isDevoted ? "Zaciągnij dług" : "Spłac dług"} placement="top">
                        <IconButton onClick={() => changeDevoted(debt.id, debt.isDevoted)}>
                            <PriceCheck color={debt.isDevoted ? "primary" : "success"}/>
                        </IconButton>
                    </Tooltip>
            }

        </ListItem>
    );
};

export default DebtItemList;