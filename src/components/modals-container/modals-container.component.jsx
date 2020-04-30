import styles from './styles.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/modal.component';
import ModalForPrivacyPolicy from '../modal-privacy-policy/modal-privacy-policy.component';

const modalsNode = document.getElementById('modals');

export const correctModalRef = React.createRef();
export const invalidModalRef = React.createRef();
export const modalPrivacyPolicyRef = React.createRef();

const ModalsContainer = ({ modalsData }) => {
  const modals = (
    <div className={ styles.modelContainer }>
      <Modal ref={correctModalRef} content={modalsData.modal_ok} />
      <Modal ref={invalidModalRef} content={modalsData.modal_error} />
      <ModalForPrivacyPolicy
        ref={modalPrivacyPolicyRef}
        content={modalsData.modal_privacy_policy}
      />
    </div>
  );
  return ReactDOM.createPortal(modals, modalsNode);
};

export default ModalsContainer;
