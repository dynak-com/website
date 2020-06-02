import React from 'react';
import RODOContent from '../rodo-and-privacy-policy/rodo.component';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const ModalForPrivacyPolicy = React.forwardRef((props, ref) => {
    const { content } = props;
    const modalId = content.modal_id;
    const { t } = useTranslation();
    return (
        <div
            className="modal fade"
            id={modalId}
            ref={ref}
            tabIndex="-1"
            role="dialog"
            aria-labelledby={modalId}
            aria-hidden="true"
        >
            <div className={`modal-dialog text-center ${styles.modalDialog}`} role="document">
                <div className={`modal-content ${styles.modalContent}`}>
                    <div className="modal-header">
                        <h5 className="modal-title w-100" id={`${modalId}Label`}>
                            {t(content.thanks)}
                        </h5>
                        <button
                            type="button"
                            className={`close ${styles.closeSign}`}
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span className="close-sign" aria-hidden="true">
                                &times;
                            </span>
                        </button>
                    </div>
                    <div className={`modal-body ${styles.privacyContainer}`}>
                        <RODOContent />
                    </div>
                    <div className="text-right p-2">
                        <button type="button" className={`btn btn-sm ${styles.rodoCompButton}`} data-dismiss="modal">
                            {t(content.close)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModalForPrivacyPolicy;
