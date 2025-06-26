import {useRecoilState} from "recoil";
import {ModalState} from "../../atoms/ModalAtom.ts";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import React from "react";
import KakaoLoginImage from "../../assets/kakao-icon2.png";
import GoogleLoginImage from "../../assets/google-icon2.png";
import NaverLoginImage from "../../assets/naver-icon2.png";
import handleKakaoLogin from "../../hooks/kakaoAuth.ts";
import handleGoogleLogin from "../../hooks/googleAuth.ts";
import SubscriptionPath from "./SubscriptionPath.tsx";
import OtherDesignSubscriptionPath from "./OtherDesignSubscriptionPath.tsx";

const RegisterModalPage = ()=>{
    const [isOpen, setIsOpen] = useRecoilState(ModalState);
    const handleClose = () => setIsOpen(false);
    return (
        <Dialog open={isOpen} onClose={handleClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <Dialog.Panel className = "w-[480px] max-w-full h-auto px-6 pt-6 pb-[50px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] box-border flex flex-col rounded-xl relative">
                <button className="absolute right-[16px] top-[10px] h-[30px] w-[24px] cursor-pointer text-[30px] text-[#B0B0B0]" onClick={handleClose}>
                    &times;
                </button>
                <h2 className="text-center text-[25px] font-[700] tracking-[-0.05em] text-gray-800 mb-6 mt-4">
                    쉽고, 빠르게! <span className="text-[#019AEC]">로코코하세요</span>
                </h2>

                <div className="flex w-full justify-center gap-x-[20px] mb-6">
                    <button onClick={handleKakaoLogin} className="w-17 h-17 bg-white rounded-full ">
                        <img src={KakaoLoginImage} alt="Kakao Login" className="w-full h-full object-contain" />
                    </button>
                    <button onClick={handleGoogleLogin} className="w-17 h-17 bg-white rounded-full ">
                        <img src={GoogleLoginImage} alt="Google Login" className="w-full h-full object-contain" />
                    </button>
                    <button onClick={() => alert("현재는 네이버 로그인은 지원하지 않습니다.")} className="w-17 h-17 bg-white rounded-full">
                        <img src={NaverLoginImage} alt="Naver Login" className="w-full h-full object-contain" />
                    </button>
                </div>
                {/* 이메일 가입 */}
                <div className="w-full flex justify-center mt-4">
                    <button className="w-full max-w-xs px-4 py-3 cursor-pointer text-base bg-[#019AEC] hover:bg-[#0194E3] text-white mb-3">
                        이메일로 가입하기
                    </button>
                </div>
                <div>
                    <OtherDesignSubscriptionPath/>
                </div>

                <p className="flex justify-center text-[12px] font-[400] tracking-[-0.56px] text-gray-500 mt-4">
                    변호사 회원은 가입 후 변호사 인증해주세요.
                </p>
            </Dialog.Panel>
        </Dialog>
    )
}

export default RegisterModalPage;