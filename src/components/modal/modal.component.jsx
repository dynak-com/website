import React from 'react';
import {
  StyledModalContainer,
  StyledModalDialog,
  StyledModalButton
} from './modal.styles';

const Modal = React.forwardRef((props, ref) => {
  const { content } = props;
  const headerTextAlignment = content.error_message
    ? 'text-justify'
    : 'text-center';
  return (
    <StyledModalContainer
      className='modal fade'
      id='formModal'
      ref={ref}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='formModal'
      aria-hidden='true'
    >
      <StyledModalDialog className='modal-dialog text-center' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='formModalLabel'>
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
            <StyledModalButton
              type='button'
              className='btn btn-sm'
              data-dismiss='modal'
            >
              {content.close}
            </StyledModalButton>
          </div>
        </div>
      </StyledModalDialog>
    </StyledModalContainer>
  );
});

export default Modal;
