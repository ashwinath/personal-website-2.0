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
      contactNo: "",
      contactNoValid: true,
      content: "",
      contentValid: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Final check, in case the user did not touch the keys
    let valid = this.state.name 
      && this.state.email 
      && this.state.content 
      && this.state.nameValid
      && this.state.emailValid
      && this.state.contactNoValid
      && this.state.contentValid
      ? true : false;

    // TODO: handle post
    console.log(`Verification result was ${valid}`);
  }

  // TODO: shld validate on the fly
  validateContactForm(contactForm) {
    const { name, email, contactNo, content } = contactForm;
    const validEmail = isEmail(email);
    const validContact = contactNo ? isNumeric(contactNo) : true;

    return {
      name: name,
      nameError: name ? true : false,
      emailError: validEmail,
      contactNoError: validContact,
      messageError: content ? true: false
    }
  }

  validate(name, value) {
    if (name === 'email') {
      return isEmail(value)
    } else if (name === 'name' || name === 'content') {
      return value ? true : false;
    } else if (name === 'contactNo') {
      return value ? isNumeric(value) : true;
    }
  }

  handleChange(event) {
    const {target} = event;

    // new inputs
    const name = target.name;
    const value = target.value;

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
          <ContactParticulars state={this.state} handleChange={this.handleChange}/>
          <ContactMessage state={this.state} handleChange={this.handleChange}/>
          <button type="submit" 
            value="submit"
            className="btn btn-lg submit-btn">
            Send me a Telegram!</button>
        </form>
      </SubPage>
    );
  }
}

function ContactMessage(props) {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <textarea
          name="content"
          value={props.state.content}
          onChange={props.handleChange}
          className="form-control"
          placeholder="Message"/>
      </div>
    </div>
  );
}

function ContactParticulars(props) {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <input
          name="name"
          value={props.state.name}
          onChange={props.handleChange}
          type="text"
          className="form-control"
          placeholder="Name"
          aria-describedby="sizing-addon1"/>
      </div>

      <div className="form-group">
        <input
          name="email"
          value={props.state.email}
          onChange={props.handleChange}
          type="text"
          className="form-control"
          placeholder="E-Mail"
          aria-describedby="sizing-addon1"/>
      </div>

      <div className="form-group">
        <input
          name="contactNo"
          value={props.state.contactNo}
          onChange={props.handleChange}
          type="text"
          className="form-control"
          placeholder="Contact Number"
          aria-describedby="sizing-addon1"/>
      </div>
    </div>
  );

}

export default Contact;
