import React, { Component } from 'react';
import SubPage from '../Components/SubPage';
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      nameValid: true,
      email: "",
      emailValid: true,
      phone: "",
      phoneValid: true,
      content: "",
      contentValid: true,
      submitPressed: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkErrors = this.checkErrors.bind(this);
  }

  checkErrors() {
    return this.state.name 
      && this.state.email 
      && this.state.content 
      && this.state.nameValid
      && this.state.emailValid
      && this.state.phoneValid
      && this.state.contentValid
      ? true : false;
  }

  handleSubmit(event) {
    event.preventDefault();

    // Final check, in case the user did not touch the keys
    let valid = this.checkErrors();

    // TODO: handle post
    console.log(`Verification result was ${valid}`);
    this.setState(() => {
      let newState = this.state;
      newState.submitPressed = true;
      return newState;
    })
  }

  validate(name, value) {
    if (name === 'email') {
      return isEmail(value)
    } else if (name === 'name' || name === 'content') {
      return value ? true : false;
    } else if (name === 'phone') {
      return value ? isNumeric(value) : true;
    }
  }

  handleChange(event) {
    const { target } = event;

    // new inputs
    const { name, value } = target;

    // old values, we only change the old ones
    let newState = this.state;
    newState[name] = value;

    // Validation
    const valid = this.validate(name, value);
    newState[`${name}Valid`] = valid;

    this.setState(() => {
      return newState;
    });
  }

  render() {
    return (
      <SubPage pageName="Contact Me">
        <form onSubmit={this.handleSubmit}
          className="col-md-offset-1 col-md-10 contact-form">
          <ContactParticulars
            state={this.state}
            handleChange={this.handleChange}/>
          <ContactMessage
            state={this.state}
            handleChange={this.handleChange}/>
          {!this.checkErrors()
            && this.state.submitPressed
            && <ErrorMessages state={this.state}/>}
          <button type="submit" 
            value="submit"
            className="btn btn-lg submit-btn">
            Send me a Telegram!</button>
          </form>
      </SubPage>
    );
  }
}

function ErrorMessages(props) {
  const { 
    name,
    nameValid, 
    email,
    emailValid, 
    phone,
    phoneValid, 
    content,
    contentValid } = props.state;
  return (
    <div className="col-md-12">
      <div className="alert alert-danger warnings">
        <p id="warning-sign"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Validation Failed!</p>
        {(!nameValid || !name) && <p>I need to know who you are!</p>}
        {(!emailValid || !email) && <p>I need a valid email to know whom to reply to!</p>}
        {(!phoneValid || phone) && <p>I can't call you if you don't provide a valid phone number!</p>}
        {(!contentValid || !content) && <p>You need to provide me a message and not just your contact details!</p>}
      </div>
    </div>
  );
}

function ContactMessage(props) {
  let errorDiv = props.state["contentValid"]
    ? 'success'
    : 'error';
  return (
    <div className="col-md-6">
      <div className="form-group">
        <textarea
          id="content"
          name="content"
          value={props.state.content}
          onChange={props.handleChange}
          className={`form-control ${errorDiv}`}
          placeholder="Message"/>
      </div>
    </div>
  );
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ContactParticulars(props) {
  const particulars = ["name", "email", "phone"];
  return (
    <div className="col-md-6">
      {particulars.map(attributes => {
        let errorDiv = props.state[attributes + "Valid"]
          ? 'success'
          : 'error';
        return (
          <div key={attributes}
            className="form-group">
            <input
              id={attributes}
              name={attributes}
              value={props.state[attributes]}
              onChange={props.handleChange}
              type="text"
              className={`form-control ${errorDiv}`}
              placeholder={capitaliseFirstLetter(attributes)}
              aria-describedby="sizing-addon1"/>
          </div>
        );
      })}
    </div>
  );

}

export default Contact;
