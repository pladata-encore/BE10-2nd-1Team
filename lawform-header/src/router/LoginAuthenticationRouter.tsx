import React, { Suspense } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import KakaoAuthenticationPage from "../pages/KakaoAuthenticationPage.tsx";
import KakaoAuthenticationCallback from "../redirection/KakaoAuthenticationCallback.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import GoogleAuthenticationPage from "../pages/GoogleAuthenticationPage.tsx";

const LoginAuthenticationRouter = () => {
    return (

        <Suspense fallback={<div>로딩중 ........</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="login" replace/>}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/kakaologin" element={<KakaoAuthenticationPage />}/>
                <Route path="/googlelogin" element={ <GoogleAuthenticationPage/> }/>
                <Route path="/callback" element={<KakaoAuthenticationCallback />} />
            </Routes>
        </Suspense>
    );
};

export default LoginAuthenticationRouter;