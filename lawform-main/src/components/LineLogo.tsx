import React from "react";
const categories = [
    { button: "체험" },

];

const LineLogo: React.FC = () => {
    const handleClick = (label: string) => {
        alert(`${label} 단계 준비중입니다.`);
    };
    return (
        <div
            className="w-screen h-80 bg-gray-900 p-6 mt-6 mb-30">
            <div className="mt-10 md:mt-15 text-center">
                <div className="text-xl text-white mb-2">100만 명이 사용하는 로코코드</div>
                <h2 className="text-3xl font-bold text-white">
                    이제 내가 써 볼 차례!
                </h2>
             </div>
            );
            <div className="flex justify-center">
                <section className="flex flex-col items-center gap-4 mb-8 hover:opacity-60">
                {categories.map((cat) => (
                    <button
                        key={cat.button}
                        type="button"
                        onClick={() => handleClick(cat.button)}
                        className="bg-gray-700 text-white px-12 py-3 rounded-sm text-xl text-center"
                    >한달 체험하기
                    </button>
                ))}
                </section>
            </div>
        </div>
    );
}
export default LineLogo;