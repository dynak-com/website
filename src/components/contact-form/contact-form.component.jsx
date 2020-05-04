import React from 'react';
import styles from './styles.module.css';
import useComponent from './hook';

const ContactForm = ({ content }) => {
  const {
    state,
    onChangeInputDone,
    onSubmitFormDone,
    onPrivacyPolicyModalOpenDone
  } = useComponent();
  const {
    subject,
    message,
    email,
    isContactAgreed,
    isPrivacyPolicyAgreed
  } = state;
  return (
    <div className='mx-auto'>
      <form onSubmit={onSubmitFormDone}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <input
              className='form-control text-center'
              type='text'
              name='subject'
              value={subject}
              onChange={onChangeInputDone}
              placeholder={content.subject}
              required
            />
          </div>
          <div className='form-group col-md-6'>
            <input
              className='form-control text-center'
              type='email'
              name='email'
              value={email}
              onChange={onChangeInputDone}
              placeholder={content.email}
              required
            />
          </div>
        </div>
        <textarea
          className='form-control'
          name='message'
          cols='30'
          rows='10'
          value={message}
          onChange={onChangeInputDone}
          placeholder={content.message}
          required
        ></textarea>
        <div className='form-row my-3'>
          <div className='form-group col'>
            <div className={ `${ styles.checkboxContainer }custom-control custom-checkbox mr-sm-2` }>
              <input
                id='isContactAgreed-input'
                className='custom-control-input'
                type='checkbox'
                name='isContactAgreed'
                checked={isContactAgreed}
                onChange={onChangeInputDone}
                required
              />
              <label
                htmlFor='isContactAgreed-input'
                className='custom-control-label text-justify'
              >
                {content.contactAgreement}
              </label>
            </div>
            <div className={`${styles.checkboxContainer }custom-control custom-checkbox mr-sm-2`}>
              <input
                id='isPrivacyPolicyAgreed-input'
                className='custom-control-input'
                type='checkbox'
                name='isPrivacyPolicyAgreed'
                checked={isPrivacyPolicyAgreed}
                onChange={onChangeInputDone}
                required
              />
              <label
                htmlFor='isPrivacyPolicyAgreed-input'
                className='custom-control-label text-justify'
              >
                {content.privacyPolicyAgreement}
              </label>
            </div>
          </div>
          <div className='form-group col-md-12 text-center text-md-right'>
            <input
              className={ `${ styles.contactFormBtn } contact-form-btn btn d-inline-block mx-1` }
              type='button'
              value='Polityka prywatności'
              onClick={onPrivacyPolicyModalOpenDone}
            />
            <input
              className={ `${ styles.contactFormBtn} contact-form-btn btn d-inline-block mx-1` }
              type='submit'
              value={content.send}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
