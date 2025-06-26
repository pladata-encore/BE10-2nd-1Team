import React from "react";

import wow001 from "../assets/wow001.png";
import wow002 from "../assets/wow002.png";
import wow003 from "../assets/wow003.png";

const wows = [
    wow001,
    wow002,
    wow003,
];

const WowPont: React.FC = () => {

    return (
        <div className="w-screen h-[100%] bg-gray-100 p-8 mt-8 mb-28">
            <div className="mt-10 md:mt-15 text-center">
                <h2 className="text-4xl text-gray-900 font-sans font-medium mb-2">
                    복잡한 문서 관리? 답은{" "}
                    <span className="text-sky-500 font-bold">로코코드 솔루션</span>
                </h2>
                <p className="text-lg text-rose-500 font-sm font-sans mb-20">
                    문서, 계약, 관리를 한 번에 끝내는 올인원 솔루션
                </p>
            </div>

                <div className="flex flex-nowrap justify-center items-center gap-10 mt-4 mb-8">
                    {wows.map((imgSrc, index) => (
                        <img
                            key={index}
                            src={imgSrc}
                            alt={`wow image ${index + 1}`}
                            className="w-100 h-100 rounded-md object-contain"
                        />
                    ))}
                </div>
        </div>
    );
}
export default WowPont;