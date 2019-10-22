var friends = require("./../data/friends.js");
var express = require("express");
var app = express();

// get route /api/friends to display a json of all friends
module.exports = function(app) {
    app.get("/api/friends/", function(req, res) {
        return res.json(friends);
    });

    // post route /api/friends which will handle incoming survey results and compatibility logic
    app.post("/api/friends/", function(req, res) {
        var newFriend = req.body;
        newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
        friends.push(newFriend);
        res.json(newFriend);
    });
}