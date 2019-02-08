var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

//GET route for the index
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

//GET request for /burgers
router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", {
            burger_data: burgerData
        })
    })
});

//POST route for new burgers
router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    })
});

//PUT route for devoured burgers
router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    })
});

module.exports = router;