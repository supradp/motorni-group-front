import "./errorModal.scss";
// import closeBtn from "../../../images/icons/cancel.svg";
import { useRef } from "react";
import useOnClickOutside from "../../../helpers/useOnClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { setShowErrorModal } from "../../../redux/slices/statusSlice";
import { IoMdClose } from "react-icons/io";

const ErrorModal = ({}) => {
    const dispatch = useDispatch();

    const modalRef = useRef();
    useOnClickOutside(modalRef, () => dispatch(setShowErrorModal(false)));

    const { isShowErrorModal, errorMassage } = useSelector((store) => store.status);

    const hideErrorModalHandler = () => {
        dispatch(setShowErrorModal(false));
    };

    return (
        <>
            {isShowErrorModal && (
                <div className="error-modal-overlay">
                    <div className="error-modal" ref={modalRef}>
                        <div className="error-modal__header">
                            <div className="error-modal__header-title">Повідомлення</div>
                            <div className="error-modal__header-close" onClick={hideErrorModalHandler}>
                                <IoMdClose size={25} />
                            </div>
                        </div>
                        <div className="error-modal__list">{errorMassage}</div>
                        <div className="error-modal__search-btn btn-animation" onClick={hideErrorModalHandler}>
                            Закрити
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ErrorModal;
