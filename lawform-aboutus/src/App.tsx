import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AboutUs from "./components/AboutUs.tsx";
import Inquiry from "lawform-inquiry/src/components/Inquiry.tsx";

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-800 mt-20">
            <main>
                <AboutUs/>
            </main>
        </div>
    );
}

export default App;