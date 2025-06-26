import React from "react"
import "../style/topic1.css";

const Write = () => {
    return (
        <div className="min-w-[320px]">
            <section style={{background: "linear-gradient(110.07deg, #0063C6 -1.15%, #019AEC 71.55%)",}}>
                <div className="mx-auto box-border flex h-[210px] w-full flex-col flex-1 items-center justify-center bg-no-repeat xm:flex">
                    <p className="text-white text-[28px] font-sans font-[400] whitespace-pre-line text-center leading-[1.5] tracking-[-1.12]">
                        지금 내용증명을 작성하면 <strong className="font-bold">7일 무료 이용권 제공</strong></p>
                    <a href="#" className="mt-4 flex h-[50px] w-[210px] items-center justify-center rounded-[4px] bg-white font-sans text-[#0063C6] H-16 font-[400]">
                        내용증명 작성하기</a>
                </div>
            </section>
        </div>
    )
}

export default Write