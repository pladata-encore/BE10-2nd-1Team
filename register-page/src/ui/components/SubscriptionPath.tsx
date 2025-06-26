import React, {useState} from "react";

const SubscriptionPath = () =>{
    const  companies = ["선택", "우리은행", "노란우산","스타트업지원사업","인터넷검색","지인추천","기타"];
    const  [seleted, setSeleted] = useState("선택");
    return (
        <div className="text-left">
            <div className="w-full flex justify-center">
                <label className="mb-1 text-sm text-gray-700 font-medium">
                </label>
                <select
                    className="w-full max-w-xs px-4 py-3 border-[#E6E6E6] border rounded-md text-[#b0b0b0] text-base appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 mim-h-[500px] overflow-y-auto"
                    value={seleted}
                    onChange={(e) => setSeleted(e.target.value)}
                >
                    <option value="" disabled hidden>
                        가입경로
                    </option>
                    {companies.map((companies)=>(
                        <option key={companies} value={companies}>
                            {companies}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default SubscriptionPath;