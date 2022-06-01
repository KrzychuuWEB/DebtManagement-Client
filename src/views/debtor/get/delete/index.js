import React, {useContext} from "react";
import DeleteDialog from "../../../../components/dialogs/deleteDialog";
import {NotificationContext} from "../../../../notifications/context";
import {useNavigate} from "react-router-dom";
import {getRoute} from "../../../../utils/routes";

const DeleteDebtorDialog = ({isOpenDeleteDialog, handleDeleteDialogIsOpen}) => {
    const {showNotification} = useContext(NotificationContext);
    const navigate = useNavigate();

    const deleteDebtor = () => {
        navigate(getRoute.home);
        showNotification("success", "Pomyślnie usunięto dłużnika!");
    }

    return (
        <DeleteDialog
            title="Usuwanie dłużnika"
            description="Czy na pewno chcesz usunąć tego dłużnika?"
            isOpenDialog={isOpenDeleteDialog}
            handleCloseDialog={handleDeleteDialogIsOpen}
            handleDelete={deleteDebtor}
        />
    );
};

export default DeleteDebtorDialog;