var db = require('./models');

var plantSeed = [
	{
		commonName: 'Aloe',
		light: 3,
		water: 1,
		imageUrl: "./images/aloe.jpg"
	},
	{
		commonName: 'Snake Plant',
		light: 1,
		water: 1,
		imageUrl: "./images/snake.jpg"
	},
	{
		commonName: 'Burro\'s Tail',
		light: 3,
		water: 1,
		imageUrl: "./images/burro.jpg"
	},
	{
		commonName: 'Zebra Cactus',
		light: 2,
		water: 1,
		imageUrl: "./images/zebra.jpg"
	},
	{
		commonName: 'Crown of Thorns',
		light: 2,
		water: 2,
		imageUrl: "./images/crown.jpg"
	},
	{
		commonName: 'Hens-and-Chicks',
		light: 3,
		water: 1,
		imageUrl: "./images/hens.jpg"
	},
	{
		commonName: 'String of Bananas',
		light: 2,
		water: 1,
		imageUrl: "./images/banana.jpg"
	},
	{
		commonName: 'Lithops',
		light: 3,
		water: 1,
		imageUrl: "./images/lithops.jpg"
	},
	{
		commonName: 'Christmas Cactus',
		light: 3,
		water: 1,
		imageUrl: "./images/christmas.jpg"
	},
	{
		commonName: 'Ponytail Palm',
		light: 2,
		water: 1,
		imageUrl: "./images/ponytail.jpg"
	},
	{
		commonName: 'String of Pearls',
		light: 3,
		water: 1,
		imageUrl: "./images/pearls.jpg"
	},
	{
		commonName: 'Panda Plant',
		light: 2,
		water: 1,
		imageUrl: "./images/panda.jpg"
	},
	{
		commonName: 'Pencil Cactus',
		light: 3,
		water: 1,
		imageUrl: "./images/pencil.jpg"
	},
	{
		commonName: 'Jade',
		light: 2,
		water: 1,
		imageUrl: "./images/jade.jpg"
	},
	{
		commonName: 'Bear\'s Paw',
		light: 2,
		water: 1,
		imageUrl: "./images/bears.jpg"
	},
	{
		commonName: 'Ivory Towers',
		light: 2,
		water: 1,
		imageUrl: "./images/ivory.jpg"
	},
	{
		commonName: 'Crassula mesembryanthemoides',
		light: 2,
		water: 1,
		imageUrl: "./images/mesem.jpg"
	},
	{
		commonName: 'ET\'s fingers',
		light: 2,
		water: 1,
		imageUrl: "./images/et.jpg"
	},
	{
		commonName: 'Ruby Blush',
		light: 2,
		water: 1,
		imageUrl: "./images/ruby.jpg"
	},
	{
		commonName: 'Tiger Jaws',
		light: 3,
		water: 1,
		imageUrl: "./images/tiger.jpg"
	},
	{
		commonName: 'Gasteria \'Little Warty\'',
		light: 3,
		water: 1,
		imageUrl: "./images/warty.jpg"
	},
	{
		commonName: 'Rubber Tree Plant',
		light: 2,
		water: 1,
		imageUrl: "./images/rubber.jpg"
	},
	{
		commonName: 'Pothos',
		light: 3,
		water: 2,
		imageUrl: "./images/pothos.jpg"
	},
	{	commonName: 'Cast Iron Plant',
		light: 2,
		water: 2,
		imageUrl: "./images/iron.jpg"}
	]
// Sources
	// http://balconygardenweb.com/14-best-indoor-succulents-to-grow-at-home/
	// https://mountaincrestgardens.com/indoor-succulents/

db.Plant.create(plantSeed, function(err, plants){
	if(err){
		return console.log('err', err);
	}
	console.log('created', plants.length, "plants")
	process.exit();
})