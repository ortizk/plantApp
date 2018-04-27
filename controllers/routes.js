var express 		= require('express');
var router 			= express.Router();
var plantFromRoute 	= require('../models/plant'); //this is your db
var userDb 			= require('../models/user');
var isLoggedIn 		= require('../middleware/isLoggedIn');
var request 		= require('request');
require('dotenv').config();

// router.get('/', function(req, res){
// 	console.log('heloooooo')
// 	console.log(req.user);
// 	var city = req.user.city;
// 	console.log(city);
	// var weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${SECRET_KEY}&units=metric`;
	// 	request({
	// 		url: weatherUrl,
	// 		apiKey: process.env.SECRET_KEY
	// 	}, function(error, resonse, body){
	// 		var data = JSON.parse(body);
	// 		var temp = data.main.temp;
	// 		res.render('/plantPage', {temp: data});
	// 	})

// })

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
			plantFromRoute.find(function(err, plants){
				res.render('plantPage', {plants: plants, temp: temp});
			})
		})
});
		
//might use the following later

// router.put('/:id', function(req, res){
// 		let plantComment = req.body
// 		console.log(plantComment);
// 		console.log(req.params);
// 		plantFromRoute.findByIdAndUpdate(req.params, {comments: plantComment.commentBox});
// 		// console.log(plantFromRoute.comments);
// 		// res.render('plantPage', {plants: plants});
	
// })

router.post('/:id', function(req, res){
		let plantComment = req.body
		console.log(plantComment);
		console.log(req.params);
		let index = req.params.id;
		plantFromRoute.update(
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
		res.redirect('/');
})



// ADDING WEATHER API

// var request = new XMLHttpRequest();


// router.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${currentUser.city}&APPID=${SECRET_KEY}&units=metric`, true);

// request.onload = function () {
//     // begin accessing JSON data here
//     // We have received an http request. The response is in a JSON so we need 
//     // to convert that to JS Object to work with it
//     var data = JSON.parse(this.response);

//     // DISPLAYING API DATA
//     const ejsWeatherTarget = $('#weatherTarget');

//     // const weather = $('<p></p>');

//     const h1 = $('<h1></h1>');
//     ejsWeatherTarget.append(h1);


//     if(request.status >= 200 && request.status < 400) {
//         h1.textContent = data.main.temp;
//         ejsWeatherTarget.append(h1.textContent)
//         console.log(data.main.temp); 
//         console.log(data.weather[0].main); 
//     } else {
//         console.log('error with api');
//     }

// };
//     // Send request
//     request.send();
//  // END OF API INPUT FROM APP.JS

module.exports = router;