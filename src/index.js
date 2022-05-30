import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApplicationThemeConfig from './components/template/theme';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApplicationThemeConfig>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ApplicationThemeConfig>
    </React.StrictMode>
);
