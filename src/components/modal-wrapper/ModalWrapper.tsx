import React, { useState, ReactNode } from "react";
import { withTranslation } from 'react-i18next';
import { createPortal } from "react-dom";

/** Styles */
import './modal-wrapper.scss';

/** Components */
import Button from '../button/Button';
import Input from '../input/Input';
import Modal from '../modal/Modal';

const ModalWrapper = ({ t }: { t: (v: string) => ReactNode | string }) => {
    const [showModal, setShowModal] = useState(false);
    const [textModal, setTextModal] = useState('');
  
    const showModalHandler = (): void => setShowModal(true);
    const hideModalHandler = (): void => setShowModal(false);

    return (
        <div className="modal-wrapper">
            <Input value={textModal} placeholder={t('type-modal-text') as string} onChange={(e) => setTextModal(e.target.value)}/>
            <Button onClick={showModalHandler}>{t('open-modal')}</Button>
            {createPortal(<Modal
                visible={showModal}
                hide={hideModalHandler}
            >{textModal || 'Hi! I\'m a Modal! For now to close me, just click on the background. Thanks :)'}</Modal>, document.body)}
        </div>
    );
};

const ModalWrapperTranslated = withTranslation('common')(ModalWrapper)
export default ModalWrapperTranslated;
