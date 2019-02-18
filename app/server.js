var express = require('express');
var path = require('path');
var app = express();

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routerHTML = require(`${__dirname}/routing/htmlRoutes.js`);

app.use("/", routerHTML);




app.listen(PORT, function(){
    console.log("Server started on port " + PORT);
});