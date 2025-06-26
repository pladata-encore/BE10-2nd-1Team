import React, {useState} from "react";

const LoginForm = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isValid = email.trim() !== '' && password.trim() !== '';

    return (
        <form>
            <input
                type="email"
                placeholder="이메일"
                className="login-input"
            />
            <input
                type="password"
                placeholder="비밀번호"
                className="login-input"
            />
            <div className="option-row">
                <label>
                    <input type="checkbox"/>
                    이메일 기억하기
                </label>
                <button type="button" className="text-blue-600 hover:underline">
                    계정 찾기
                </button>
            </div>
            <button type="submit"  className="login-button active">
                로그인
            </button>
        </form>
    )
}
export default LoginForm;