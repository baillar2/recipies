var mongoose = require('mongoose')

var recSchema = mongoose.Schema({
	name : String, 
	description : String, 
	ingredients : Array, 
})

module.exports = mongoose.model('Recipe', recSchema)