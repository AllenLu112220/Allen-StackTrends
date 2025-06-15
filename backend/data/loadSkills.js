const fs = require('fs');
const csv = require('csv-parser');
const connectDB = require('../config/db');

async function loadSkills() {
  const db = await connectDB();
  const collection = db.collection('skills');

  const skillCounts = {};

  fs.createReadStream('./jobs_data.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (row.keywords) {
        const keywords = row.keywords.split(',').map(k => k.trim().toLowerCase());
        keywords.forEach(k => {
          skillCounts[k] = (skillCounts[k] || 0) + 1;
        });
      }
    })
    .on('end', async () => {
      await collection.deleteMany({});
      const bulk = Object.entries(skillCounts).map(([name, count]) => ({ name, count }));
      await collection.insertMany(bulk);
      console.log('✅ Skills loaded into MongoDB');
      process.exit();
    });
}

loadSkills();
