//requirements
var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var port = process.env.PORT || 8080
var User = require('./app/models/user')
// create express app
var app = express()


//app config
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(req, res, next){
	res.setHeader('Acess-Control-Allow-Origin', '*')
	res.setHeader('Acess-Control-Allow-Methods', 'GET, POST')
	res.setHeader('Acess-Control-Allow-Headers', 'X-Requested-With, content-type, \ Athorization')
	next()
})

// routes
app.get('/', function(req, res){
	res.send('welcome to the home page')
})

var apiRouter = express.Router()

apiRouter.use(function(req, res, next){
	console.log('somebody just came to our api')
	next()
})
apiRouter.get('/', function(req, res){
	res.json({message:'hooray! welcome to our api'})
})
app.use('/api', apiRouter)
apiRouter.route('/users')
	.post(function(req, res){
		var user = new User()

		user.name = req.body.name
		user.username = req.body.username
		user.password = req.body.password

		user.save(function(err){
			if(err){
				if(err.code == 11000)
					return res.json({success:false, message: 'a user with that name already exists'})
				else
					return res.json(err)
			}
			res.json({message:'user created'})
		})
	})
	.get(function(req, res){
		User.find(function(err, users){
			res.json({messge:'user get route'})
			//if(err) res.send(err)
			//res.json({message:'users'})
		})
	})


app.listen(port)
console.log('server listening on port ' + port)
