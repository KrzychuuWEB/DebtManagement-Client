import React, {useState} from "react";
import {Alert, Snackbar} from "@mui/material";
import {NotificationContext} from "./context";

const Notifications = ({children}) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarProperty, setSnackbarProperty] = useState({});

    const showNotification = (variant, message) => {
        setOpenSnackbar(true);
        setSnackbarProperty({
            variant: variant ? variant : "success",
            message: message ? message : "",
        });
    };

    const handleCloseNotification = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    return (
        <NotificationContext.Provider value={{showNotification}}>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseNotification}>
                <Alert variant="filled" severity={snackbarProperty.variant}
                       sx={{width: '100%'}}>
                    {snackbarProperty.message}
                </Alert>
            </Snackbar>

            {children}
        </NotificationContext.Provider>
    );
};

export default Notifications;