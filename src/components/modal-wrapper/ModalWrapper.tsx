import React, { useState, ReactNode, PropsWithChildren, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

/** Components */
import Modal from '../modal/Modal';

interface IModalWrapperProps {
  // t?: (t: string) => ReactNode | string;
  actionNode: ReactNode;
  hide?: boolean;
}

const ModalWrapper = ({ actionNode, children, hide }: PropsWithChildren<IModalWrapperProps>) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (): void => setShowModal(true);
  const hideModalHandler = (): void => setShowModal(false);

  useEffect(() => {
    if (hide && showModal) hideModalHandler();
  }, [showModal, hide]);

  return (
    <div className="modal-wrapper">
      <div className="modal--action" onClick={showModalHandler}>
        {actionNode}
      </div>
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
