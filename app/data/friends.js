
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
        "name": "Bruce",
        "photo": "https://vignette.wikia.nocookie.net/pixar/images/8/83/71423763-2085-4F98-8461-FC6E2C48828E.png/revision/latest?cb=20181210152244",
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
        "name": "Dori",
        "photo": "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2014/12/dory_a_l.jpg",
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
    return diff;    
};

exports.findMatch = findMatch;
exports.FriendsList = friends;