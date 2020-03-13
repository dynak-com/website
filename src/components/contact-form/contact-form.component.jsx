import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  StyledCheckboxGroupContainer,
  StyledContactFormButton
} from './contact-form.styles';
import Modal from '../modal/modal.component';
import ModalForPRivacyPolicy from '../modal-privacy-policy/modal-privacy-policy.component';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      message: '',
      email: '',
      isRobot: true,
      isInfoAgreed: false,
      isContactAgreed: false,
      isPrivacyPolicyAgreed: false
    };
  }
  handleChange = e => {
    const { name } = e.target;
    let value;
    switch (name) {
      case 'isRobot':
        value = !e.target.checked;
        break;
      case 'isInfoAgreed':
      case 'isContactAgreed':
      case 'isPrivacyPolicyAgreed':
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
    }
    console.log(name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      ...this.state
    };
    fetch('/new_message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        $(ReactDOM.findDOMNode(this.refs.modal_ok)).modal();
        this.setState({
          subject: '',
          message: '',
          email: '',
          isRobot: true,
          isInfoAgreed: false,
          isContactAgreed: false,
          isPrivacyPolicyAgreed: false
        });
      } else {
        $(ReactDOM.findDOMNode(this.refs.modal_error)).modal();
      }
    });
  };
  onPrivacyPolicyModalOpen = () => {
    $(ReactDOM.findDOMNode(this.refs.modal_privacy_policy)).modal();
  };
  render() {
    const { content } = this.props;
    const {
      subject,
      message,
      email,
      isRobot,
      isInfoAgreed,
      isContactAgreed,
      isPrivacyPolicyAgreed
    } = this.state;
    return (
      <div className='mx-auto'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <input
                className='form-control text-center'
                type='text'
                name='subject'
                value={subject}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
            onChange={this.handleChange}
            placeholder={content.message}
            required
          ></textarea>
          <div className='form-row my-3'>
            <div className='form-group col'>
              <StyledCheckboxGroupContainer className='custom-control custom-checkbox mr-sm-2'>
                <input
                  id='isRobot-input'
                  className='custom-control-input'
                  type='checkbox'
                  name='isRobot'
                  checked={!isRobot}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor='isRobot-input' className='custom-control-label'>
                  {content.bot}
                </label>
              </StyledCheckboxGroupContainer>
              <StyledCheckboxGroupContainer className='custom-control custom-checkbox mr-sm-2'>
                <input
                  id='isInfoAgreed-input'
                  className='custom-control-input'
                  type='checkbox'
                  name='isInfoAgreed'
                  checked={isInfoAgreed}
                  onChange={this.handleChange}
                  required
                />
                <label
                  htmlFor='isInfoAgreed-input'
                  className='custom-control-label text-justify'
                >
                  {content.infoAgreement}
                </label>
              </StyledCheckboxGroupContainer>
              <StyledCheckboxGroupContainer className='custom-control custom-checkbox mr-sm-2'>
                <input
                  id='isContactAgreed-input'
                  className='custom-control-input'
                  type='checkbox'
                  name='isContactAgreed'
                  checked={isContactAgreed}
                  onChange={this.handleChange}
                  required
                />
                <label
                  htmlFor='isContactAgreed-input'
                  className='custom-control-label text-justify'
                >
                  {content.contactAgreement}
                </label>
              </StyledCheckboxGroupContainer>
              <StyledCheckboxGroupContainer className='custom-control custom-checkbox mr-sm-2'>
                <input
                  id='isPrivacyPolicyAgreed-input'
                  className='custom-control-input'
                  type='checkbox'
                  name='isPrivacyPolicyAgreed'
                  checked={isPrivacyPolicyAgreed}
                  onChange={this.handleChange}
                  required
                />
                <label
                  htmlFor='isPrivacyPolicyAgreed-input'
                  className='custom-control-label text-justify'
                >
                  {content.privacyPolicyAgreement}
                </label>
              </StyledCheckboxGroupContainer>
            </div>
            <div className='form-group col-md-12 text-center text-md-right'>
              <StyledContactFormButton
                className='btn d-inline-block mx-1'
                type='button'
                value='Polityka prywatności'
                onClick={this.onPrivacyPolicyModalOpen}
              />
              <StyledContactFormButton
                className='btn d-inline-block mx-1'
                type='submit'
                value={content.send}
              />
            </div>
          </div>
        </form>
        <Modal ref='modal_ok' content={content.modal.modal_ok} />
        <Modal ref='modal_error' content={content.modal.modal_error} />
        <ModalForPRivacyPolicy
          ref='modal_privacy_policy'
          content={content.modal.modal_privacy_policy}
        />
      </div>
    );
  }
}

export default ContactForm;
