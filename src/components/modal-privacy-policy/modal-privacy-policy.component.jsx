import React from 'react';
import RODOContent from '../rodo-and-privacy-policy/rodo.component';
import './modal.privacy-policy.styles.css'


const ModalForPrivacyPolicy = React.forwardRef((props, ref) => {
  const { content } = props;
  const modalId = content.modal_id;
  return (
    <div
      className='modal fade modal-container'
      id={modalId}
      ref={ref}
      tabIndex='-1'
      role='dialog'
      aria-labelledby={modalId}
      aria-hidden='true'
    >
      <div id='modal-dialog' className='modal-dialog text-center' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title w-100' id={`${modalId}Label`}>
              {content.thanks}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div id="privacy-container" className='modal-body'>
            <RODOContent />
          </div>
          <div className='text-right p-2'>
            <button id='rodo-comp-btn' type='button' className='btn btn-sm' data-dismiss='modal'>
              {content.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModalForPrivacyPolicy;
