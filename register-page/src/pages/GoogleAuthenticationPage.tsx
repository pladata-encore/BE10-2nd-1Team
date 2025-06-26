import React, {useEffect} from "react";
import handleGoogleLogin from "../hooks/googleAuth.ts";

const GoogleAuthenticationPage: React.FC = () => {
    useEffect(() => {
        handleGoogleLogin(); // 페이지가 로드되자마자 카카오 로그인 실행
    }, []);
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <p>구글 로그인 중입니다...</p>
        </div>
    );
};


export default GoogleAuthenticationPage;