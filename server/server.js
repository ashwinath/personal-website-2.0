const express = require('express'),
      app = express(),
      path = require('path'),
      morgan = require('morgan');

// Morgan Freeman is supposed to take in IP from x-headers and not localhost
morgan.token('remote-addr', req => {
  return req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
});

// We love Morgan Freeman
app.use(morgan('combined'));


// Serve static react files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Let react do the job
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
