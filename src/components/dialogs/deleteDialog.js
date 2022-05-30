import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const DeleteDialog = ({handleCloseDialog, isOpenDialog, title, description, handleDelete}) => {

    return (
        <Dialog
            open={isOpenDialog}
            onClose={() => handleCloseDialog(false)}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleCloseDialog(false)} autoFocus>Anuluj</Button>
                <Button onClick={handleDelete} variant="contained">
                    Usuń
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;