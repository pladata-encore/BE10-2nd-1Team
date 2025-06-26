import React from "react"
import "../style/topic1.css"

const Contents = () => {
    return (
        <div className="min-w-[320px]">
            <section className="box-border py-[80px] px-[40px]">
                <h2 className="text-center mb-[30px] mt-[10px]">
                    <span className="subspan">미리 읽어보면</span>
                    <br />
                    <strong className="substrong">도움되는 필수 콘텐츠</strong>
                </h2>
                <div className="w-full max-w-[1024px] mx-auto">
                    <div className="my-[20px] flex items-center justify-between">
                        <div className="H-22 text-[#333333] font-[700]">내용증명 작성 가이드</div>
                        <a href="#" className="H-16 text-[#757575] font-[400]">전체보기</a>
                    </div>
                    <div className="flex w-full flex-col">
                        <a className="box-border flex cursor-pointer overflow-hidden border-[0px] border-solid border-b border-[#f9f9f9]
                            mb-[20px] pb-[20px] last:mb-[0px] last:pb-[0px] last:border-b-[0px]" href="#">
                            <div className="h-[210px] w-[350px]">
                                <img src="http://localhost:3006/icon/topic_app_1.png" className="w-full h-full"/>
                            </div>
                            <div className="box-border w-[calc(100%_-_350px)] py-[35px] pl-[40px]">
                                <div className="flex items-center">
                                    <div className="mr-[4px] h-fit overflow-hidden rounded-[4px] bg-[#FF5757] p-[2px_4px]
                                        text-white text-[12px] font-[700] leading-[1.5] tracking-[-0.48px]">인기글</div>
                                <h3 className="H-20 text-[#333] font-[700]">초보자를 위한 내용증명의 기본</h3>
                                </div>
                                <p className="mt-[10px] line-clamp-2 overflow-hidden text-ellipsis H-18 text-[#555] font-[400]">
                                    내용증명 작성이 처음이시라고요? 내용증명 보내는 이유부터 다양한 내용증명 양식까지 필수 콘텐츠에서 확인해보세요.</p>
                                <span className="mt-[20px] H-18 text-[#555] font-[400]" style={{display:'inline-block'}}>2024-03-19</span>
                            </div>
                        </a>
                        <a className="box-border flex cursor-pointer overflow-hidden border-[0px] border-solid border-b border-[#f9f9f9]
                            mb-[20px] pb-[20px] last:mb-[0px] last:pb-[0px] last:border-b-[0px]" href="#">
                            <div className="h-[210px] w-[350px]">
                                <img src="http://localhost:3006/icon/topic_app_2.png" className="w-full h-full"/>
                            </div>
                            <div className="box-border w-[calc(100%_-_350px)] py-[35px] pl-[40px]">
                                <div className="flex items-center">
                                    <h3 className="H-20 text-[#333] font-[700]">내용증명 작성 후 체크사항</h3>
                                </div>
                                <p className="mt-[10px] line-clamp-2 overflow-hidden text-ellipsis H-18 text-[#555] font-[400]">
                                    내용증명, 작성만 하면 끝나는 것이 아니예요. 작성한 내용증명을 발송하는 방법을 체크해보세요.</p>
                                <span className="mt-[20px] H-18 text-[#555] font-[400]" style={{display:'inline-block'}}>2023-11-28</span>
                            </div>
                        </a>
                        <a className="box-border flex cursor-pointer overflow-hidden border-[0px] border-solid border-b border-[#f9f9f9]
                            mb-[20px] pb-[20px] last:mb-[0px] last:pb-[0px] last:border-b-[0px]" href="#">
                            <div className="h-[210px] w-[350px]">
                                <img src="http://localhost:3006/icon/topic_app_3.png" className="w-full h-full"/>
                            </div>
                            <div className="box-border w-[calc(100%_-_350px)] py-[35px] pl-[40px]">
                                <div className="flex items-center">
                                    <h3 className="H-20 text-[#333] font-[700]">내용증명 받았을 때 대응하는 방법</h3>
                                </div>
                                <p className="mt-[10px] line-clamp-2 overflow-hidden text-ellipsis H-18 text-[#555] font-[400]">
                                    내용증명을 받았다! 이제 어떻게 하지? 작성한 내용증명 대응 방법, 하나하나 친절하게 알려드려요.</p>
                                <span className="mt-[20px] H-18 text-[#555] font-[400]" style={{display:'inline-block'}}>2024-10-02</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contents