var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM `burgers_db`.`burgers`";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (val1, val2) {
        var queryString = "INSERT INTO burgers_db.burgers";
        queryString += "(burger_name, devoured)";
        queryString += "VALUES (" + val1 + "," + val2 + ")";

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (burgerId) {
        var queryString =
            "UPDATE `burgers_db`.`burgers` SET `devoured` = '1' WHERE (`id` = ?)";

        connection.query(queryString, [burgerId], function (err, result) {
            if (err) throw err;
            console.log(result);
        }
        );
    }
};

module.exports = orm;
