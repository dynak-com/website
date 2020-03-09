import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  StyledCheckboxGroupContainer,
  StyledContactFormButton
} from './contact-form.styles';
import Modal from '../modal/modal.component';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      message: '',
      email: '',
      isRobot: true
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    if (name === 'isRobot') value = !e.target.checked;
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
          isRobot: true
        });
      } else {
        $(ReactDOM.findDOMNode(this.refs.modal_error)).modal();
      }
    });
  };

  render() {
    const { content } = this.props;
    const { subject, message, email, isRobot } = this.state;
    return (
      <div>
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
            </div>
            <div className='form-group col-md-3 text-center text-md-right'>
              <StyledContactFormButton
                className='btn'
                type='submit'
                value={content.send}
              />
            </div>
          </div>
        </form>
        <Modal ref='modal_ok' content={content.modal.modal_ok} />
        <Modal ref='modal_error' content={content.modal.modal_error} />
      </div>
    );
  }
}

export default ContactForm;
