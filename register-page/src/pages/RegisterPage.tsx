// /pages/LoginPage.tsx
import React from "react";
import OpenLoginModal from "../ui/components/OpenLoginModal";
import RegisterModalPage from "../ui/components/RegisterModalPage.tsx";

const RegisterPage = () => {
    return (
        <>
            <OpenLoginModal />
            <RegisterModalPage />
        </>
    );
};

export default RegisterPage;
