const nodemailer  = require('nodemailer'),
      credentials = require('./credentials/Credentials'),
      logger = require('./logger')

const EmailManager = {

  // formatting shld be done prior to this
  // returns false if not sent, true if sent
  sendEmail: (subject, messageObject, formatter, callback) => {
    const transporter = nodemailer.createTransport(credentials.email);

    const emailText = formatter
      ? formatter(messageObject)
      : messageObject;

    const mailOptions = {
      from: credentials.email.auth.user,
      to: credentials.myEmail,
      subject: subject,
      text: emailText
    }

    logger.info(`Sending email.
        Contents: ${emailText}`);
    transporter.sendMail(mailOptions, callback);
  },

  // helper function to format email
  // Schema shld be as follows: 
  // {
  //   name:
  //   email:
  //   phone:
  //   message:
  // }
  formatContactMe: message => {
    const emailMessageFormatted = 
      'Name: ' + message.name + '\n' +
      'Email: ' + message.email + '\n' +
      'Phone: ' + message.phone + '\n' +
      'Message: ' + message.message;
    return emailMessageFormatted;
  }
}

module.exports = EmailManager;
