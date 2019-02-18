const express = require("express");
const path = require('path');

var router = express.Router()

var friends = require(path.join(__dirname, '../data/friends.js'));

router.get("/friends", function(req, res){
    res.send(friends);
});

router.post('/friends', function(req,res){
    friends.push(req.body);
    res.send(true);
});

module.exports = router;
