import env from "../env.ts";
import {useNavigate} from "react-router-dom";

const handleKakaoLogin = () => {
    const kakaoAuthenticationUrl = env.api.KAKAO_AUTHENTICATION_URL;
    const popup = window.open(kakaoAuthenticationUrl, '_blank', 'width=500,height=600');

    if (!popup) {
        alert('팝업 차단되어 있습니다. 팝업 허용 후 다시 시도하세요.');
        return;
    }

    const receiveMessage = (event: MessageEvent) => {
        console.log('📨 받은 메시지:', event.origin, event.data);

        // origin 검사 완화
        if (!event.origin.startsWith('http://localhost')) {
            console.warn('❌ 허용되지 않은 origin:', event.origin);
            return;
        }

        const { accessToken, user } = event.data;
        if (!accessToken) {
            console.warn('❌ accessToken 없음');
            return;
        }

        localStorage.setItem('userToken', accessToken);
        window.dispatchEvent(new Event("user-token-changed"));

        window.removeEventListener('message', receiveMessage);

        // 팝업 닫기
        try {
            popup.close();
        } catch (e) {
            console.warn('팝업 닫기 실패:', e);
        }
    };
    window.addEventListener('message', receiveMessage);
};

 export default handleKakaoLogin;