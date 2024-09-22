import { FC, ReactNode } from "react";
import cl from '../styles/Modal.module.css'

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

const Modal: FC<ModalType> = (props) => {
    return (
        <>
            {props.isOpen && (
                <div className={cl.modaloverlay} onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className={cl.modalbox}>
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;