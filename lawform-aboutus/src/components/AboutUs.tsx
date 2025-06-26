import React from "react";
import '../index.css';
import xBanner from '../assets/x_banner.jpg';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import {useScrollAnimation} from './useScrollAnimation'; // 훅 import

const AboutUs = () => {
    const [heroRef, heroInView] = useScrollAnimation(0.3);
    const [visionRef, visionInView] = useScrollAnimation(0.3);
    const [brandRef, brandInView] = useScrollAnimation(0.3);
    const [statsRef, statsInView] = useScrollAnimation(0.3);
    const [historyRef, historyInView] = useScrollAnimation(0.3);
    const [pressRef, pressInView] = useScrollAnimation(0.3);
    const [ctaRef, ctaInView] = useScrollAnimation(0.3);

    return (
        <div>
            <div className="bg-gray-100">
                <div ref={heroRef} className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-2 gap-30">
                    <div className="flex flex-col items-start justify-center space-y-4">
                        <div
                            className={`font-bold text-4xl transition-all duration-800 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            회사소개
                        </div>
                        <div
                            className={`text-gray-500 text-sm transition-all duration-800 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            대한민국 1등 법률문서자동작성 플랫폼
                        </div>
                    </div>
                    <div className="content-center">
                        <div
                            className={`rounded flex items-center justify-center transition-all duration-1000 delay-400 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <img src="https://cdn.lawform.io/images/banner/aboutus/md_1.svg"/>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={visionRef} className="max-w-4xl mx-auto px-4 py-8">
                <div
                    className={`text-2xl font-bold mb-4 underline transition-all duration-800 ${visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Vision
                </div>
                <div
                    className={`text-xl font-bold mb-4 w-4/5 transition-all duration-800 delay-200 ${visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-blue-500">법(Lex) 친구(Amicus)</span>라는
                    뜻을 가진<span className="text-blue-500"> 아미쿠스렉스</span>는 일상에서 누구에게나 필요한 법의 가치가 모두에게 실현될 수 있는 세상을 만들고자
                    탄생했습니다.
                </div>
                <div
                    className={`inline-block rounded-lg w-full transition-all duration-800 delay-400 ${visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center justify-between gap-4 p-4">
                        <button
                            className="w-65 h-65 bg-blue-400 rounded-full flex flex-col items-center justify-center text-base font-bold border text-white">
                            <span className="font-extrabold text-3xl pb-3">1st</span>
                            <span> 특허받은 법률문서 자동작성</span>
                            <span> 플랫폼을 운영하는</span>
                            <span> 국내 선두</span>
                            <span> 리걸테크 기업입니다.</span>
                        </button>
                        <button
                            className="w-65 h-65 bg-blue-400 rounded-full flex flex-col items-center justify-center text-base font-bold border text-white">
                            <span className="font-extrabold text-3xl pb-3">Convenience</span>
                            <span>일상 언어로도</span>
                            <span>쉽게 소통할 수 있는</span>
                            <span>법률AI 서비스를 제공합니다.</span>
                        </button>
                        <button
                            className="w-65 h-65 bg-blue-400 rounded-full flex flex-col items-center justify-center text-base font-bold border text-white">
                            <span className="font-extrabold text-3xl pb-3">Trust</span>
                            <span>법조경력 20년 이상의</span>
                            <span>전문 변호사팀이 설계한</span>
                            <span>원스톱 서비스로 고객님의</span>
                            <span>시간과 비용을 절감합니다.</span>
                        </button>
                    </div>
                </div>

                <div ref={brandRef}
                     className={`transition-all duration-800 ${brandInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-2xl font-bold mb-4 underline">Brand</div>
                    <div className="text-xl font-bold mb-4 w-4/5 flex flex-col">
                        <div><span className="text-blue-500">로코코드</span>란, <span
                            className="text-blue-500"> 아미쿠스렉스</span>의
                            <span className="text-blue-500"> 대표 브랜드</span>입니다.
                        </div>
                        <div>
                            법의 가치를 누구나 누릴 수 있는 세상을, 법률 문제 해결의 핵심 수단인 법률문서를 통해 구현해 나간다는 비전을 담고 있습니다.
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 inline-block rounded-lg my-2 w-full">
                    <div className="p-4 text-sm rounded-lg font-bold">
                        <b className="text-red-500">! </b>로코코드는 법무법인이나 법률사무소가 아니며, 법적 자문이나 법률 사무 서비스 등을 제공하지 않습니다.
                    </div>
                </div>
                <div className="bg-gray-100 inline-block rounded-lg my-2 w-full">
                    <div className="p-4 text-sm rounded-lg font-bold">
                        <b className="text-red-500">! </b>서비스 도입문의 외 일반 문의는 1대1 문의를 통해 접수해주세요.
                    </div>
                </div>
                <div className="justify-items-center mt-5">
                    <div className="content-center">
                        <img
                            src={xBanner}
                            alt="로고 이미지"
                            className="w-full h-full object-contain cursor-pointer bg-transparent"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-blue-400">
                <div ref={statsRef} className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-3 gap-30 h-96">
                    <div
                        className={`flex flex-col content-center justify-center items-center gap-2 transition-all duration-800 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="w-20 h-20 rounded flex items-center justify-center">
                            <img src="https://cdn.lawform.io/aboutus/icon_analysis.svg"/>
                        </div>
                        <div>
                            <span className="text-white text-3xl">20,000</span><span
                            className="text-white text-xl">여개</span>
                        </div>
                        <div>
                            <span className="text-white text-xl">이상의 </span><span
                            className="text-white text-xl font-bold">동종문서 분석</span>
                        </div>
                    </div>
                    <div
                        className={`flex flex-col content-center justify-center items-center gap-2 transition-all duration-800 delay-200 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="w-20 h-20 rounded flex items-center justify-center">
                            <img src="https://cdn.lawform.io/aboutus/icon_ example.svg"/>
                        </div>
                        <div>
                            <span className="text-white text-3xl">20,000,000</span><span
                            className="text-white text-xl">여개</span>
                        </div>
                        <div>
                            <span className="text-white text-xl">이상의 </span><span
                            className="text-white text-xl font-bold">실제 사례 적용</span>
                        </div>
                    </div>
                    <div
                        className={`flex flex-col content-center justify-center items-center gap-2 transition-all duration-800 delay-400 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="w-20 h-20 rounded flex items-center justify-center">
                            <img src="https://cdn.lawform.io/aboutus/icon_precedent.svg"/>
                        </div>
                        <div>
                            <span className="text-white text-3xl">100,000</span><span
                            className="text-white text-xl">여개</span>
                        </div>
                        <div>
                            <span className="text-white text-xl">이상의 </span><span
                            className="text-white text-xl font-bold"> 판례 분석</span>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={historyRef} className="max-w-4xl mx-auto px-4 py-8">
                <div
                    className={`text-2xl font-bold mb-4 underline transition-all duration-800 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    History
                </div>
                <div
                    className={`grid grid-cols-12 items-start transition-all duration-800 delay-200 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="col-span-2 text-3xl text-blue-500 font-extrabold">2025</div>
                    <div className="col-span-10 space-y-4">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-1 text-base font-bold text-black">06</div>
                            <div className="col-span-11 text-base font-bold text-gray-400">로코코 프로젝트 시작</div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-1 text-base font-bold text-black">05</div>
                            <div className="col-span-11 text-base font-bold text-gray-400">과수원 프로젝트 시작</div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-1 text-base font-bold text-black">04</div>
                            <div className="col-span-11 text-base font-bold text-gray-400">자바 수업 시작</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100">
                <div ref={pressRef} className="max-w-4xl mx-auto px-4 py-8">
                    <div
                        className={`text-2xl font-bold mb-4 underline transition-all duration-800 ${pressInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Press
                    </div>
                    <div
                        className={`grid grid-cols-15 gap-4 transition-all duration-800 delay-200 ${pressInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="col-span-3 flex flex-col text-gray-400 text-xs">
                            <div>법률신문</div>
                            <div>2023-11-30 ~ 2020-02-20</div>
                        </div>
                        <div className="col-span-9 flex flex-col gap-4">
                            <div className="font-bold text-2xl">
                                로코코드, 국내 대표 법률문서 자동화 서비스로 소개
                            </div>
                            <div className="text-gray-500">
                                누구나 손쉽게 필요한 법률문서를 작성할 수 있는 특허 기술 보유
                            </div>
                        </div>
                        <div className="rounded flex items-center justify-center col-span-3">
                            <div className="rounded flex items-center">
                                <img src={banner1} className="rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer text-center pb-10 text-xs text-gray-500">뉴스룸 전체보기 ></div>
            </div>

            <div ref={ctaRef} className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex items-center gap-8">
                    <div className="flex-3">
                        <div
                            className={`transition-all duration-800 ${ctaInView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="text-2xl mb-4">눈 앞에서 완성되는 법률문서</div>
                            <div className="text-2xl mb-4 font-bold">
                                <span className="text-blue-500">로코코드</span>로 경험하세요
                            </div>
                        </div>
                        <div
                            className={`transition-all duration-800 delay-200 ${ctaInView ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="mb-2">
                                <span className="text-xl">✔  </span>모든 법률문서 <span className="text-blue-500">무료 제공</span>
                            </div>
                            <div className="mb-8">
                                <span className="text-xl">✔  </span>변호사 <span className="text-blue-500">작성가이드 지원</span>
                            </div>
                        </div>
                        <div
                            className={`grid grid-cols-2 items-center gap-2 transition-all duration-800 delay-400 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="relative flex-1">
                                <input type="text"
                                       className="w-full h-16 px-4 py-2 border border-gray-300 rounded bg-white"
                                       placeholder="이메일을 입력해주세요."/>
                            </div>
                            <button
                                className="w-50 h-16 bg-blue-400 flex items-center justify-center text-base font-bold border text-white rounded-lg"
                            >무료로 시작하기 →
                            </button>
                        </div>
                    </div>
                    <div
                        className={`w-60 h-60 flex items-center justify-center col-span-3 transition-all duration-800 delay-200 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center">
                            <img
                                src={banner2}
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;