const express = require('express');
const router = express.Router();
const connectDB = require('../config/db');

router.get('/', async (req, res) => {
  const db = await connectDB();
  const skills = await db.collection('skills').find().sort({ count: -1 }).toArray();
  res.json(skills);
});

module.exports = router;
