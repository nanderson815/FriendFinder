
var friends = [
    {
        "name": "Noah",
        "photo": "https://avatars2.githubusercontent.com/u/20387629?s=460&v=4",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
        ]
    },
    {
        "name": "Danny",
        "photo": "http://www.gstatic.com/tv/thumb/persons/426/426_v9_bb.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
        ]
    },
    {
        "name": "Kyle",
        "photo": "http://www.gstatic.com/tv/thumb/persons/659578/659578_v9_ba.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
        ]
    },
    {
        "name": "James",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjA4MzMzNDM5MF5BMl5BanBnXkFtZTgwMjQ0MDk0NDM@._V1_.jpg",
        "scores": [
            2,
            1,
            4,
            5,
            2,
            3,
            3,
            4,
            5,
            2,
        ]
    },
    {
        "name": "Dwayne Michael Carter, Jr.",
        "photo": "http://www.gstatic.com/tv/thumb/persons/506402/506402_v9_bb.jpg",
        "scores": [
            2,
            1,
            4,
            5,
            2,
            5,
            5,
            4,
            2,
            4,
        ]
    }
]

function findMatch(data) {
    var diff = [];
    var userScores = []
    for (i in data.scores){
        var num = parseInt(data.scores[i]);
        userScores.push(num);
    };
    for (i in friends){
        var abs = 0;
        for (j in friends[i].scores){
            var num = parseInt(friends[i].scores[j])
            abs = abs + Math.abs(num - userScores[j]);
        }
        diff.push(abs);
    };
    diff.pop();
    var smallest = Math.min(...diff);
    var match = friends[diff.indexOf(smallest)];
    return match;    
};

exports.findMatch = findMatch;
exports.FriendsList = friends;