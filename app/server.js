var express = require('express');
var path = require('path');
var app = express();

var PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routerHTML = require(path.join(__dirname, "/routing/htmlRoutes.js"));
var routerAPI = require(path.join(__dirname, "/routing/apiRoutes.js"));


app.use("/", routerHTML);
app.use("/api", routerAPI);




app.listen(PORT, function(){
    console.log("Server started on port " + PORT);
});