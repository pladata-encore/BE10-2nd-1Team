import React from "react"
import "../style/topic1.css";

import { useState } from 'react';

const categoryTabs = [
    "임대차", "손해배상 · 계약이행", "용역 · 매매 · 임금", "빌려준 돈", "명예훼손 · 지식재산권", "통지",
];

const cardData = {
    "임대차": [
        "내용증명(보증금 반환 청구)", "내용증명(하자보수청구-임차인용)", "내용증명(부동산 계약해지-세입자용)",
        "내용증명(부동산 계약해지-임대인용)", "내용증명(층간소음)", "내용증명(월세 청구)",
        "내용증명(임대료 연체로 인한 계약 해지 및 명도 청구)", "내용증명(권리금 손해배상)", "내용증명(임대차 계약연장 불허통지)", "내용증명(상가임대차 계약연장 불허통지)"
    ],
    "손해배상 · 계약이행": [
        "내용증명(물건,권리침해 손해배상 등)", "내용증명(신체침해 손해배상 등)", "내용증명(계약해지 통지)",
        "내용증명(계약해지 통지 답변서)", "내용증명(계약이행 청구)", "내용증명(권리청구)",
        "내용증명(부당이득 반환)", "내용증명(투자금 반환)", "내용증명(파혼, 이별시 선물 반환 등 정산요청)"
    ],
    "용역 · 매매 · 임금": [
        "내용증명(용역대금 청구)", "내용증명(용역대금 반환 청구)", "내용증명(매매대금 청구용)",
        "내용증명(매매대금 반환 청구)", "내용증명(매매대금 청구 답변서)", "내용증명(임금청구)"
    ],
    "빌려준 돈": [
        "내용증명(대여금 청구용)", "내용증명(대여금 청구 답변서)"
    ],
    "명예훼손 · 지식재산권": [
        "내용증명(명예훼손 금지)", "내용증명(명예훼손 금지 답변서)", "내용증명(모욕,명예훼손 중단청구)",
        "내용증명(지식재산권 침해 중단 및 손해배상 청구)"
    ],
    "통지": [
        "내용증명(법원 판결,결정 등 불이행에 대한 조치 통보)", "내용증명(차용,임대차 등 계약 관련 금전 채무 부존재 통보)",
        "내용증명(양수인의 채권양도통지)", "내용증명(질권설정)"
    ]
};

const Situation = () => {
    const [selectedTab, setSelectedTab] = useState(categoryTabs[0]);

    return (
        <section className="font-sans py-[80px] px-[40px] box-border bg-[#f9f9f9]">
            <h2 className="text-center mb-[30px]">
                <span className="subspan">내 상황에 딱 맞는</span>
                < br/>
                <strong className="substrong">손쉬운 내용증명 작성</strong>
            </h2>

            {/* 탭 */}
            <div className="flex flex-wrap justify-center mb-8 gap-3">
                {categoryTabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 border-b-2 H-16 font-[700] ${
                            selectedTab === tab
                                ? 'text-[#0189EC] border-[#0189EC]'
                                : 'text-[#757575] border-transparent'
                        }`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* 카드 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1024px] mx-auto">
                {cardData[selectedTab]?.map((title, idx) => (
                    <a href="#" key={idx} className="bg-white rounded-lg px-6 py-4 shadow flex justify-between items-center">
                        <p className="H-16 text-[#333] font-[700]">{title}</p>
                        <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <img src="https://cdn.lawform.io/web/topic/ic_20_suggested_circle.svg" className="w-[20px] h-[20px]"/>
                        </div>

                    </a>
                ))}
            </div>
        </section>
    );
};

export default Situation;


