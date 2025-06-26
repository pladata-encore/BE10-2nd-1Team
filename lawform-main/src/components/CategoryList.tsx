import React from "react";
import {useNavigate} from "react-router-dom";

const categories = [
    { label: "내용증명", icon: "🔍" },
    { label: "지급명령", icon: "💰" },
    { label: "계약서", icon: "📝" },
    { label: "합의서", icon: "🤝" },
    { label: "고소장", icon: "📄" },
    { label: "근로계약", icon: "📃" },
    { label: "차용증", icon: "🧾" },
    { label: "기타", icon: "⋯" },
];

const CategoryList: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (label: string) => {
        if(label === "내용증명"){
            navigate('/topic1');
        }else{
            alert(`${label} 서비스 준비중입니다!`);
        }
    };

    return (
        <section className="grid grid-cols-4 gap-6 mt-20 mb-8">
            {categories.map((cat) => (
                <button
                    key={cat.label}
                    type="button"
                    onClick={() => handleClick(cat.label)}
                    className="flex flex-col items-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded hover:opacity-35"
                >
                    <span className="text-3xl">{cat.icon}</span>
                    <span>{cat.label}</span>
                </button>
            ))}
        </section>
    );
};

export default CategoryList;
