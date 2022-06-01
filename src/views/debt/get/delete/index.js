import React, {useContext} from "react";
import DeleteDialog from "../../../../components/dialogs/deleteDialog";
import {NotificationContext} from "../../../../notifications/context";
import {useNavigate} from "react-router-dom";
import {getRoute} from "../../../../utils/routes";

const DeleteDebtDialog = ({isOpenDeleteDialog, handleToggleDeleteDialog}) => {
    const {showNotification} = useContext(NotificationContext);
    const navigate = useNavigate();

    const deleteDebt = () => {
        navigate(getRoute.home);
        showNotification("success", "Pomyślnie usunięto dług!");
    }

    return (
        <DeleteDialog
            title="Usuwanie długu"
            description="Czy na pewno chcesz usunąć dług?"
            isOpenDialog={isOpenDeleteDialog}
            handleCloseDialog={handleToggleDeleteDialog}
            handleDelete={deleteDebt}
        />
    );
};

export default DeleteDebtDialog;