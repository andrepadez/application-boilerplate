var pubsub = require('organic-lib/pubsub');
var ajax = require('organic-lib/ajax');
var application = require('./application/application.controller');

var CONFIGURATION_URL = 'http://localhost:3001/get-configuration';


ajax.getJSON( CONFIGURATION_URL )
	.then( application.init.bind(application) )
	.then (
		function(){ console.log('application started successfully'); },
		function(err){ console.error(err.stack); }
	);


pubsub.subscribe('*', function(message, payload){
	console.log('------- Message Received ----------');
	console.log('message:', message);
	console.log('payload:', payload);
    console.log('-----------------------------------');
});
