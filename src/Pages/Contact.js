import React, { Component } from 'react';
import SubPage from '../Components/SubPage';
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      nameError: true,
      emailError: true,
      contactNoError: true,
      messageError: true,
      validated: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let contactNo = event.target.contactNo.value;
    let content = event.target.content.value;

    this.setState(() => {
      let newState = this.validateContactForm({
        name: name,
        email: email,
        contactNo: contactNo,
        content: content
      });

      console.log(newState)

      let okToSubmit = Object.entries(newState).reduce((acc, pair) => {
        // eslint-disable-next-line
        const [key, value] = pair;
        return acc && value;
      }, true);

      if (okToSubmit) {
        // TODO: send post request here
        console.log("validated!")
        // TODO: render method shld show a success
      } else {
        // TODO: show validation
        // do nothing here, render method should handle
        console.log("failed validation")
      }

      newState.validated = true;
      return newState;
    });

  }

  validateContactForm(contactForm) {
    const { name, email, contactNo, content } = contactForm;
    const validEmail = isEmail(email);
    const validContact = contactNo ? isNumeric(contactNo) : true;

    return {
      nameError: name ? true : false,
      emailError: validEmail,
      contactNoError: validContact,
      messageError: content ? true: false
    }
  }

  validateField(string) {
  }

  render() {
    return (
      <SubPage pageName="Contact Me">
        <form onSubmit={this.handleSubmit}
          className="col-md-offset-1 col-md-10 contact-form">

          <div className="col-md-6">
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                aria-describedby="sizing-addon1"/>
            </div>

            <div className="form-group">
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="E-Mail"
                aria-describedby="sizing-addon1"/>
            </div>

            <div className="form-group">
              <input
                name="contactNo"
                type="text"
                className="form-control"
                placeholder="Contact Number"
                aria-describedby="sizing-addon1"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="content"
                className="form-control"
                placeholder="Message"/>
            </div>
          </div>

          <button type="submit" 
            value="submit"
            className="btn btn-lg submit-btn">
            Send me a Telegram!</button>
        </form>
      </SubPage>
    );
  }
}

export default Contact;
