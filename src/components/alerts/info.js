import React from "react";
import {Alert} from "@mui/material";

const InfoAlert = ({title}) => {

    return (
        <Alert severity="info" variant="filled" sx={{margin: 1}}>{title}</Alert>
    );
};

export default InfoAlert;