import React from "react";
import { RecoilRoot } from "recoil";
import Header from "./components/Header.tsx";

const App = () => (
    <RecoilRoot>
        <Header />
    </RecoilRoot>
);

export default App;