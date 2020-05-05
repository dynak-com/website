import React from 'react';
import styles from './styles.module.css';

const Modal = React.forwardRef((props, ref) => {
  const { content } = props;
  const modalId = content.modal_id;
  const headerTextAlignment = content.error_message
    ? 'text-justify'
    : 'text-center';
  return (
    <div
      className= 'modal show'
      id={modalId}
      ref={ref}
      tabIndex='-1'
      role='dialog'
      aria-labelledby={modalId}
      aria-hidden='true'
    >
      <div className={ `modal-dialog text-center ${ styles.modalDialog }` } role='document'>
        <div className={ `modal-content ${ styles.modalContent }` }>
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
              <span className={ `close ${ styles.closeSign }` } aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <h3 className={headerTextAlignment}>{content.sent}</h3>
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

export default Modal;
