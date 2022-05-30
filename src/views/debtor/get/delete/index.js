import React from "react";
import DeleteDialog from "../../../../components/dialogs/deleteDialog";

const DeleteDebtorDialog = ({isOpenDeleteDialog, handleDeleteDialogIsOpen}) => {

    const deleteDebtor = () => {
        console.log("delete");
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