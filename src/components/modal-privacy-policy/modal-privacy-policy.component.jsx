import React from 'react';
import RODOContent from '../rodo-and-privacy-policy/rodo.component';
import styles from './styles.module.css'


const ModalForPrivacyPolicy = React.forwardRef((props, ref) => {
  const { content } = props;
  const modalId = content.modal_id;
  return (
    <div
      className='modal fade'
      id={modalId}
      ref={ref}
      tabIndex='-1'
      role='dialog'
      aria-labelledby={modalId}
      aria-hidden='true'
    >
      <div className={ `modal-dialog text-center ${ styles.styledModalDialog }` }  role='document'>
        <div className={ `modal-content ${ styles.styledModalContent }` }>
          <div className='modal-header'>
            <h5 className='modal-title w-100' id={`${modalId}Label`}>
              {content.thanks}
            </h5>
            <button
              type='button'
              className={ `close ${ styles.closeSign }` }
              data-dismiss='modal'
              aria-label='Close'
            >
              <span className='close-sign' aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className={ `modal-body ${ styles.privacyContainer }` }>
            <RODOContent />
          </div>
          <div className='text-right p-2'>
            <button type='button' className={ `btn btn-sm ${ styles.rodoCompButton }` } data-dismiss='modal'>
              {content.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModalForPrivacyPolicy;
