const express = require("express");
const path = require('path');

var router = express.Router()

var friends = require(path.join(__dirname, '../data/friends.js'));

router.get("/friends", function(req, res){
    res.send(friends.FriendsList);
});

router.post('/friends', function(req,res){
    friends.FriendsList.push(req.body);
    res.send(friends.findMatch(req.body));
});

module.exports = router;
