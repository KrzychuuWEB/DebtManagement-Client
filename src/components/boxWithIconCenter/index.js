import React from "react";
import {Avatar, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const IconPosition = styled('div')(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    marginTop: -90,
    marginBottom: 20,

    " svg": {
        fontSize: 90,
    }
}));

const BoxWithIconCenter = ({icon, children, textHeader, boxWidth}) => {

    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: 5,
                padding: 5,
                width: boxWidth ? boxWidth : "100%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <IconPosition>
                <Avatar
                    sx={{
                        padding: 6,
                        bgcolor: "#f1f1f1",
                    }}
                >
                    {icon}
                </Avatar>
            </IconPosition>

            {
                textHeader && <Typography variant="h6" textAlign="center" sx={{marginBottom: 3}}>
                    {textHeader}
                </Typography>
            }

            {children}
        </Paper>
    );
};

export default BoxWithIconCenter;