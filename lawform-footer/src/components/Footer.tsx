import React from "react";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className=" min-h-1/2 text-white py-15 bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 ">
                    <div className="flex flex-col gap-3">
                        <a className="text-xs cursor-pointer" onClick={() => navigate('/aboutus')}>
                            <strong>회사소개</strong></a>
                        <a className="text-xs">
                            <strong>로코코드 비즈니스</strong></a>
                        <a className="text-xs">
                            <strong>로코코드로이어</strong></a>
                        <a className="text-xs">
                            <strong>서비스 소개</strong></a>
                        <a className="text-xs">
                            <strong>사이트 맵</strong></a>
                        <a className="text-xs">
                            <strong>가이드</strong></a>
                        <a className="text-xs">
                            <strong>채용공고</strong></a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a className="text-xs">
                            <strong>로코코드소식</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>뉴스룸</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>공지사항</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>로코코드활동</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>자동작성</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>이벤트</strong></a>
                        <a className="text-xs">
                            <strong>고객지원</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>자주하는 질문</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>1대1 문의</strong></a>
                        <a className="text-xs cursor-pointer" onClick={() => navigate('/inquiry')}>
                            <strong>도입문의</strong></a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a className="text-xs">
                            <strong>마이로코코드</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>드라이브</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>회원정보</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>충전/적립</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>이용권</strong></a>
                        <a className="text-xs text-gray-400">
                            <strong>쿠폰등록/관리</strong></a>
                    </div>
                    <div className="col-span-3 justify-items-end">
                        <h1 className="text-4xl font-bold mb-4">Law-CoCODE</h1>
                        <div className="text-sm text-gray-400 space-y-1 justify-items-end">
                            <p className="font-bold text-white">로코코드(주)</p>
                            <p>대표이사 : 이의건</p>
                            <p>주소 : 서울특별시 서초구 효령로 335</p>
                            <p>사업자등록번호 : 123-45-67890</p>
                            <p>고객센터 02-1234-5678</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-500 text-sm">
                            © 2025 Law-CoCODE Inc. All rights reserved.
                        </div>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm">이용약관</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">개인정보처리방침</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;