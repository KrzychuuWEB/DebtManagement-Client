import React, {useEffect, useState} from "react";
import {
    Avatar,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Skeleton,
    SpeedDial,
    SpeedDialAction
} from "@mui/material";
import {
    Abc,
    AttachMoney,
    Delete,
    Description,
    Edit,
    Equalizer,
    Info,
    KeyboardArrowUp,
    Person
} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import {Link, useParams} from "react-router-dom";
import {getRoute} from "../../../utils/routes";
import BoxWithIconCenter from "../../../components/boxWithIconCenter";
import {debtsInMemory} from "../../../inMemoryDatabase";
import EditDebtDialog from "./edit";
import DeleteDebtDialog from "./delete";

const FlexDiv = styled('div')(() => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
}));

const GetDebtPage = () => {
    const [debt, setDebt] = useState({debtor: {}});
    let {debtId} = useParams();
    const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleToggleEditDialog = state => {
        setIsOpenEditDialog(state);
    }

    const handleToggleDeleteDialog = state => {
        setIsOpenDeleteDialog(state);
    }

    useEffect(() => {
        setDebt(debtsInMemory.find(debt => debt.id === parseInt(debtId)));
        setLoading(false);
    }, [debtId]);

    return (
        <div>
            <BoxWithIconCenter icon={<AttachMoney color="primary"/>}>
                <FlexDiv>
                    <div style={{width: "47%"}}>
                        <List>
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
                                <ListItemText primary={loading ? <Skeleton width="20%"/> : "Nazwa długu"}
                                              secondary={loading ? <Skeleton width="10%"/> : debt.name}/>
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
                                                <Description/>
                                            </Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText primary={loading ? <Skeleton width="20%"/> : "Opis długu"}
                                              secondary={loading ? <Skeleton width="10%"/> : debt.description}/>
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
                                                <AttachMoney/>
                                            </Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText primary={loading ? <Skeleton width="20%"/> : "Kwota długu"}
                                              secondary={loading ? <Skeleton width="10%"/> : debt.price + "zł"}/>
                            </ListItem>
                        </List>
                    </div>

                    <div style={{width: "47%"}}>
                        <List>
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
                                <ListItemText primary={loading ? <Skeleton width="20%"/> : "Data zaciągnięcia długu"}
                                              secondary={loading ? <Skeleton width="10%"/> : debt.addDate}/>
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
                                                <Equalizer/>
                                            </Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText
                                    primary={loading ? <Skeleton width="20%"/> : "Data ostatniej aktualizacji długu"}
                                    secondary={loading ? <Skeleton width="10%"/> : debt.editDate}/>
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
                                                <Person/>
                                            </Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText primary={loading ? <Skeleton width="20%"/> : "Dłużnik"}
                                              secondary={loading ? <Skeleton
                                                  width="10%"/> : debt.debtor.firstName + " " + debt.debtor.lastName}/>
                                {
                                    loading
                                        ? <Skeleton variant="circular"><IconButton/></Skeleton>
                                        : <IconButton edge="end" component={Link}
                                                      to={getRoute.debtor.getWithId(debt.debtor.id)}>
                                            <Info/>
                                        </IconButton>
                                }
                            </ListItem>
                        </List>
                    </div>
                </FlexDiv>
            </BoxWithIconCenter>

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
                    icon={<Edit/>}
                    tooltipTitle="Edytuj dług"
                    onClick={() => handleToggleEditDialog(true)}
                />
                <SpeedDialAction
                    icon={<Delete color="error"/>}
                    tooltipTitle="Usuń dług"
                    onClick={() => handleToggleDeleteDialog(true)}
                />
            </SpeedDial>

            <EditDebtDialog debt={debt} setDebt={setDebt} isOpenEditDialog={isOpenEditDialog}
                            handleToggleEditDialog={handleToggleEditDialog}/>
            <DeleteDebtDialog
                handleToggleDeleteDialog={handleToggleDeleteDialog}
                isOpenDeleteDialog={isOpenDeleteDialog}
            />
        </div>
    );
};

export default GetDebtPage;