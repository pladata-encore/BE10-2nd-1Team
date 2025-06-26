import React, { Suspense } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import KakaoAuthenticationPage from "../pages/KakaoAuthenticationPage.tsx";
import KakaoAuthenticationCallback from "../redirection/KakaoAuthenticationCallback.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import GoogleAuthenticationPage from "../pages/GoogleAuthenticationPage.tsx";

const RegisterAuthenticationRouter = () => {
    return (

        <Suspense fallback={<div>로딩중 ........</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="register" replace/>}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/kakao-register" element={<KakaoAuthenticationPage />}/>
                <Route path="/google-register" element={ <GoogleAuthenticationPage/> }/>
                <Route path="/callback" element={<KakaoAuthenticationCallback />} />
            </Routes>
        </Suspense>
    );
};

export default RegisterAuthenticationRouter;