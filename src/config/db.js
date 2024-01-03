const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "alliance",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the pool to be used by other modules
module.exports = pool.promise();
