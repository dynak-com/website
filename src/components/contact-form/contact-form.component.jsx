import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import {
  StyledCheckboxGroupContainer,
  StyledContactFormButton
} from "./contact-form.styles";
import Modal from "../modal/modal.component";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      message: "",
      email: "",
      isRobot: true
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    if (name === "isRobot") value = !e.target.checked;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
    this.setState({
      subject: "",
      message: "",
      email: "",
      isRobot: true
    });
  };
  render() {
    const { subject, message, email, isRobot } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                className="form-control text-center"
                type="text"
                name="subject"
                value={subject}
                onChange={this.handleChange}
                placeholder="Temat wiadomości"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <input
                className="form-control text-center"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Twój adres e-mail"
                required
              />
            </div>
          </div>
          <textarea
            className="form-control"
            name="message"
            cols="30"
            rows="10"
            value={message}
            onChange={this.handleChange}
            placeholder="Treść wiadomości"
            required
          ></textarea>
          <div className="form-row my-3">
            <div className="form-group col">
              <StyledCheckboxGroupContainer className="custom-control custom-checkbox mr-sm-2">
                <input
                  id="isRobot-input"
                  className="custom-control-input"
                  type="checkbox"
                  name="isRobot"
                  checked={!isRobot}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="isRobot-input" className="custom-control-label">
                  Nie jestem robotem(wolimy się upewnić ;) )
                </label>
              </StyledCheckboxGroupContainer>
            </div>
            <div className="form-group col-md-3 text-center text-md-right">
              <StyledContactFormButton
                className="btn"
                type="submit"
                value="Wyślij"
              />
            </div>
          </div>
        </form>
        <Modal ref="modal" />
      </div>
    );
  }
}

export default ContactForm;
