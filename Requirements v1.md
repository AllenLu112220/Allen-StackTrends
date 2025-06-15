# StackTrends – Requirements Document

## Overview
StackTrends is a full stack web application that ingests tech job posting data and extracts the most frequently mentioned technical skills and technologies. It displays a single ranked list of skills from most to least mentioned—helping users understand which technologies are in highest demand.

---

## Tech Stack

| Layer       | Technology                  |
|-------------|------------------------------|
| Frontend    | Angular                      |
| Backend     | Node.js + Express.js         |
| Database    | MongoDB                      |
| Hosting     | AWS EC2 (Ubuntu Server)      |
| Process Mgr | PM2                          |
| Web Server  | Nginx (Reverse Proxy)        |
| Charts/Style| Optional (e.g., Bootstrap, Chart.js) |

---

## Core Features

### 1. Job Data Ingestion
- Upload CSV/JSON job datasets (via admin endpoint or script)
- Parse job descriptions and extract skills using a predefined skill dictionary
- Save extracted skills and their frequencies to MongoDB

### 2. Skill Frequency List (Main View)
- Angular frontend displays a list of all skills sorted from **most to least frequent**
- Each entry includes:
  - Skill name
  - Count

---

## Data Sources

| Source | URL |
|--------|-----|
| Kaggle - Dice.com Tech Jobs | https://www.kaggle.com/datasets/PromptCloudHQ/us-technology-jobs-on-dicecom |
| Kaggle - Indeed Tech Jobs | https://www.kaggle.com/datasets/shivamb/indeed-dataset |
| Kaggle - Job Salary Prediction | https://www.kaggle.com/datasets/madhab/jobposts |

---

## Data Models (MongoDB)

### Skill
```js
{
  _id: ObjectId,
  name: String,
  count: Number,
  last_updated: Date
}
