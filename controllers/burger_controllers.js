var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("", function (req, res) {
    burger.select(function (data) {
        var newObj = {
            burger: data
        };

        console.log(newObj);
        res.render("index", newObj);
    });
});

//router.post
router.post("/api/burgers", function (req, res) {
    burger.Burgers.insert(["burger_name", "devoured"], [req.body.burger_name, 0], function (result) {
        res.json({ id: result.insertId });
    });
});

//router.put
router.put("/api/burgers/:id", function (req, res) {
    var findBur = "id =" + req.params.id;

    console.log("Condition for Update Query: " + findBur);

    burger.Burgers.update({ devoured: req.body.devoured }, findBur, function (result) {
        if (result.changedRows === 0) {
            // If no Rows Were Affected, Then ID Must Not Exist => Send 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});


module.exports = router;