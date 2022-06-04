import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApplicationThemeConfig from './utils/theme';
import {BrowserRouter} from "react-router-dom";
import Notifications from "./notifications";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApplicationThemeConfig>
            <Notifications>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Notifications>
        </ApplicationThemeConfig>
    </React.StrictMode>
);
