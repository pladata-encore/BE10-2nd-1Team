import React, {useState} from "react";

const LoginForm = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isValid = email.trim() !== '' && email.trim() !== '';

    return (
        <form className="space-y-4">
            <input
                type="email"
                placeholder="이메일"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-2 placeholder-gray-400"
            />
            <input
                type="password"
                placeholder="비밀번호"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-2 placeholder-gray-400"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2">
                    <input type="checkbox"/>
                    이메일 기억하기
                </label>
                <button type="button" className="text-blue-600 hover:underline">
                    계정 찾기
                </button>
            </div>
            <button
                disabled={!isValid}
                className={`w-full px-4 py-2 rounded-md text-gray-500 font-semibold transition
                ${isValid ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 cursor-not-allowed' }
                `}
            >
                로그인
            </button>
        </form>
    )
}
export default LoginForm;