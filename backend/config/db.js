const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Prashant@123",
  database: "react_assignment_db"
});

module.exports = db;
