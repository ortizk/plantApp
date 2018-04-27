// modules I need for running this app
require('dotenv').config();//loads the .env
var bodyParser 		= require('body-parser');
var express 		= require('express');
var expressLayouts 	= require('express-ejs-layouts');
var flash 			= require('connect-flash');
var isLoggedIn 		= require('./middleware/isLoggedIn')
var mongoose 		= require('mongoose');
var passport 		= require('./config/passportConfig');
var session 		= require('express-session');
var path 			= require('path');

// app variable
var app = express();
app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

// connect to the database
mongoose.connect('mongodb://localhost/plants', function(err) {
    if (err) {
        console.err(err);
    } else {
        console.log('Connected');
    }    
});

// Set and use statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressLayouts);
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
	// changed to false bc i needed to be longed in for longer
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Just a convenience, but makes life easier...
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

// Top-level Routes
app.get('/', function (req, res) {
	res.render('home');
});

app.get('/profile', isLoggedIn, function(req, res) {
	res.render('profile');
});

// Include any routes from controllers
app.use('/auth', require('./controllers/auth'))
app.use('/plantPage', require('./controllers/routes'))

	

// Listen

app.listen(process.env.PORT || 3000)