import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // 아이콘 라이브러리 사용

const OtherDesignSubscriptionPath = () => {
    const options = [
        "우리은행",
        "노란우산",
        "스타트업지원사업",
        "인터넷검색",
        "지인추천",
        "기타",
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (value: string) => {
        setSelected(value);
        setIsOpen(false);
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="w-full flex justify-between items-center px-4 py-3 border border-gray-300 rounded-md text-gray-700 text-base focus:outline-none"
                >
                    {selected || "선택"}
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {isOpen && (
                    <ul className="absolute mt-1 w-full max-h-[150px] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-md z-10">
                        {options.map((option) => (
                            <li
                                key={option}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer text-gray-700"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OtherDesignSubscriptionPath;
