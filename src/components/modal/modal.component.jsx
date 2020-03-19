import React from 'react';
import { StyledModalContainer, StyledModalDialog } from './modal.styles';

const Modal = React.forwardRef((props, ref) => {
  const { content } = props;
  const modalId = content.modal_id;
  const headerTextAlignment = content.error_message
    ? 'text-justify'
    : 'text-center';
  return (
    <StyledModalContainer
      className='modal show'
      id={modalId}
      ref={ref}
      tabIndex='-1'
      role='dialog'
      aria-labelledby={modalId}
      aria-hidden='true'
    >
      <StyledModalDialog className='text-center' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={`${modalId}Label`}>
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
          <div className='modal-body'>
            <h3 className={headerTextAlignment}>{content.sent}</h3>
          </div>
          <div className='text-right p-2'>
            <button type='button' className='btn btn-sm' data-dismiss='modal'>
              {content.close}
            </button>
          </div>
        </div>
      </StyledModalDialog>
    </StyledModalContainer>
  );
});

export default Modal;
