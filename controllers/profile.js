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
		res.render('profile', {userFaves});
	})
		

});

// POSTS FAVE PLANT TO USER PROFILE
// router.post('/', isLoggedIn, function(req, res){
// 	console.log(req.body);
// 	UserDb.findById(res.locals.currentUser.id, (err, user) => {

// 		UserDb.create(req.body, (err, plant) => {
// 			user.favePlants.push(plant);
// 			user.save();
// 		})
// 	});
// 	res.send('success');
// });

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