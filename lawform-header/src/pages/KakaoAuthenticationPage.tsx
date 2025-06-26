import React, { useEffect } from "react";
import handleKakaoLogin from "../hooks/kakaoAuth.ts";

const KakaoAuthenticationPage: React.FC = () => {
    useEffect(() => {
        handleKakaoLogin(); // 페이지가 로드되자마자 카카오 로그인 실행
    }, []);

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <p>카카오 로그인 중입니다...</p>
        </div>
    );
};

export default KakaoAuthenticationPage;