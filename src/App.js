import React from "react";
import DefaultTemplate from "./components/template/defaultTemplate";
import {Route, Routes} from "react-router-dom";
import HomePage from "./views/home";
import GetDebtorPage from "./views/debtor/get";
import GetDebtPage from "./views/debt/get";
import {getRoute} from "./utils/routes";
import NotFoundPage from "./views/notFoundPage/NotFoundPage";
import CreateDebtPage from "./views/debt/create";
import CreateDebtorPage from "./views/debtor/create";

const App = () => {
    return (
        <DefaultTemplate>
            <Routes>
                <Route path={getRoute.home} element={<HomePage/>}/>
                <Route path={getRoute.debtor.getWithId(":debtorId")} element={<GetDebtorPage/>}/>
                <Route path={getRoute.debtor.create} element={<CreateDebtorPage/>}/>
                <Route path={getRoute.debt.getWithId(":debtId")} element={<GetDebtPage/>}/>
                <Route path={getRoute.debt.createWithDebtorId(":debtorId")} element={<CreateDebtPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </DefaultTemplate>
    );
}

export default App;
