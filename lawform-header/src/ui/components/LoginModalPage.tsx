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
import LoginForm from "./LoginForm.tsx";

const LoginModalPage = ()=>{
    const [isOpen, setIsOpen] = useRecoilState(loginModalState);
    const handleClose = () => setIsOpen(false);
    return (
        <Dialog open={isOpen} onClose={handleClose}
                className="fixed z-50 inset-0 flex items-center justify-center bg-black/40">
           <Dialog.Panel className = "bg-white rounded-2xl shadow-2xl w-full max-w-sm pt-10 px-6 pb-12 relative">
               <button className="absolute top-4 right-4" onClick={handleClose}>
                   <X size={20} />
               </button>
               <h2 className="text-center text-lg font-semibold mb-4">
                   쉽고, 빠르게! <span className="text-blue-600">로그인하세요</span>
               </h2>

               <div className="flex items-center justify-center gap-4 mb-6">
                   <button onClick={handleKakaoLogin} className="w-17 h-17 bg-white rounded-full cursor-pointer">
                       <img src={KakaoLoginImage} alt="Kakao Login" className="w-full h-full object-contain" />
                   </button>
                   <button onClick={handleGoogleLogin} className="w-17 h-17 bg-white rounded-full cursor-pointer">
                       <img src={GoogleLoginImage} alt="Google Login" className="w-full h-full object-contain" />
                   </button>
                   <button onClick={() => alert("현재는 네이버 로그인은 지원하지 않습니다.")} className="w-17 h-17 bg-white rounded-full cursor-pointer">
                       <img src={NaverLoginImage} alt="Naver Login" className="w-full h-full object-contain" />
                   </button>
               </div>
               <div>
                   <LoginForm/>
               </div>

               <div className="text-center mt-6 text-sm">
                   <span>아직 회원이 아니신가요? </span>
                   <button className="text-blue-600 hover:underline">회원가입</button>
               </div>
           </Dialog.Panel>
        </Dialog>
    )
}

export default LoginModalPage;