var express 		= require('express');
var router 			= express.Router();
var PlantFromRoute 	= require('../models/plant'); //PLANT DB
var UserDb 			= require('../models/user'); //USER DB
var isLoggedIn 		= require('../middleware/isLoggedIn');
var request 		= require('request');
require('dotenv').config();

router.get('/', isLoggedIn, function(req, res) {
	console.log('from the server');
	UserDb.find().populate('favePlants').exec(function (err, userFaves) {
		let currentUserDetails;
		userFaves.forEach( (user) => {
			if (user._id == res.locals.currentUser.id) {
				currentUserDetails = user;
			}
		})
		res.render('profile', {userFaves: currentUserDetails});
	})
});
router.delete('/:id', function(req, res){
	UserDb.findById(res.locals.currentUser.id, (err, user) => {
		let i = user.favePlants.indexOf(req.params.id);
		user.favePlants.splice(i, 1);
		user.save();
		console.log(user.favePlants);
		res.send('deleted fave plant');
	})
})	


// POSTING FAVES TO USER PROFILE
router.post('/', isLoggedIn, function(req, res){
	console.log(req.body);
	UserDb.findById(res.locals.currentUser.id, (err, user) => {
		user.favePlants.push(req.body.id)
		user.save();
	});
	res.send('success');
});


router.post('/:id', isLoggedIn, function(req, res){
	console.log(req.body);
	UserDb.findById(res.locals.currentUser.id, (err, user) => {
		user.favePlants.push(req.body.id)
		user.save();
	});
	res.send('success');
});


module.exports = router;