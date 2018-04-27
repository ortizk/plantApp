var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PlantSchema = new Schema({
	commonName: String,
	light: Number,
	water: Number,
	imageUrl: String, 
	comments: [ String ] 
});

// const Plant = mongoose.model('Plant', PlantSchema);

module.exports = mongoose.model('Plant', PlantSchema);