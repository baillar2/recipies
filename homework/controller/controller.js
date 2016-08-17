var itemModel = require('../models/ingredient.js')
var recModel = require('../models/recipe.js')

function getItems(req, res){
	itemModel.find({}, function(err, doc){
		if(err){
			console.log('ingredient list error', err)
			res.send(err)
		}
		if(doc){
			res.send(doc)
		}
	})
}
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

function newRecipe(req, res){
	var recipe = new recModel({
		name : req.body.name, 
		description : req.body.description, 
		ingredients : req.body.ingredients, 
	})
	recipe.save(function(err, recipe){
		if(err){
			console.log('save error', err)
		}
		else{
			console.log('recipe saved', recipe)
			res.json(recipe)
		}
	})
}
module.exports = {
	getItems : getItems, 
	newItem : newItem, 
}