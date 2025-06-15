const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

const skillsRoutes = require('./routes/skills');
app.use('/api/skills', skillsRoutes);

module.exports = app;
