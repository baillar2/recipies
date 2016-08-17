var itemModel = require('../models/ingredient.js')
var recModel = require('../models/recipe.js')

function newItem(item, res){
	console.log(item)
	var item = new itemModel({
		name : item.body.name, 
		description : item.body.description, 
		group : item.body.group, 
	})
	item.save(function(err, item){
		if(err){
			console.log('save error', err)
		}
		else{
			console.log('ingredient saved', item)
			res.json(item)
		}
	})
}