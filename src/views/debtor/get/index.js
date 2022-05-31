import {useTheme} from "@emotion/react";
import {
    Abc,
    AccessTime,
    AccountCircle,
    Add,
    AttachMoney,
    Delete,
    Edit,
    Equalizer,
    KeyboardArrowUp
} from "@mui/icons-material";
import {
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    Skeleton,
    SpeedDial,
    SpeedDialAction,
    Typography
} from "@mui/material";
import {styled} from '@mui/material/styles';
import * as React from 'react';
import {useEffect, useState} from 'react';
import DebtsList from "../../../components/debt/debtsList";
import {getRoute} from "../../../utils/routes";
import BoxWithIconCenter from "../../../components/boxWithIconCenter";
import {debtorsInMemory, debtsInMemory} from "../../../inMemoryDatabase";
import {Link, useParams} from "react-router-dom";
import EditDebtorDialog from "./edit";
import DeleteDebtorDialog from "./delete";
import {getAmountOfDebt, getLastDebtDate, getPaidDebtsCount, getUnPaidDebtsCount} from "./utils";

const FlexDiv = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
    marginTop: 25,
}));

const FlexDivItem = styled('div')(() => ({
    flex: "1 1 50%",
    marginLeft: 5,
    marginRight: 5
}));

const GetDebtorPage = () => {
    const theme = useTheme();
    let {debtorId} = useParams();
    const [debts, setDebts] = useState(debtsInMemory);
    const [debtor, setDebtor] = useState({});
    const [amountDebt, setAmountDebt] = useState(0);
    const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setDebtor(debtorsInMemory.find(debtor => debtor.id === parseInt(debtorId)));
        setLoading(false);
    }, [])

    useEffect(() => {
        setAmountDebt(getAmountOfDebt(debts));
    }, [debts])

    const handleEditDialogIsOpen = (state) => {
        setIsOpenEditDialog(state);
    }

    const handleDeleteDialogIsOpen = (state) => {
        setIsOpenDeleteDialog(state);
    }

    return (
        <div>
            <BoxWithIconCenter icon={<AccountCircle color="primary"/>}>
                <Typography variant="h5" textAlign="center"></Typography>

                <List sx={{bgcolor: 'background.paper', marginTop: 3}}>
                    <Grid container rowSpacing={3} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    {
                                        loading
                                            ? <Skeleton variant="circular">
                                                <Avatar/>
                                            </Skeleton>
                                            : <Avatar>
                                                <Abc/>
                                            </Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText primary={loading ? <Skeleton width="20%"/> : "Imię i nazwisko"}
                                              secondary={loading ? <Skeleton
                                                  width="10%"/> : debtor.firstName + " " + debtor.lastName}></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    {
                                        loading
                                            ? <Skeleton variant="circular">
                                                <Avatar/>
                                            </Skeleton>
                                            : <Avatar>
                                                <Equalizer/>
                                            </Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText primary={loading ? <Skeleton width="20%"/> : "Data utworzenia"}
                                              secondary={loading ?
                                                  <Skeleton width="10%"/> : debtor.createdAt}></ListItemText>
                            </ListItem>
                        </Grid>
                    </Grid>
                </List>
            </BoxWithIconCenter>

            <FlexDiv>
                <FlexDivItem>
                    <List sx={{bgcolor: 'background.paper'}}>
                        <ListSubheader component="div">
                            Informacje o długach
                        </ListSubheader>

                        <Divider/>
                        <ListItem>
                            <ListItemAvatar>
                                {
                                    loading
                                        ? <Skeleton variant="circular">
                                            <Avatar/>
                                        </Skeleton>
                                        : <Avatar sx={{bgcolor: amountDebt > 0 && theme.palette.primary.main}}>
                                            <AttachMoney/>
                                        </Avatar>
                                }

                            </ListItemAvatar>
                            <ListItemText primary={loading ? <Skeleton width="20%"/> : "Kwota zadłużenia"}
                                          secondary={loading ?
                                              <Skeleton width="10%"/> : amountDebt + "zł"}></ListItemText>
                        </ListItem>

                        <Divider/>
                        <ListItem>
                            <ListItemAvatar>
                                {
                                    loading
                                        ? <Skeleton variant="circular">
                                            <Avatar/>
                                        </Skeleton>
                                        : <Avatar>
                                            <AccessTime/>
                                        </Avatar>
                                }

                            </ListItemAvatar>
                            <ListItemText primary={loading ? <Skeleton width="20%"/> : "Ostatnio dodane zadłużenie"}
                                          secondary={loading ?
                                              <Skeleton width="10%"/> : getLastDebtDate(debts)}></ListItemText>
                        </ListItem>

                        <Divider/>
                        <ListItem>
                            <ListItemAvatar>
                                {
                                    loading
                                        ? <Skeleton variant="circular">
                                            <Avatar/>
                                        </Skeleton>
                                        : <Avatar
                                            sx={{bgcolor: getUnPaidDebtsCount(debts) > 0 && theme.palette.primary.main}}>
                                            <Equalizer/>
                                        </Avatar>
                                }
                            </ListItemAvatar>
                            <ListItemText primary={loading ? <Skeleton width="20%"/> : "Ilość nieopłaconych zadłużeń"}
                                          secondary={loading ?
                                              <Skeleton width="10%"/> : getUnPaidDebtsCount(debts)}></ListItemText>
                        </ListItem>

                        <Divider/>
                        <ListItem>
                            <ListItemAvatar>
                                {
                                    loading
                                        ? <Skeleton variant="circular">
                                            <Avatar/>
                                        </Skeleton>
                                        : <Avatar
                                            sx={{bgcolor: getPaidDebtsCount(debts) > 0 && theme.palette.success.main}}>
                                            <Equalizer/>
                                        </Avatar>
                                }
                            </ListItemAvatar>
                            <ListItemText primary={loading ? <Skeleton width="20%"/> : "Ilość opłaconych zadłużeń"}
                                          secondary={loading ?
                                              <Skeleton width="10%"/> : getPaidDebtsCount(debts)}></ListItemText>
                        </ListItem>
                    </List>
                </FlexDivItem>

                <FlexDivItem>
                    <DebtsList debtsList={debts} setDebtsList={setDebts} loading={loading}/>
                </FlexDivItem>
            </FlexDiv>

            <SpeedDial
                FabProps={{
                    sx: {
                        bgcolor: 'secondary.main',
                        '&:hover': {
                            bgcolor: 'secondary.dark',
                        }
                    }
                }}
                icon={<KeyboardArrowUp/>}
                sx={{position: 'fixed', bottom: 25, right: 25,}}
                ariaLabel="SpeedDial Get Debtor"
            >
                <SpeedDialAction
                    icon={<Add/>}
                    tooltipTitle="Dodaj nowy dług"
                    component={Link}
                    to={getRoute.debt.createWithDebtorId(debtor.id)}
                />
                <SpeedDialAction
                    icon={<Edit/>}
                    tooltipTitle="Edytuj dłużnika"
                    onClick={() => handleEditDialogIsOpen(true)}
                />
                <SpeedDialAction
                    icon={<Delete color="error"/>}
                    tooltipTitle="Usuń dłużnika"
                    onClick={() => handleDeleteDialogIsOpen(true)}
                />
            </SpeedDial>

            <EditDebtorDialog isOpenEditDialog={isOpenEditDialog} debtor={debtor} setDebtor={setDebtor}
                              handleEditDialogIsOpen={handleEditDialogIsOpen}/>
            <DeleteDebtorDialog
                handleDeleteDialogIsOpen={handleDeleteDialogIsOpen}
                isOpenDeleteDialog={isOpenDeleteDialog}
            />
        </div>
    );
};

export default GetDebtorPage;