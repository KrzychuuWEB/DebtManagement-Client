import React from "react";
import {Button} from "@mui/material";
import {getRoute} from "../../utils/routes";

const NotFoundPage = () => {
    return (
        <div>
            Page not found!
            <Button variant="outlined" href={getRoute.home}>Przejdz na stronę główną</Button>
        </div>
    );
};

export default NotFoundPage;