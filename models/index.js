var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/plants");

module.exports.Plant = require("./plant.js")