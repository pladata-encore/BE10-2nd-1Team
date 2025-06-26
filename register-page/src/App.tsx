import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";
import RegisterAuthenticationRouter from "./router/RegisterAuthenticationRouter.tsx";

const App = () => (
    <RecoilRoot>
        <RegisterAuthenticationRouter />
    </RecoilRoot>
);

export default App;