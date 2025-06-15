require('dotenv').config();
const express = require('express');
const app = express();

// Load routes
const skillsRoute = require('./routes/skills');
app.use('/api/skills', skillsRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
