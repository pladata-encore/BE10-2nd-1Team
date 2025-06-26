import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CircularProgress, Modal} from "@mui/material";
import TopButton from "./components/TopButton.tsx";
import InquiryButton from "./components/InquiryButton.tsx";

const LawformHeaderApp = lazy(() => import("lawformHeaderApp/App"));
const LawformFooterApp = lazy(() => import("lawformFooterApp/App"));
const LawformMainApp = lazy(() => import("lawformMainApp/App"));
const LawformInquiryApp = lazy(() => import("lawformInquiryApp/App"));
const LawformAboutUsApp = lazy(() => import("lawformAboutUsApp/App"));
const ModalTestApp = lazy(() => import("modalTestApp/App"));
const LawformTopic1App = lazy(() => import("lawformTopic1App/App"));


const App = () => (
    <BrowserRouter>
        <Suspense fallback={<CircularProgress/>}>
            <LawformHeaderApp/>
            <TopButton/>
            <InquiryButton/>
            {/*의건 형님 개발하실 때 사용하실 거면 주석 풀고 사용하시면 됩니다.*/}
            <Routes>
                {/*<Route path="/*" element={<div> Home Page <ModalTestApp/></div>}/>*/}
                <Route path="/" element={<LawformMainApp/>}/>
                <Route path="/inquiry" element={<LawformInquiryApp/>}/>
                <Route path="/aboutus" element={<LawformAboutUsApp/>}/>
                <Route path="/topic1" element={<LawformTopic1App/>}/>
            </Routes>
            <LawformFooterApp/>
        </Suspense>
    </BrowserRouter>
);

export default App;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App/>);