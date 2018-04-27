var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Define what a user looks like in the database
var userSchema = mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	}
}, { strict: true });

// Make a function that checks whether the password is correct
userSchema.methods.isAuthenticated = function(password){
	// Bcrypt Compare(typedInPassword, actualPassword)
	var isCorrectPassword = bcrypt.compareSync(password, this.password);
	return isCorrectPassword ? this : false;
}

// Hash the password BEFORE saving a user to the database
userSchema.pre('save', function(next){
	// is the user being updated?
	// If yes, they already have a password, which
	//hass already been hashed. No Action required.
	console.log('here!');
	if(!this.isModified('password')){
		next();
	}
	else{
		this.password = bcrypt.hashSync(this.password, 10);
		next();
	}
});

//mongoose.model(nameOfDBCollection, schema, optionalNameForce)
// 1. name: will lowercase and pluralize for DB
// 2. schema: what does a user look like in the DB
// 3. forceName: (optional) force the name to something
// other than what #1 generates as collection name
module.exports = mongoose.model('User', userSchema);