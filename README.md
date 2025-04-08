# 🏦 Bank Management System

A full-stack web application that simulates essential banking operations.  
Users can manage their bank accounts with features such as:

- Viewing account details
- Withdrawing funds
- Depositing funds
- Requesting loans

---

## 🚀 Technologies Used

### Backend:

- **Node.js** with **Express.js**
- **MySQL2** for database management
- **CORS** for cross-origin requests
- **Nodemon** for server-side development

### Frontend:

- **Angular**

---

## 📂 Project Structure

Bank_Management
├── client/ # Angular Frontend
└── server/ # Express Backend

---

## ⚙️ Installation & Setup

To run the project locally, follow these steps:

### 1. Install dependencies:

```bash
cd server
npm install

cd ../client
npm install

```

### 2. Start the backend server:

```bash
cd server
nodemon index
```

### 3. Start the frontend Angular application:

```bash
cd client
ng serve -o
```

---

## 🗄️ Database Configuration

This project uses **MySQL** as the relational database.

Before running the backend server, follow these steps:

1. Make sure your MySQL server is running.
2. Run the SQL script located at `server/schema.sql` to create the database and seed it with initial data.
   You can execute it using any MySQL client (such as MySQL Workbench or the CLI).

3. Create a `.env` file inside the `server/` directory to store your database credentials:

**server/.env**

4. The backend reads this configuration using `dotenv`.  
   Make sure your `db.js` includes:

```js
require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = db;
```
