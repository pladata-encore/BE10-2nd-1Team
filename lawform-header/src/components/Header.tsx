import React, {useState} from "react";
import '../index.css';
import logoImage from '../assets/logo.jpg';
import {useNavigate} from "react-router-dom";
import MenuIcon from "./MenuIcons.tsx";
import {useRecoilState} from "recoil";
import {loginModalState} from "../atoms/loginModalAtom.ts";
import LoginModalPage from "../ui/components/LoginModalPage.tsx";
import RegisterModalPage from "../ui/components/RegisterModalPage.tsx";
import {ModalState} from "../atoms/ModalAtom.ts";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [, setModalOpen] = useRecoilState(loginModalState);
    const [, setModalOpen1] = useRecoilState(ModalState);

    return (
        <header>
            <LoginModalPage/>
            <RegisterModalPage/>
            <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="h-16 flex justify-between items-center mx-auto px-6 py-6">
                    <div className="">
                        <img
                            src={logoImage}
                            alt="로고 이미지"
                            onClick={() => {
                                navigate('/');
                                setIsMenuOpen(false);
                            }}
                            className="w-35 h-35 object-contain cursor-pointer"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="text-gray-600 text-base font-bold cursor-pointer"
                                onClick={() => setModalOpen(true)}>
                            로그인
                        </button>
                        <button className="text-gray-600 text-base font-bold cursor-pointer"
                                onClick={() => setModalOpen1(true)}>
                            회원가입
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 text-xl font-bold cursor-pointer"
                        >
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen ? <div
                className="fixed left-0 right-0 bottom-0 top-20 bg-gray-400 opacity-50 z-40"
                onClick={() => setIsMenuOpen(false)}
            ></div> : <div/>}
            <div
                className={`overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] fixed rounded-lg ${!isMenuOpen ? 'right-0' : ' right-8'} top-1/2 transform -translate-y-1/2 h-4/5 w-3/7 bg-white shadow-xl z-50 transition-transform duration-300 ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="pt-8 pb-4 px-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-base font-bold">주제별 법률 문서</div>
                        <button
                            className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer text-center align-middle"
                        >
                            법률문서 전체보기>
                        </button>
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="flex items-center gap-1 p-2">
                            <MenuIcon name="searchDocument" size={30}/>
                            <div className="flex-1">
                                <a className=" text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                                   onClick={() => {
                                       navigate('/topic1');
                                       setIsMenuOpen(false);
                                   }}>
                                    내용증명
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6 rounded flex flex-col items-center justify-center">
                                <MenuIcon name="paymentOrderCoin" size={14} className="-mb-4"/>
                                <MenuIcon name="paymentOrderHand" size={20} className="-mt-2"/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    지급명령
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <MenuIcon name="contract" size={30}/>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    계약서
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="agreement" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    합의서
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="accusation" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    고소장
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="laborContract" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    근로계약
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="promissoryNote" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    차용증
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="powerOfAttorney" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    위임장
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="accountsReceivable" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    미수금
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="serviceContract" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    용역계약
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="defamation" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    명예훼손,모욕
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="damageCompensation" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    손해배상
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="trafficAccident" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    교통사고
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="privacyPolicy" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    개인정보처리방침
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="landlord" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    임대인
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="tenant" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    임차인
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200"/>
                <div className="pt-8 pb-4 px-6">
                    <div className="text-base font-bold">AI 법률 문서</div>
                    <div className="text-xs">AI 모델을 선택하면 채팅으로 법률문서를 작성할 수 있어요.</div>
                    <div className=" mt-6 grid grid-cols-4">
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="unreceivedMoney" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    못 받은 돈
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="laborPartTimeContract" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    근로 · 알바 계약서
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="onlineFraudInsult" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    중고사기 · 온라인모욕
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="realEstateRental" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    부동산 · 임대차
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="serviceTermsPrivacy" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    서비스이용약관 · 개인정보처리방침
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2">
                            <div className="flex-shrink-0 w-6 h-6  rounded flex items-center justify-center">
                                <MenuIcon name="shareholderMeeting" size={30}/>
                            </div>
                            <div className="flex-1">
                                <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">
                                    주주총회
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 pt-8 pb-4 px-6">
                    <div className="text-base font-bold">서비스 소개</div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center gap-3 p-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <img src="https://cdn.lawform.io/main/autodoc.svg"/>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">자동작성</div>
                                <div className="text-sm text-gray-600">간단한 질문 및 선택만으로 법률문서를 쉽게 완성</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <img src=" https://cdn.lawform.io/main/esign.svg"/>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">전자서명</div>
                                <div className="text-sm text-gray-600">개인 또는 기업간의 간편 계약 체결</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <img src=" https://cdn.lawform.io/main/drive.svg"/>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">드라이브</div>
                                <div className="text-sm text-gray-600">안전하게 문서 보관, 관리 및 공유</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <img src=" https://cdn.lawform.io/main/teams.svg"/>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">TEAMS</div>
                                <div className="text-sm text-gray-600">기업 전용 로코코드 서비스</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <img src=" https://cdn.lawform.io/main/lawform_business.svg"/>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">로코코드 비즈니스</div>
                                <div className="text-sm text-gray-600">AI 법무관리 솔루션</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <img src=" https://cdn.lawform.io/main/ic_34_demo_blue.svg"/>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">서비스 체험</div>
                                <div className="text-sm text-gray-600">시작은 쉽지만 결과는 놀라는 서비스</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 pb-4 px-6">
                    <div className="text-base font-bold">문서 작성 지원 서비스</div>
                    <div className=" mt-6 grid grid-cols-2">
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">자동작성
                                가이드</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">초보자도 쉽게 쓰는 법률문서 작성
                                가이드</a>
                        </div>
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">로코코드 임금
                                계산기</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">근로계약서 쓰기 전 임금계산기로 월급액
                                확인</a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 pb-4 px-6">
                    <div className="text-base font-bold">기업 전용 서비스</div>
                    <div className=" mt-6 grid grid-cols-2">
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">로코코드
                                비즈니스</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">기업 법무관리 효율화를 위한 AI 법무관리
                                솔루션</a>
                        </div>
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">스타트업
                                필수문서</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">시작하는 스타트업을 위한 법률문서
                                프로그램</a>
                        </div>
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">창업자의
                                리걸로드</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">창업자를 위한 콘텐츠, 교육 영상, 커뮤니티가
                                있는 스페이스</a>
                        </div>
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">주주총회</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">소규모 특례 기업을 위한 간편한 주주총회
                                서비스</a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 pb-4 px-6">
                    <div className="text-base font-bold">고객지원</div>
                    <div className=" mt-6 grid grid-cols-2">
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">공지사항</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">서비스 공지 및 신규/개선문서를 확인할 수
                                있어요</a>
                        </div>
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">자주 하는
                                질문</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">서비스 이용방법에 관한 의문을 해소할 수
                                있어요</a>
                        </div>
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">1대1
                                문의</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">궁금하신 사항을 빠르게 해결할 수
                                있어요</a>
                        </div>
                        <div className="items-center gap-3 p-2">
                            <a href="#" className=" block text-sm text-gray-700 hover:text-blue-600 font-bold">도입문의</a>
                            <a href="#" className=" text-sm text-gray-700 hover:text-blue-600">서비스 도입 관련 문의를 할 수 있어요</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;