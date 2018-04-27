//Include express
var express = require('express');
var passport = require('../config/passportConfig');
var router = express.Router();

// Include the user model
var User = require('../models/user');

// Render the pafe with the login form
router.get('/login', function(req, res){
	res.render('auth/login');
});

// Perform the login functionality
router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	successFlash: 'Good work, you logged in',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid credentials'
}));

// Render the page with the signup form
router.get('/signup', function(req, res){
	res.render('auth/signup');
});

// Perform the signup functionality
router.post('/signup', function(req, res, next){
	console.log('su: info from form', req.body);

	// First, try to find their email(in case it already exists)
	User.findOne({email: req.body.email}, function(err, user){
		console.log('hello?');
		if(err){
			console.log('bummer, what happened?', err);
			req.flash('error', 'Something went wrong, check the logs');
			res.redirect('/auth/signup');
		}
		else if(user){
			// I Don't want to let them sign up multiple times with the same email
			req.flash('error', 'You already exist');
			res.redirect('/auth/login');
		}
		else {
			//User did everthing right - they are actually a new user signing up
			User.create(req.body, function(err, createUser){
				if(err){
					req.flash('error', 'nooooooo wwwwwhhhhhyyyy');
					return console.log('err', err);
				}
				console.log('yay, signed up, now lets log in!');
				passport.authenticate('local', {
					successRedirect: '/profile',
					successFlash: 'Sucessful account creation'
				})(req, res, next);
			})
		}
	});
});

//  Logout route removes user data from session
// Then is redirects to the homage page
router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'You are logged out. Bye');
	res.redirect('/');
});

// Allow other fiiles to access the routes defines here

module.exports = router;