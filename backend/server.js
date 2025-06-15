require('dotenv').config();
const express = require('express');
const cors = require('cors');           // ← import CORS
const app = express();

// MIDDLEWARE
app.use(cors({ origin: 'http://localhost:4200' })); // ← allow your Angular app
app.use(express.json());                          // ← parse JSON bodies

// ROUTES
const skillsRoute = require('./routes/skills');
app.use('/api/skills', skillsRoute);

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
