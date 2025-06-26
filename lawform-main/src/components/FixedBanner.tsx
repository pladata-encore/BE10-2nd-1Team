import React from "react";
import ImageTextCard from "./ImageTextCard.tsx";
import imageCard1 from "../assets/imageCard1.jpg";
import imageCard2 from "../assets/imageCard2.jpg";


const FixedBanner: React.FC = () => {
    return (
        <div>
            <div className="text-center py-10 mt-16">
                <div className="text-4xl text-gray-900 font-sans font-medium mb-3">
                    로코코드 계약관리
                    {" "}
                    <span className="text-sky-500 font-sans font-bold">
                    100만건 돌파
                    </span>
                </div>
                <div className="text-lg text-stone-600 font-light font-sans mb-6">
                    로코코드는 금같은 당신의 시간을 지켜줍니다.
                </div>
            </div>

            <ImageTextCard
                imageUrl={imageCard2}
                subtitle="로코코드 플래너"
                title="계약 한 번에!"
                highlightedText="올인원 솔루션"
                description={`로코코드의 전문 변호단이 당신의 계약을 관리합니다.\n100만 명의 선택 바로 '로코코드'입니다.`}

            />

            <div className="text-center py-2 mt-0.5">
            </div>

            <ImageTextCard
                imageUrl={imageCard1}
                subtitle="로코코드 플래너"
                title="비즈니스 파트너"
                highlightedText="로코코드"
                description={`전문 변호사와 함께하는 안정적인 계약 수행\n스타트업, 중소기업의 든든한 법률 파트너`}
                buttons={["법률 자문", "리스크 점검", "계약 검토"]}
            />
        </div>
    );
};
export default FixedBanner