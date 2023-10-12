import React, { RefCallback, useEffect } from 'react';
/** Styles */
import './modal.scss';

interface IModalProps {
    visible: boolean,
    hide: RefCallback<PointerEvent>,
};

const Modal = ({ visible = false, hide, children }: React.PropsWithChildren<IModalProps>) => {
    useEffect(() => {
        if (!visible) return;

        const modalEl: HTMLElement | null = document.querySelector('.modal');

        if (modalEl) {
            modalEl.addEventListener('click', (e: PointerEvent & { target: { className: string } }) => {
                const { target } = e;
                if (target.className === 'modal--body') return false;
                hide(e);
            });
        }
    }, [visible]);
    return (
        visible && <div className="modal">
            <div className="modal--body">{children}</div>
        </div>
    );
};

export default Modal;
