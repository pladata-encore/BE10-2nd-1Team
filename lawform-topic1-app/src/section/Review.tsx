import React, {useState} from "react"
import "../style/topic1.css"

const testimonials = [
    {
        type: "내용증명",
        content:
            "로폼의 자동작성 내용증명 폼으로 회사 무단결근 직원에게 내용증명을 쉽게 보낼 수 있었습니다.",
        author: "최*진",
        button_type: "내용증명(계약이행 청구)작성하기",
    },
    {
        type: "내용증명",
        content:
            "임금 체불 관련해 내용증명 발송이 필요했는데 문서 작성에 도움을 받았습니다.",
        author: "허*성",
        button_type: "내용증명(계약이행 청구)작성하기",
    },
    {
        type: "내용증명-대여금 청구",
        content:
            "돈빌린 사람이 연락도 잘 안받아서 검색 많이 해보고 지인에게 자문받아서 로폼 서식을 사용해 봤어요!",
        author: "김*훈",
        button_type: "내용증명(대여금 청구)작성하기",
    },
    {
        type: "내용증명-층간소음",
        content:
            "층간소음 내용증명 덕분에 귀마개를 끼지 않고도 생활할 수 있게 되었습니다.",
        author: "김*진",
        button_type: "내용증명(층간소음)작성하기",
    },
    {
        type: "내용증명-대여금 청구",
        content:
            "업체에서 대금을 주지않아 고민하던 차, 내용증명을 보내면 좋다는 말에 찾아보니 로폼에서 쉽게 도와줄 수 있는 걸 보고 편하고 쉽게 작성했어요.",
        author: "오*헌",
        button_type: "내용증명(대여금 청구)작성하기",
    },
    {
        type: "내용증명-부동산 계약해지",
        content:
            "원룸 사업 하시는 엄마가 돈 안내고 무단으로 거주하고 있는 세입자 때문에 고민이 많으셨는데 로폼에서 내용증명 서류 작성하고 보내서 세입자와의 갈등 해결에 ...",
        author: "김*나",
        button_type: "내용증명(부동산 계약해지)작성하기",
    },
];

const Review = () => {
    const cardsPerView = 3;
    const [index, setIndex] = useState(0);

    const maxIndex = testimonials.length - cardsPerView;

    const cardWidth = 346; // 카드 하나 + 좌우 margin 포함 (322 + 24)
    const handleNext = () => {
        if (index < testimonials.length - cardsPerView) setIndex(index + 1);
    };
    const handlePrev = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <div className="min-w-[320px]">
            <section className="box-border bg-[#f9f9f9] pb-[60px] pt-[80px] px-[40px]">
                <h2 className="text-center mb-[30px] mt-[10px]">
                    <span className="subspan">로폼 서비스를 직접 이용한</span>
                    <br />
                    <strong className="substrong">100% 리얼 후기</strong>
                </h2>

                <div className="relative mx-auto mt-[20px] w-full max-w-[1024px]">
                    {/* 버튼 영역 */}
                    <div className="absolute left-[50%] top-[calc(50%_-_10px)] mx-auto flex w-screen max-w-[1200px] px-[10px]
                    border-box translate-x-[-50%] translate-y-[-50%] justify-between">
                        <button
                            onClick={handlePrev}
                            className="h-[50px] w-[50px] cursor-pointer rounded-[50%] flex items-center justify-center bg-white
                                border border-solid border-[#f9f9f9] drop-shadow-2xl"
                            disabled={index === 0}
                        >
                            <img src="https://cdn.lawform.io/web/topic/ic_24_direction_left.svg" className="w-[24px] h-[24px]"/>
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-[50px] w-[50px] cursor-pointer rounded-[50%] flex items-center justify-center bg-white
                                border border-solid border-[#f9f9f9] drop-shadow-2xl"
                            disabled={index >= maxIndex}
                        >
                            <img src="https://cdn.lawform.io/web/topic/ic_24_direction_right.svg" className="w-[24px] h-[24px]"/>
                        </button>
                    </div>

                    {/* 슬라이드 컨테이너 */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${index * cardWidth}px)`
                            }}
                        >
                            {testimonials.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="box-border mx-[15px] h-[323px] w-[315px] flex-shrink-0 rounded-[6px] bg-white p-[30px] shadow-[4px_4px_12px_0px_#0000004]"
                                >
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex-1">
                                            <h3 className="H-20 text-[#333] font-[700]">
                                                {item.type}
                                            </h3>
                                            <p className="my-[12px] H-16 text-[#555] font-[400]">
                                                {item.content}
                                            </p>
                                            <div className="flex justify-between ">
                                                <span className="font-sans text-[14px] text-[#555] font-[400] leading-[1.5] tracking-[-.56px]">
                                                    {item.author}
                                                </span>
                                                <span className="font-sans text-[14px] text-[#555] font-[400] leading-[1.5] tracking-[-.8px]"></span>
                                            </div>
                                        </div>
                                        <a href="#" className="box-border block cursor-pointer rounded-[4px] border-[1px] border-solid py-[12px] text-center
                                            H-16 text-[#019aec] font-[700]">
                                            {item.button_type}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;