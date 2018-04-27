var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

//Tell passport how to store data in the session
// Serialization so we dont' have to store entire user object in session
passport.serializeUser(function(user, callback) {
	// Callback(error, data)
	// errorL If an error happened, pass it, otherwise, null/falsey value
	callback(null, user.id)
});

passport.deserializeUser(function(id, callback){
	User.findById(id).then(function(user){
		// success
		callback(null, user);
	}).catch(function(err) {
		// something went wrong
		callback(err, null);
	});
});

//Actually implement loging functionality
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(email, password, callback) {
	// What I need to do now
	// 1. Find the user
	// 2. Validate credentials
	// 3. Done (callback)
	User.findOne({email: email}, function(err, user){
		if(err || !user || !user.isAuthenticated(password)){
			console.log('error', err);
			callback(err, null)
		}
		else {
			callback(null, user);
		}
	});

}));

module.exports = passport;