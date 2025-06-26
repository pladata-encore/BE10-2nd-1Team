import { useRecoilState } from "recoil";
import { loginModalState } from "../../atoms/loginModalAtom";

const OpenLoginModal = () => {
    const [, setModalOpen] = useRecoilState(loginModalState); // ✅ setter를 받아야 함

    return (
        <button
            onClick={() => setModalOpen(true)} // ✅ boolean → 함수에 전달
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            로그인
        </button>
    );
};

export default OpenLoginModal;