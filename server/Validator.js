const isEmail = require('validator/lib/isEmail');
const isNumeric = require('validator/lib/isNumeric');

const Validator = {
  validateContactForm: validateContactForm
}

/**
 * Returns true if validation passes
 */
function validateContactForm(contactEnvelope) {
  const { name, email, phone, message } = contactEnvelope;
  const validEmail = isEmail(email);
  const validContact = phone ? isNumeric(phone) : true;

  return name && validEmail && validContact && message;
}

module.exports = Validator; 
