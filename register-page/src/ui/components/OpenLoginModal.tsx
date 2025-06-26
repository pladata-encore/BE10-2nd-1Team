import { useRecoilState } from "recoil";
import { ModalState } from "../../atoms/ModalAtom.ts";

const OpenLoginModal = () => {
    const [, setModalOpen] = useRecoilState(ModalState); // ✅ setter를 받아야 함

    return (
        <button
            onClick={() => setModalOpen(true)} // ✅ boolean → 함수에 전달
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            회원가입
        </button>
    );
};

export default OpenLoginModal;