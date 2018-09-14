var express = require("express");
var bodyParser = require('body-parser');

var index = require('./routes/index')
var ec = require('./routes/ec');

var app = express();

global.__basedir = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
      extended: true
}));

app.use(express.static(__dirname+'/public'));

app.use('/', index);
app.use('/api/paypal/ec', ec);

var port = process.env.PORT || '8080';
app.listen(port, function(){
	console.log('server started at port '+ port);
});

