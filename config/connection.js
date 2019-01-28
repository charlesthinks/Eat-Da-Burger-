var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "burgers_db",
    password: "password"
});


connection.connect(function(err){
    if(err){
        console.log("Error: " + err.stack);
        return;
    }

    console.log("Your server ID is: " + connection.threadId);
    
});

module.exports = connection;