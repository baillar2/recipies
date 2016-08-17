var mongoose = require('mongoose')

var itemSchema = mongoose.Schema({
	name : String, 
	description : String, 
	group : String, 
})

module.exports = mongoose.model('Item', itemSchema)