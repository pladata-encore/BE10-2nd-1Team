import React, {useEffect, useState} from "react";
import '../index.css';

const TopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

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
        <div className="fixed bottom-63 right-20 z-50">
            <button
                onClick={scrollToTop}
                className="w-14 h-14 bg-white border-2 border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center text-2xl text-gray-700 cursor-pointer"
            >
                ↑
            </button>
        </div>
    )
}
export default TopButton;