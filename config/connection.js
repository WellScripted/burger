var mysql = require("mysql");

//Creating connection to 'burgers_db'
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as ID: " + connection.threadId);
});

//exporting the connection
module.exports = connection;