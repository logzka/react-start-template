import React, { useCallback, useEffect } from 'react';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
/** Types */
import IModalProps from './types';

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9997;
  animation: show 0.4s forwards;
`;

const ModalBodyStyled = styled.div`
  width: 40%;
  padding: 2em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);
  z-index: 9998;
`;

const Modal = ({ visible = false, hide, children }: React.PropsWithChildren<IModalProps>) => {
  const hideModal = useCallback(
    (e: PointerEvent) => {
      hide(e);
    },
    [hide]
  );

  useEffect(() => {
    if (!visible) return;

    const modalEl: HTMLElement | null = document.querySelector('.modal');

    const modalListenerCb = (e: PointerEvent & { target: { className: string; tagName: string } }) => {
      const { target } = e;
      if (!target.className.includes('modal--overlay')) return false;
      hideModal(e);
    };

    if (modalEl) modalEl.addEventListener('click', modalListenerCb);

    return () => {
      modalEl.removeEventListener('click', modalListenerCb);
    };
  }, [visible, hideModal]);

  return (
    visible && (
      <ModalStyled className="modal">
        <ModalBodyStyled className="modal--body">{children}</ModalBodyStyled>
        <ModalOverlayStyled className="modal--overlay"></ModalOverlayStyled>
      </ModalStyled>
    )
  );
};

export default Modal;
