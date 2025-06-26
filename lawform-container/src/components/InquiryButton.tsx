import React, {useEffect, useState} from "react";
import '../index.css';
import {useNavigate} from 'react-router-dom';

const InquiryButton = () => {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 100) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton && (
        <div className="fixed bottom-40 right-17 z-50">
            <button
                onClick={() => navigate('/inquiry')}
                className="w-20 h-20 bg-blue-500 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center text-1xl text-white cursor-pointer"
            >
                도입문의
            </button>
        </div>
    )
}
export default InquiryButton;