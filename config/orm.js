//Import mySQL 
var connection = require("../config/connection.js");

//Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
}

//ORM objects to perform the SQL queries

var orm = {
    //Select ALL function
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM" + tableInput + ";";

        //DB Query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            //callback results
            cb(result);
        });
    },

    //Insert ONE function
    insertOne: function(table, cols, val, cb) {
        var queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        //DB Query
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            //callback results
            cb(result);
        });
    },
    
    //Update ONE function
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        //DB Query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            //callback results
            cb(result);
        });
    }
    
};

//Export ORM
module.exports = orm;