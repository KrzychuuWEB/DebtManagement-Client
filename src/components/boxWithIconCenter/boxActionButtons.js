import React from "react";
import {styled} from "@mui/material/styles";

const ActionButtons = styled('div')(({theme}) => ({
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}));

const BoxActionButtons = ({children}) => {

    return (
        <ActionButtons>
            {children}
        </ActionButtons>
    );
};

export default BoxActionButtons;