import React from "react"
import "../style/topic1.css"

const Proof = () => {
    const cards = [
        {
            title: "내용증명 인기 TOP 1",
            subtitle: "보증금 반환 청구",
            action: "지금 작성하기",
            icon : (<img src="http://localhost:3006/icon/pencil_icon.png" alt="icon" className="w-[20px] h-[20px]" />),
        },
        {
            title: "내용증명 인기 TOP 2",
            subtitle: "대여금 청구",
            action: "지금 작성하기",
            icon : (<img src="http://localhost:3006/icon/pencil_icon.png" alt="icon" className="w-[20px] h-[20px]" />),
        },
        {
            title: "내용증명 인기 TOP 3",
            subtitle: "계약 해지 통지",
            action: "지금 작성하기",
            icon : (<img src="http://localhost:3006/icon/pencil_icon.png" alt="icon" className="w-[20px] h-[20px]" />),
        },
        {
            title: "로폼 TIP",
            subtitle: (
                <>내용증명 작성 후<br />보내는 방법</>
            ),
            action: "내용 확인하기",
            icon : (<img src="http://localhost:3006/icon/bulb_icon.png" alt="icon" className="w-[20px] h-[20px]" />),
        },
    ];

    return (
        <div className="min-w-[320px] mt-20">
            <section className="font-sans mx-auto h-[310px] bg-[#0189EC] text-white text-center pt-[80px] px-[20px] box-border xd:pt-[60px] xd:px-[0px]">
                <h1 className="text-[38px] font-[700] leading-[1.4] tracking-[-1.52px] mb-[8px] xd:px-[20px] xd:box-border">내용증명</h1>
                <p className="H-16 text-[400]">
                    몇 번의 클릭과 간단 입력으로 내용증명을 3분만에 자동완성 해보세요.
                </p>
                <div className="mt-[40px] mx-auto max-w-[1024px] flex justify-center gap-[16px] flex-wrap">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white w-[240px] h-[240px] rounded-[6px] shadow-[4px_4px_12px_0px_#00000014]  pl-[24px] pt-[33px] pr-[20px] pb-[30px] flex flex-col justify-between text-left text-[#555555]"
                        >
                            <div>
                                <div className="font-sans text-[14px] font-[400] leading-[1.5] tracking-[-.56px] mb-[12px]">{card.title}</div>
                                <div className="font-sans text-[22px] font-[700] leading-[1.5] tracking-[-.88px]">
                                    {card.subtitle}
                                </div>
                            </div>
                            <div className="flex justify-between items-end font-sans text-[#555] text-[14px] font-[400] leading-[1.5] tracking-[-.56px]">
                                <a href="#">{card.action} &gt;</a>
                                <span>{card.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Proof
