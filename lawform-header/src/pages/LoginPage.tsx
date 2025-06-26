// /pages/LoginPage.tsx
import React from "react";
import OpenLoginModal from "../ui/components/OpenLoginModal";
import LoginModalPage from "../ui/components/LoginModalPage";

const LoginPage = () => {
    return (
        <>
            <OpenLoginModal />
            <LoginModalPage />
        </>
    );
};

export default LoginPage;
