import React, { useState, ReactNode, PropsWithChildren } from 'react';
import { withTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

/** Styles */
import './modal-wrapper.scss';

/** Components */
import Button from '../button/Button';
import Modal from '../modal/Modal';

interface IModalWrapperProps {
  // t?: (t: string) => ReactNode | string;
  buttonText: ReactNode;
}

const ModalWrapper = ({ buttonText, children }: PropsWithChildren<IModalWrapperProps>) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (): void => setShowModal(true);
  const hideModalHandler = (): void => setShowModal(false);

  return (
    <div className="modal-wrapper">
      <Button className={'button--modal'} onClick={showModalHandler}>
        {buttonText}
      </Button>
      {createPortal(
        <Modal visible={showModal} hide={hideModalHandler}>
          {children}
        </Modal>,
        document.body
      )}
    </div>
  );
};

const ModalWrapperTranslated = withTranslation('common')(ModalWrapper);
export default ModalWrapperTranslated;
