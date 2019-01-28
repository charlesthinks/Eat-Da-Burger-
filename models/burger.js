var orm = require("../config/orm.js");

var Burgers = {
    // Inserts a new burger into the database.
    insert: function(val1, val2){
         orm.insertOne(val1, val2);
    },
    // Find all burgers in the burgers table.
    select: function(){
        orm.selectAll();
    },
    // Upates a burger by its ID.
    update: function(burgerId){
        orm.updateOne(burgerId);
    }
};

module.exports = Burgers;