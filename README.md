# Allen-StackTrends

A full-stack application to track and display trending tech job skills using a Node.js + Express backend and an Angular 18 frontend.

## Table of Contents

* [Features](#features)
* [Project Structure](#project-structure)
* [Prerequisites](#prerequisites)
* [Setup & Installation](#setup--installation)

  * [Backend](#backend)
  * [Frontend](#frontend)
* [Usage](#usage)
* [API Endpoints](#api-endpoints)
* [Contributing](#contributing)
* [License](#license)

## Features

* **Data Loading**: Load job skills data from a CSV into MongoDB.
* **REST API**: Retrieve skill counts via an Express endpoint.
* **Angular Frontend**: Display skills and their occurrence counts in a responsive UI.
* **CORS Support**: Properly configured to allow frontend-backend communication.

## Project Structure

```
Allen-StackTrends/
├── backend/                     # Node.js + Express backend
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   ├── data/
│   │   └── loadSkills.js        # Script to import CSV data into MongoDB
│   ├── routes/
│   │   └── skills.js            # `/api/skills` route handler
│   ├── node_modules/
│   ├── .env                     # Environment variables (e.g., MONGO_URI)
│   ├── .gitignore
│   ├── app.js                   # Express app configuration
│   ├── package.json
│   ├── package-lock.json
│   ├── requirements v1.md       # Project requirements
│   ├── server.js                # Server entry point
│   └── jobs_data.csv            # Raw data source
│
├── frontend/                    # Angular 18 frontend
│   ├── e2e/
│   ├── node_modules/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   └── skills-list/ # Component to display skills
│   │   │   ├── services/        # HTTP service to fetch skills
│   │   │   ├── app.component.*  # Root component files
│   │   │   ├── app-routing.module.ts
│   │   │   └── app.module.ts    # NgModule setup
│   │   ├── assets/
│   │   ├── environments/
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── angular.json             # Angular CLI config
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── README.md                # Frontend-specific README (optional)
```

## Prerequisites

* [Node.js](https://nodejs.org/) v16 or higher
* [npm](https://www.npmjs.com/) v8 or higher
* [Angular CLI](https://angular.io/cli) v18.2.20
* [MongoDB](https://www.mongodb.com/) running locally or accessible via connection string

## Setup & Installation

### Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` (if provided) or add:

   ```dotenv
   MONGO_URI=mongodb://localhost:27017/stacktrends
   PORT=5000
   ```
4. Load data into MongoDB:

   ```bash
   node data/loadSkills.js
   ```
5. Start the server:

   ```bash
   npm start
   ```

   The API will run at `http://localhost:5000`.

### Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the Angular development server:

   ```bash
   ng serve --open
   ```

   The app will open at `http://localhost:4200`.

## Usage

* Visit `http://localhost:4200` to see the list of trending tech job skills and their counts.
* The frontend fetches from the backend endpoint `GET /api/skills`.

## API Endpoints

* `GET /api/skills` – Returns JSON array of skills with fields:

  * `_id` (string)
  * `name` (string)
  * `count` (number)

Example response:

```json
[{ "_id": "...", "name": "aws", "count": 1718 }, ...]
```

## Contributing

Contributions are welcome! Please:

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/xyz`).
3. Commit your changes (`git commit -m 'Add xyz'`).
4. Push to the branch (`git push origin feature/xyz`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. Feel free to use and modify.
