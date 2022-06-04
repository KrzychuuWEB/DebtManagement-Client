import React, {useContext} from "react";
import DeleteDialog from "../../../../components/dialogs/deleteDialog";
import {NotificationContext} from "../../../../notifications/context";
import {useNavigate} from "react-router-dom";
import {getRoute} from "../../../../utils/routes";
import {deleteDebtById} from "../../../../api/service/debtService";

const DeleteDebtDialog = ({isOpenDeleteDialog, handleToggleDeleteDialog, debtId}) => {
    const {showNotification} = useContext(NotificationContext);
    const navigate = useNavigate();

    async function deleteById(id) {
        return await deleteDebtById(id);
    }

    const deleteDebt = () => {
        deleteById(debtId).then(() => {
            navigate(getRoute.home);
            showNotification("success", "Pomyślnie usunięto dług!");
        })
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