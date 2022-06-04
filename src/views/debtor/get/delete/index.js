import React, {useContext} from "react";
import DeleteDialog from "../../../../components/dialogs/deleteDialog";
import {NotificationContext} from "../../../../notifications/context";
import {useNavigate} from "react-router-dom";
import {getRoute} from "../../../../utils/routes";
import {deleteDebtorById} from "../../../../api/service/debtorService";

const DeleteDebtorDialog = ({isOpenDeleteDialog, handleDeleteDialogIsOpen, debtorId}) => {
    const {showNotification} = useContext(NotificationContext);
    const navigate = useNavigate();

    async function deleteById(id) {
        return await deleteDebtorById(id);
    }

    const deleteDebtor = () => {
        deleteById(debtorId).then(() => {
            navigate(getRoute.home);
            showNotification("success", "Pomyślnie usunięto dłużnika!");
        })
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