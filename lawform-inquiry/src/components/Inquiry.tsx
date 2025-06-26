import React from "react";
import '../index.css';

const Inquiry = () => {
    const downloadMemo = () => {
        const blob = new Blob(["서비스 소개서 다운로드입니다."], {type: 'text/plain;charset=utf-8'});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `메모_${new Date().toLocaleDateString('ko-KR')}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div>
            <div className="bg-blue-50">
                <div className="max-w-4xl mx-auto px-4  grid grid-cols-2 gap-30 ">
                    <div className="flex flex-col items-start justify-center space-y-4 animate-fade-in-up">
                        <button
                            className="w-20 h-8 bg-white rounded-4xl flex items-center justify-center text-base font-bold border text-blue-400"
                        >
                            도입문의
                        </button>
                        <div className="font-bold text-4xl">많은 기업들이 도입한 <br/> 자동 작성 서비스</div>
                        <div className="text-gray-500 text-sm">이미 각 분야 최고의 기업들이 도입한<br/>자동작성으로 시간과 비용을 절감해보세요!</div>
                        <button
                            className="w-50 h-12 bg-blue-400 flex items-center justify-center text-base font-bold border text-white rounded-lg cursor-pointer"
                            onClick={downloadMemo}
                        >
                            서비스 소개서 다운로드
                        </button>
                    </div>
                    <div className="content-center animate-fade-in-up">
                        <div className="flex-shrink-0  flex items-center justify-center">
                            <img src="https://cdn.lawform.io/main/partners_scroll_infinite_pc.gif"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-xl font-bold mb-4">상담절차 안내</div>
                <div className="bg-blue-50 inline-block rounded-lg w-full">
                    <div className="flex items-center justify-between gap-4 p-4">
                        <div className="border p-4 text-sm rounded-lg border-blue-200 ">
                            <b>1. </b>문의 후 전담매니저 배정 및 서비스기능 & 할인혜택 안내
                        </div>
                        <div>>></div>
                        <div className="border p-4 text-sm rounded-lg border-blue-200"><b>2. </b>상담 후 상황에 맞는 온오프라인 솔루션
                            제안
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 inline-block rounded-lg my-2 w-full">
                    <div className="flex items-center gap-5 p-4">
                        <label className="text-base font-bold w-18 flex-shrink-0">
                            유형<span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex-1">
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded bg-white appearance-none pr-10">
                                <option value="">법인사업자</option>
                                <option value="individual">개인사업자</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 9l-7 7-7-7"/>
                                </svg>
                            </div>
                        </div>
                        <label className="text-base font-bold w-18 flex-shrink-0">
                            회사명<span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex-1">
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded bg-white"
                                   placeholder="아미쿠스렉스"/>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 p-4">
                        <label className="text-base font-bold w-18 flex-shrink-0">
                            담당자<span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex-1">
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded bg-white"
                                   placeholder="이의건"/>
                        </div>
                        <label className="text-base font-bold w-18 flex-shrink-0">
                            연락처<span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex-1">
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded bg-white"
                                   placeholder="010-1234-5678"/>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 p-4">
                        <label className="text-base font-bold w-18 flex-shrink-0">
                            이메일<span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2 flex-1">
                            <input type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded bg-white"
                                   placeholder="contact"/>
                            <span className="text-base font-bold">@</span>
                            <input type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded bg-white"
                                   placeholder="lawcocode"/>
                            <div className="relative flex-1">
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white appearance-none pr-10">
                                    <option value="">직접입력</option>
                                    <option value="naver">네이버</option>
                                    <option value="nate">네이트</option>
                                    <option value="google">구글</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 p-4">
                        <label className="text-base font-bold w-18 flex-shrink-0">
                            문의내용<span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                            <textarea
                                className="w-full px-4 py-2 border border-gray-300 rounded bg-white h-32 resize-none"
                                placeholder="문의 내용을 입력해주세요."/>
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
                    <div className="flex gap-2">
                        <input type="checkbox" id="chk"/>
                        <label htmlFor="chk" className="text-sm text-gray-500">(필수)
                            개인정보 수집 및 이용
                            동의
                        </label>
                    </div>
                    <button
                        className="w-50 h-12 bg-blue-400 flex items-center justify-center text-base font-bold border text-white rounded-lg mt-5 cursor-pointer"
                    >무료 상담받기
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Inquiry