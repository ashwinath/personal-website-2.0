const express = require('express'),
      app = express(),
      path = require('path'),
      morgan = require('morgan');

// We love Morgan Freeman
app.use(morgan('combined'));

// Serve static react files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Resume download
app.get('/resume', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'resume.pdf'));
})

// Let react do the job
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
