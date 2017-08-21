import React, { Component } from 'react';
import SubPage from '../Components/SubPage';
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';
import * as contactStates from '../States/contactStates';
import * as constants from '../States/constants';
import axios from 'axios';

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
      requestSent: false,
      submitPressed: false,
      submitStatus: 'not sent',
    };
  }

  checkErrors = () => this.state.name 
      && this.state.email 
      && this.state.content 
      && this.state.nameValid
      && this.state.emailValid
      && this.state.phoneValid
      && this.state.contentValid
      ? true : false;

  handleSubmit = (event) => {
    event.preventDefault();

    // Final check, in case the user did not touch the keys
    const valid = this.checkErrors();

    if (valid) {
      this.setState(contactStates.loadingState(this.state));

      const {
        name,
        email,
        phone,
        content
      } = this.state;

      axios.post('/Contact', {
        contactEnvelope: {
          name: name,
          email: email,
          phone: phone,
          message: content
        }
      }).then(
        response => this.setState(getResponseState(response, this.state)),
        err => this.setState(contactStates.failedState(this.state))
      );
    } else {
      this.setState(contactStates.submitState(this.state));
    }
  }

  validate = (name, value) => {
    if (name === 'email') {
      return isEmail(value)
    } else if (name === 'name' || name === 'content') {
      return value ? true : false;
    } else if (name === 'phone') {
      return value ? isNumeric(value) : true;
    }
  }

  handleChange = ({ target }) => {
    // new inputs
    const { name, value } = target;

    // old values, we only change the old ones
    let newState = this.state;
    newState[name] = value;

    // Validation
    const valid = this.validate(name, value);
    newState[`${name}Valid`] = valid;

    this.setState(() => newState);
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
          {this.checkErrors()
            && <SuccessMessage/>}
          {this.checkErrors() 
          && (this.state.submitStatus === constants.FAILED 
              || this.state.submitStatus === constants.SUCCESS)
          && <SubmitStatus 
            submitStatus={this.state.submitStatus}/>}
          <button type="submit" 
            value="submit"
            className="btn btn-lg submit-btn"
            disabled={this.state.requestSent || this.state.submitStatus === constants.SUCCESS}>
            Send me a Telegram!</button>
          </form>
      </SubPage>
    );
  }
}

const SubmitStatus = ({ submitStatus }) => {
  if (submitStatus === constants.SUCCESS) {
    return (
      <div className="col-md-12">
        <div className="alert alert-success alerts">
          <p id="alert-sign">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Your message was delivered!
          </p>
        </div>
      </div>
    );
  } else if (submitStatus === constants.FAILED) {
    return (
      <div className="col-md-12">
        <div className="alert alert-danger alerts">
          <p id="alert-sign">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Oh No! Something went wrong. Please send an email to ashwinath@hotmail.com
          </p>
        </div>
      </div>
    );
  }
}

const SuccessMessage = () => (
  <div className="col-md-12">
    <div className="alert alert-success alerts">
      <p id="alert-sign">
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Your message is ready to go!
      </p>
    </div>
  </div>
);

const ErrorMessages = (props) => {
  const { 
    name,
    nameValid, 
    email,
    emailValid, 
    phone,
    phoneValid, 
    content,
    contentValid
  } = props.state;
  return (
    <div className="col-md-12">
      <div className="alert alert-danger alerts">
        <p id="alert-sign">
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> I need more details about you!
        </p>
        {(!nameValid || !name) && <p>I need to know who you are!</p>}
        {(!emailValid || !email) && <p>I need a valid email to know whom to reply to!</p>}
        {(!phoneValid || phone) && <p>I can't call you if you don't provide a valid phone number!</p>}
        {(!contentValid || !content) && <p>You need to provide me a message and not just your contact details!</p>}
      </div>
    </div>
  );
}

const ContactMessage = ({ state, handleChange }) => {
  let errorDiv = state["contentValid"]
    ? 'success'
    : 'error';
  return (
    <div className="col-md-6">
      <div className="form-group">
        <textarea
          id="content"
          name="content"
          value={state.content}
          onChange={handleChange}
          className={`form-control ${errorDiv}`}
          placeholder="Message"/>
      </div>
    </div>
  );
}

const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ContactParticulars = ({ handleChange, state }) => {
  const particulars = ["name", "email", "phone"];
  return (
    <div className="col-md-6">
      {particulars.map(attributes => {
        let errorDiv = state[attributes + "Valid"]
          ? 'success'
          : 'error';
        return (
          <div key={attributes}
            className="form-group">
            <input
              id={attributes}
              name={attributes}
              value={state[attributes]}
              onChange={handleChange}
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

const getResponseState = ({ data }, state) => data.result === constants.SUCCESS ?
  contactStates.successState(state) :
  contactStates.failedState(state);

export default Contact;
