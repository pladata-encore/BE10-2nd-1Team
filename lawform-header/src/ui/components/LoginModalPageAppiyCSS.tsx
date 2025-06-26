import {useRecoilState} from "recoil";
import {loginModalState} from "../../atoms/loginModalAtom.ts";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import React from "react";
import KakaoLoginImage from "../../assets/kakao-icon2.png";
import GoogleLoginImage from "../../assets/google-icon2.png";
import NaverLoginImage from "../../assets/naver-icon2.png";
import handleKakaoLogin from "../../hooks/kakaoAuth.ts";
import handleGoogleLogin from "../../hooks/googleAuth.ts";
import "../../style/LoginModal.css";

const LoginModalPageAppiyCSS = ()=>{
    const [isOpen, setIsOpen] = useRecoilState(loginModalState);
    const handleClose = () => setIsOpen(false);
    return (
        <Dialog open={isOpen} onClose={handleClose}
                className="fixed z-50 inset-0 flex items-center justify-center bg-black/40">
           <Dialog.Panel className = "login-modal-container">
               <button className="close-button" onClick={handleClose}>&times;</button>
               <h2 className="login-title">
                   쉽고, 빠르게! <span className="highlight">로그인하세요</span>
               </h2>

               <div className="social-buttons">
                   <button className="social-buttons" onClick={handleKakaoLogin}>
                       <img src={KakaoLoginImage} alt="Kakao Login" />
                   </button>
                   <button className="social-button" onClick={handleGoogleLogin}>
                       <img src={GoogleLoginImage} alt="Google" />
                   </button>
                   <button className="social-button" onClick={() => alert("현재 네이버는 지원하지 않습니다.")}>
                       <img src={NaverLoginImage} alt="Naver" />
                   </button>
               </div>
               <form>
                   <input type="email" placeholder="이메일" className="login-input" />
                   <input type="password" placeholder="비밀번호" className="login-input" />

                   <div className="option-row">
                       <label>
                           <input type="checkbox" /> 이메일 기억하기
                       </label>
                       <button type="button">계정 찾기</button>
                   </div>

                   <button type="submit" className="login-button active">로그인</button>
               </form>
               <div className="footer-text">
                   <span>아직 회원이 아니신가요? </span>
                   <button className="text-blue-600 hover:underline">회원가입</button>
               </div>
           </Dialog.Panel>
        </Dialog>
    )
}

export default LoginModalPageAppiyCSS;