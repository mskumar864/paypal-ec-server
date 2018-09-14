var express = require("express");

var app = express.Router();

app.get("/", function(req, res){
	res.sendFile(__basedir + '/public/view/index.html');
});

app.get("/ec-client", function(req, res){
	res.sendFile(__basedir + '/public/view/ec-client.html');
});

app.get("/ec-server", function(req, res){
	res.sendFile(__basedir + '/public/view/ec-server.html');
});

module.exports = app;