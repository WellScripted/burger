var mysql = require("mysql");
var connection;

//Creating connection to 'burgers_db'
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

//exporting the connection
connection.connect();
module.exports = connection;

//end