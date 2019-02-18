
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
    }
]

function addFriend(data){
    friends.push(data);
    console.log(data);
};

module.exports = friends;