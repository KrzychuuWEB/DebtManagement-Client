import React from "react";
import DeleteDialog from "../../../../components/dialogs/deleteDialog";

const DeleteDebtDialog = ({isOpenDeleteDialog, handleToggleDeleteDialog}) => {

    const deleteDebt = () => {
        console.log("delete");
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