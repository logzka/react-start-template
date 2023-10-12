import React, { useState } from "react";

/** Styles */
import './modal-wrapper.scss';

/** Components */
import Button from '../button/Button';
import Input from '../input/Input';
import Modal from '../modal/Modal';

const ModalWrapper = () => {
    const [showModal, setShowModal] = useState(false);
    const [textModal, setTextModal] = useState('');
  
    const showModalHandler = (): void => setShowModal(true);
    const hideModalHandler = (): void => setShowModal(false);

    return (
        <div className="modal-wrapper">
            <Input onChange={(e) => setTextModal(e.target.value)}/>
            <Button onClick={showModalHandler}>open modal</Button>
            <Modal
                visible={showModal}
                hide={hideModalHandler}
            >{textModal || 'Hi! I\'m a Modal! For now to close me, just click on the background. Thanks :)'}</Modal>
        </div>
    );
};

export default ModalWrapper;
