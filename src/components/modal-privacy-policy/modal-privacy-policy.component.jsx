import React from 'react';
import { StyledModalContentWrapper } from './modal.privacy-policy.styles';
import {
  StyledModalContainer,
  StyledModalDialog,
  StyledModalButton
} from '../modal/modal.styles';
import RODOContent from '../rodo-and-privacy-policy/rodo.component';

const ModalForPrivacyPolicy = React.forwardRef((props, ref) => {
  const { content } = props;
  const modalId = content.modal_id;
  return (
    <StyledModalContainer
      className='modal fade'
      id={modalId}
      ref={ref}
      tabIndex='-1'
      role='dialog'
      aria-labelledby={modalId}
      aria-hidden='true'
    >
      <StyledModalDialog className='modal-dialog text-center' role='document'>
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
          <StyledModalContentWrapper className='modal-body'>
            <RODOContent />
          </StyledModalContentWrapper>
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
