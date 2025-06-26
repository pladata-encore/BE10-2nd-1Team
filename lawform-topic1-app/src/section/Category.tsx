import React from "react"
import "../style/topic1.css"

const Category = () => {

    return (
        <div className="min-w-[320px]">
            <section className="box-border py-[80px] px-[40px]">
                <h2 className="text-center mb-[30px] mt-[10px]">
                    <span className="subspan">다른 사람들도 많이 찾는</span>
                    <br />
                    <strong className="substrong">인기 카테고리</strong>
                </h2>
                <div className="mx-auto mt-[30px] w-full max-2-[1024px] flex gap-[20px] justify-center">
                    <a href="#" className="category-box">
                        <img src="http://localhost:3006/icon/building_icon.png" className="mb-[10px] h-[32px] w-[32px]"/>
                        <span className="H-16 text-[#333333] font-[400]">
                            근로·알바계약</span>
                    </a>
                    <a href="#" className="category-box">
                        <img src="http://localhost:3006/icon/business_icon.png" className="mb-[10px] h-[32px] w-[32px]"/>
                        <span className="H-16 text-[#333333] font-[400]">
                            지급명령 직접하기</span>
                    </a>
                    <a href="#" className="category-box">
                        <img src="http://localhost:3006/icon/announcement_icon.png" className="mb-[10px] h-[32px] w-[32px]"/>
                        <span className="H-16 text-[#333333] font-[400]">
                            차용증 간편 작성</span>
                    </a>
                    <a href="#" className="category-box">
                        <img src="http://localhost:3006/icon/paper_icon.png" className="mb-[10px] h-[32px] w-[32px]"/>
                        <span className="H-16 text-[#333333] font-[400]">
                            고소장 나홀로 작성</span>
                    </a>
                    <a href="#" className="category-box">
                        <img src="http://localhost:3006/icon/graph_icon.png" className="mb-[10px] h-[32px] w-[32px]"/>
                        <span className="H-16 text-[#333333] font-[400]">
                            주주총회</span>
                    </a>
                    <a href="#" className="category-box">
                        <img src="http://localhost:3006/icon/house_icon.png" className="mb-[10px] h-[32px] w-[32px]"/>
                        <span className="H-16 text-[#333333] font-[400]">
                            부동산</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Category