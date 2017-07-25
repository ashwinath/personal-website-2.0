const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      EmailManager = require('./EmailManager'),
      Validator = require('./Validator')
      morgan = require('morgan');

// NGINX tends to give back localhost
app.set('trust proxy', true);

// We love Morgan Freeman
app.use(morgan('combined'));

// Body Parser
app.use(bodyParser.json());

// Serve static react files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Send workflow file
app.get('/workflowvideo', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'workflow-webm.webm'));
})

// Let react do the job
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/Contact', (req, res) => {
  const contactEnvelope = req.body.contactEnvelope;
  const valid = Validator.validateContactForm(contactEnvelope);
  if (valid) {
    const subject = `[Website] ${contactEnvelope.name} has contacted you!`
    EmailManager.sendEmail(
      subject,
      contactEnvelope,
      EmailManager.formatContactMe,
      (err, info) => {
        res.json({
          result: err ? "failed" : "success"
        });
    });
  } else {
    res.json({
      result: "failed"
    });
  }
});

module.exports = app;
