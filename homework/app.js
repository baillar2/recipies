//requirements\\
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var logger = require('morgan')
var controller = require('./controller/controller.js')

//create app\\
var app = express()
mongoose.connect('mongodb://localhost/pairinDB')

//app config\\
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))
app.use(expres.static(__dirname + '/public'))


//listen\\
var port = 3000
app.listen(port, function(){
	console.log('server is running on port ' + port)
})
