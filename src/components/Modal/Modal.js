import React from 'react';
import "./Modal.scss";

const Modal = ({className = '', active, setActive, children, layer}) => {
    return (
        <div className={active ? `modal__wrapper ${className} active` : `modal__wrapper ${className}`}
             onClick={() => setActive(false)}>
            <div className={active ? `modal__content__block active ${className}` : `modal__content__block ${className}`}
                 onClick={e => e.stopPropagation()}>
                {layer ? <div className={`modal__content__inner__block ${className}`}>
                    {children}
                </div> : children}
            </div>
        </div>
    );
};

export default Modal;