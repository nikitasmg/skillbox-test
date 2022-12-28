import s from './modal.module.scss'
import {FC, ReactElement} from "react";
type ModalProps = {
    children: ReactElement,
    isOpen: boolean,
    handleClose: () => void
}

import React from 'react';
import ReactPortalWrapper from "../common/ReactPortalWrapper";

const Modal:FC<ModalProps> = ({ children, isOpen, handleClose }) => {
    if (!isOpen) return null;
    return (
        <ReactPortalWrapper wrapperId={"react-portal-modal-container"}>
            <div className={s.modal}>
                <div className={s.content}>
                    <button onClick={handleClose} className={s.button}>
                        Close
                    </button>
                    {children}
                </div>
            </div>
        </ReactPortalWrapper>

    );
};

export default Modal;
