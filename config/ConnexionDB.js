const mysql = require("mysql");
let connexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.database,
    //port: 8889,
});

module.exports = connexion;