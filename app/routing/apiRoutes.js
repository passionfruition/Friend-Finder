var friends = require("./../data/friends.js");

// API Route Handling
module.exports = function(app) {
    app.get("/api/friends/", function(req, res) {
        return res.json(friends);
    });
    app.get("/api/clear/", function(req, res) {
        friends.length = 0;
        res.json({ok: true});
    });
    // Handles incoming survey results and compatibility logic
    app.post("/api/friends/", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
    });
}