
/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, http = require('http')
, path = require('path');

//URL for the sessions collections in mongoDB
//var mongoSessionConnectURL = "mongodb://localhost:27017/calculator";
var expressSession = require("express-session");
//var mongoStore = require("connect-mongo")(expressSession);
//var mongo = require("./routes/mongo");
var calculator = require("./routes/calculator");

var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
/*app.use(expressSession({
	secret: 'cmpe273_teststring',
	resave: false,  //don't save session if unmodified
	saveUninitialized: false,	// don't create session until something stored
	duration: 30 * 60 * 1000,    
	activeDuration: 5 * 60 * 1000,
	store: new mongoStore({
		url: mongoSessionConnectURL
	})
}));*/

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

//GET Requests
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/homepage',calculator.redirectToHomepage);

//POST Requests
app.post('/multiply', calculator.multiply);
app.post('/add', calculator.add);
app.post('/sub', calculator.sub);
app.post('/divide', calculator.divide);
//app.post('/logout', calculator.logout);


	http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});  
//});