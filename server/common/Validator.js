const isEmail = require('validator/lib/isEmail');
const isNumeric = require('validator/lib/isNumeric');

const Validator = {
  validateContactForm: validateContactForm
}

/**
 * Returns true if validation passes
 */
function validateContactForm(contactForm) {
  const { name, email, contactNo, content } = contactForm;
  const validEmail = isEmail(email);
  const validContact = validContact ? isNumeric(contactNo) : true;

  return {
    nameError: name ? true : false,
    emailError: validEmail,
    contactNoError: validContact,
    messageError: content ? true: false
  }
}

module.exports = Validator; 
