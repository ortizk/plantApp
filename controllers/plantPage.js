var express 		= require('express');
var router 			= express.Router();
var PlantFromRoute 	= require('../models/plant'); //PLANT DB
var UserDb 			= require('../models/user'); //USER DB
var isLoggedIn 		= require('../middleware/isLoggedIn');
var request 		= require('request');
require('dotenv').config();


var SECRET_KEY = process.env.SECRET_KEY;

router.get('/', function(req, res){
	if(req.user){
		var city = req.user.city;
		var weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${SECRET_KEY}&units=metric`;
	}
		request({
			url: weatherUrl,
			// apiKey: process.env.SECRET_KEY
		}, function(error, resonse, body){
			if(req.user){
			var temp = JSON.parse(body).main.temp;
			}
			// temp = data.main.temp;
			PlantFromRoute.find(function(err, plants){
				res.render('plantPage', {plants: plants, temp: temp});
			})
		})
});
//	POSTS COMMENT TO PLANT
router.post('/:id', function(req, res){
		let plantComment = req.body
		console.log(plantComment);
		console.log(req.params);
		let index = req.params.id;
		PlantFromRoute.update(
			{_id: req.params.id}, 
			{$push: {comments: plantComment.commentBox}},
			function(error, success){
				if(error){
					console.log('error', error)
				} else {
					console.log('success', success)
				}
			}
		)

});







module.exports = router;


