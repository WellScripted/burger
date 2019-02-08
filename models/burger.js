var orm = require("../config/orm");

var burger = {
    //selectALL method
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    //insertOne Method
    insertOne: function(name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    },

    //updateOne method
    updateOne: function(id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {devoured: true}, condition, cb);
    }
};

module.exports = burger;