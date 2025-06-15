const express = require('express');
const cors = require('cors');
const app = express();

// early in your middleware chain:
app.use(cors({ origin: 'http://localhost:4200' }));

// if you want to allow any origin (dev only), you can just do:
// app.use(cors());

app.use(express.json());

// your routes...
app.use('/api/skills', require('./routes/skills'));

module.exports = app;
