// src/components/ImageTextCard.tsx
import React from "react";

interface ImageTextCardProps {
    imageUrl: string;
    title: string;
    highlightedText: string;
    description: string;
    subtitle: string;
    buttons: string[];
}

const ImageTextCard: React.FC<ImageTextCardProps> = ({
                                                         imageUrl,
                                                         title,
                                                         highlightedText,
                                                         description,
                                                         subtitle,
                                                         buttons = ["자문 전문", "계약 관리", "문서 관리"],
                                                     }) => {
    return (
        <div
            className="flex flex-col md:flex-row items-center bg-gray-100 shadow-md rounded-2xl p-6 max-w-6xl mx-auto mt-6">
            <img
                src={imageUrl}
                alt="카드 이미지"
                className="w-full md:w-1/2 rounded-xl object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-6 text-left">
                <div className="text-sm text-gray-400 mb-1">{subtitle}</div>
                <h2 className="text-3xl font-bold text-gray-800">
                    {title}
                    <span className="text-sky-500"> {highlightedText}</span>
                </h2>
                <p className="text-gray-500 text-sm mt-2 whitespace-pre-line">
                    {description}
                </p>

                <div className="flex gap-2 mt-4">
                    {buttons.map((text, idx) => (
                        <button
                            key={idx}
                            className="bg-gray-400 text-white px-3 py-2 rounded-md text-shadow-md text-bold"
                        >
                            {text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageTextCard;
