import React from "react";
import ExceptionTemplate from "../../components/exceptions";

const NotFoundPage = () => {
    return (
        <ExceptionTemplate
            code={404}
            description="Niestety nie znalezliśmy strony której szukasz :("
            title="Not Found"
        />
    );
};

export default NotFoundPage;