const mysql = require('mysql2');

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',  // Your MySQL username (default is 'root')
    password: 'root',  // Your MySQL password
    database: 'museum_ticket_bot',  // The database name you created
});

module.exports = { pool };
