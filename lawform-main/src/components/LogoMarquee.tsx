// src/components/LogoMarquee.tsx
import React, {useEffect, useRef} from "react";
import logo001 from "../assets/logo001.png";
import logo002 from "../assets/logo002.png";
import logo003 from "../assets/logo003.png";
import logo004 from "../assets/logo004.png";
import logo005 from "../assets/logo005.png";
import logo006 from "../assets/logo006.png";
import logo007 from "../assets/logo007.png";
import logo008 from "../assets/logo008.png";
import logo009 from "../assets/logo009.png";

const logos = [
    logo001,
    logo002,
    logo003,
    logo004,
    logo005,
    logo006,
    logo007,
    logo008,
    logo009,
];

const LogoMarquee: React.FC = () => {
    const style = `
    .logo-marquee {
      width: 100vw;
      overflow: hidden;
      position: relative;
      margin-left: calc(-50vw + 50%);
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
     -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
    .logo-track {
      display: flex;
      width: fit-content;
      animation: scroll-left 20s linear infinite;
    }
    .logo-item {
      width: 260px;
      height: 240px;
      margin: 0 16px;
      padding: 0;
      flex-shrink: 0;
        }
    @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
    @media (max-width: 768px) {
    .logo-item {
      width: 260px;
      height: 240px;
      margin: 0 16px;
    }
    .logo-track {
      width: calc(260px * 18);
    }
  }
  `;

    const styleRef = useRef<HTMLStyleElement | null>(null);

    useEffect(() => {
        if (!styleRef.current) {
            const styleTag = document.createElement("style");
            styleTag.innerHTML = style;
            document.head.appendChild(styleTag);
            styleRef.current = styleTag;
        }
    }, []);

    const repeated = [...logos, ...logos];

    return (
        <div className="text-center py-10 mt-16">
            <h2 className="text-4xl text-gray-900 font-sans font-medium mb-20">
                많은 고객사들이 <br/> <span className="text-sky-500 font-sans font-bold">{'\n로코코드와 함께하고 있습니다'}</span>
            </h2>
            <div className="logo-marquee">
                <div className="logo-track">
                    {repeated.map((logo, i) => (
                        <img key={i} src={logo} alt={`logo-${i}`} className="logo-item"/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;