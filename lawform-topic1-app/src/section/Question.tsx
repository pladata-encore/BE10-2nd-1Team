import React from "react";
import "../style/topic1.css"

const Question = () => {
    return (
        <div className="min-w-[320px]">
            <section className="font-sans pb-[80px] pt-[210px] px-[40px] box-border">
                <h2 className="text-center mb-[30px] mt-[10px]">
                    <span className="subspan">내용증명의 모든 것</span>
                    <br />
                    <strong className="substrong">로코코에서 궁금증 해결</strong>
                </h2>
                <div className="w-full max-w-[1024px] mx-auto">
                    <div className="mb-[12px] mt-[30px] flex items-center justify-between">
                        <div className="H-22 text-[#333333] font-[700]">
                            자주 묻는 질문
                        </div>
                        <a href="#" className="H-16 text-[#757575] font-[400]">
                            전체보기
                        </a>
                    </div>

                    <div className="flex w-full flex-col gap-[20px]">
                        {/* QnA 1 */}
                        <div className="box-border rounded-[6px] bg-[#f9f9f9] p-[16px]">
                            <div className="flex">
                                <p className="H-18 text-[#019aec] font-[700]">
                                    Q.
                                </p>
                                <p className="ml-[4px] H-18 text-[#333] font-[700]">
                                    내용증명이 무엇인가요?
                                </p>
                            </div>
                            <div className="mt-[10px] flex">
                                <p className="H-18 text-[#019aec] font-[700]">
                                    A.
                                </p>
                                <p className="H-18 ml-[4px] text-[#333] font-[400]">
                                    보내는 사람이 받는 사람에게 "어떤 내용의 문서"를 "언제 발송"한 사실을 우체국이 공적으로 증명하는 문서예요.
                                </p>
                            </div>
                        </div>

                        {/* QnA 2 */}
                        <div className="box-border rounded-[6px] bg-[#f9f9f9] p-[16px]">
                            <div className="flex">
                                <p className="H-18 text-[#019aec] font-[700]">
                                    Q.
                                </p>
                                <p className="H-18 ml-[4px] text-[#333] font-[700]">
                                    내용증명을 작성한 후에 어떻게 보내나요?
                                </p>
                            </div>
                            <div className="mt-[10px] flex">
                                <p className="H-18 text-[#019aec] font-[700]">
                                    A.
                                </p>
                                <p className="H-18 ml-[4px] text-[#333] font-[400]">
                                    우체국을 방문하거나 온라인 우체국을 통해 상대방에게 내용증명을 발송할 수 있어요.
                                </p>
                            </div>
                        </div>

                        {/* QnA 3 */}
                        <div className="box-border rounded-[6px] bg-[#f9f9f9] p-[16px]">
                            <div className="flex">
                                <p className="H-18 text-[#019aec] font-[700]">
                                    Q.
                                </p>
                                <p className="H-18 ml-[4px] text-[#333] font-[700]">
                                    내용증명 양식은 어디 있나요?
                                </p>
                            </div>
                            <div className="mt-[10px] flex">
                                <p className="H-18 text-[#019aec] font-[700]">
                                    A.
                                </p>
                                <p className="H-18 ml-[4px] text-[#333] font-[400]">
                                    바로 아래에서 내 상황에 딱 맞는 로폼의 내용증명 양식을 찾아보실 수 있어요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Question;
