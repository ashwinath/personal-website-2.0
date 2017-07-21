import React, { Component } from 'react';
import SubPage from '../Components/SubPage';

class Contact extends Component {
  render() {
    return (
      <SubPage pageName="Contact Me">
        <div className="col-md-offset-1 col-md-10 contact-form">
          <ContactFormParticulars/>
          <ContactFormMessage/>
          <button className="btn btn-lg submit-btn" 
            onClick={this.handleSubmit}>
            Send me a Telegram!</button>
        </div>
      </SubPage>
    );
  }
}

class ContactFormParticulars extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="form-group">
          <input name="contact[name]"
            type="text"
            className="form-control"
            placeholder="Name"
            aria-describedby="sizing-addon1"
            required/>
        </div>

        <div className="form-group">
          <input name="contact[email]"
            type="email"
            className="form-control"
            placeholder="E-Mail"
            aria-describedby="sizing-addon1"
            required/>
        </div>

        <div className="form-group">
          <input name="contact[phone]"
            type="text"
            className="form-control"
            placeholder="Contact Number"
            aria-describedby="sizing-addon1"/>
        </div>
      </div>
    );
  }
}

class ContactFormMessage extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="form-group">
          <textarea name="contact[message]"
            className="form-control"
            placeholder="Message"
            required>
          </textarea>
        </div>
      </div>
    );
  }
}

export default Contact;
