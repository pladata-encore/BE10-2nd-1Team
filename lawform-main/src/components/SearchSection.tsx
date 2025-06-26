import React from "react";

const SearchSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center gap-4 mb-6">
            <input
                type="text"
                placeholder="찾고싶은 계약을 입력하세요"
                className="w-full md:w-3/4 px-4 py-3 border border-gray-300 rounded-lg text-base"
            />
            <button className="bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600">
                검색하기 →
            </button>
        </section>
    );
};

export default SearchSection;
