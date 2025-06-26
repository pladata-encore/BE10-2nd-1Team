// src/App.tsx
import React, {useEffect} from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import CategoryList from "./components/CategoryList";
import BannerCarousel from "./components/BannerCarousel";
import './index.css'
import FixedBanner from "./components/FixedBanner.tsx";
import LogoMarquee from "./components/LogoMarquee.tsx";
import LineLogo from "./components/LineLogo.tsx";
import WowPont from "./components/WowPoint.tsx";

const App: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-white text-gray-800 mt-20">
            <Header/>
            <main className="max-w-4xl mx-auto px-4">
                <SearchSection/>
                <CategoryList/>
                <BannerCarousel/>
                <FixedBanner/>
                <LogoMarquee/>
            </main>
            <WowPont/>
            <LineLogo/>
        </div>
    );
};

export default App;
