import React from 'react';
import {
  StyledModalContainer,
  StyledModalDialog,
  StyledModalButton
} from '../modal/modal.styles';

const ModalForPrivacyPolicy = React.forwardRef((props, ref) => {
  const { content } = props;
  return (
    <StyledModalContainer
      className='modal fade'
      id='privacyPolicyModal'
      ref={ref}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='privacyPolicyModal'
      aria-hidden='true'
    >
      <StyledModalDialog className='modal-dialog text-center' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title w-100' id='privacyPolicyModalLabel'>
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
            <p>{content.sent}</p>
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

export default ModalForPrivacyPolicy;
