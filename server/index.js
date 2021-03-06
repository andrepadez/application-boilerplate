var express = require('express');
var configManager = require('./configuration-manager');

var app = express();
var port = 3001;

app.listen(port, function(){
	console.log('listening on port ', port);
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
 });

app.get('/get-configuration', function(req, res){
	var configurationData = configManager.getAllConfiguration();
	res.send(configurationData);
});