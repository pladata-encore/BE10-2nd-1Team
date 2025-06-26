import React from "react";
import KakaoLoginImage from "../../assets/kakao-icon2.png";
import GoogleLoginImage from "../../assets/google-icon2.png";
import NaverLoginImage from "../../assets/naver-icon2.png";

type Provider = "google" | "kakao" | "github";

interface Props {
    provider: Provider;
    onClick: () => void;
}

const providerInfo: Record<Provider, {
    label: string;
    color: string;
    icon: React.ReactNode;
}> = {
    kakao: { label: "Kakao 로그인", color: "", icon: null },
    google: { label: "Google 로그인", color: "", icon: null },
    naver: { label: "Naver 로그인", color: "", icon: null },// 사용하지 않음
};

const SocialLoginButton: React.FC<Props> = ({ provider, onClick }) => {

    const info = providerInfo[provider];

    if (!info.label) return null; // 유효하지 않은 provider 방어 처리

    return (
        <div>
            <img
                src={KakaoLoginImage}
                onClick={onClick}
                alt="Kakao Login"
                style={{
                    cursor: "pointer",
                    display: "block",
                    margin: "5px",  // 가운데 정렬
                }}
            />
            <img
                src={GoogleLoginImage}
                onClick={onClick}
                alt="Google Login"
                style={{
                    cursor: "pointer",
                    display: "block",
                    margin: "5px",  // 가운데 정렬
                }}
            />
            <img
                src={NaverLoginImage}
                onClick={onClick}
                alt="Google Login"
                style={{
                    cursor: "pointer",
                    display: "block",
                    margin: "5px",  // 가운데 정렬
                }}
            />
        </div>

    );
};

export default SocialLoginButton;