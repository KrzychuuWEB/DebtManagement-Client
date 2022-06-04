import React from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {getRoute} from "../../utils/routes";

const Box = styled('div')(() => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "80vh",
}));

const OpacityCode = styled('div')(({theme}) => ({
    position: "absolute",
    left: 0,
    right: 0,
    fontSize: 400,
    zIndex: -2,
    opacity: 0.07,
    textAlign: "center",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
        fontSize: 200,
    }
}));

const ExceptionTemplate = ({title, description, code}) => {

    return (
        <Box>
            <OpacityCode>{code}</OpacityCode>

            <Typography variant="h1" color="primary">
                {title}
            </Typography>

            <Typography variant="body1">
                {description}
            </Typography>

            <Button href={getRoute.home} variant="outlined" sx={{marginTop: 2}}>
                Strona główna
            </Button>
        </Box>
    );
};

export default ExceptionTemplate;