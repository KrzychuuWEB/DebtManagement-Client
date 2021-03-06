import React, {useState} from "react";
import axios from "axios";
import ExceptionTemplate from "../../../components/exceptions";

const exceptions = [
    {
        title: "Internal Server Error",
        description: "Przepraszamy, mamy chwilowe problemy z serwerem!",
        code: 500,
    },
    {
        title: "Not Found",
        description: "Przepraszamy, nie możemy znaleźć wybranej strony!",
        code: 404,
    },
];

const ResponseInterceptor = ({children}) => {
    const [status, setStatus] = useState(null);

    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.code === "ERR_NETWORK") {
            setStatus(404);
        } else {
            switch (error.response.code) {
                case 404:
                    setStatus(404);
                    break;
                case 500:
                    setStatus(500);
                    break;
                default: setStatus(null);
            }
        }

        return Promise.reject(error);
    });

    return (
        <div>
            {
                status != null
                    ? exceptions.map(exception => (
                        status === exception.code && <ExceptionTemplate
                            key={exception.code}
                            title={exception.title}
                            description={exception.description}
                            code={exception.code}
                        />
                    ))
                    : children
            }
        </div>
    );
};

export default ResponseInterceptor;