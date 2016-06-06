var express = require('express')
var app = express ()
var path = require('path')

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'))
})
var adminRouter = express.Router()

adminRouter.use(function(req, res, next){
	console.log(req.method, req.url)
	next()
})
adminRouter.param('name', function(req, res, next, name){
	console.log('doing some validations on ' + name)
	req.name = name
	next()
})
adminRouter.get('/', function(req, res){
	res.send('i am the dashboard!')
})
adminRouter.get('/users', function(req, res){
	res.send('i show all the users')
})
adminRouter.get('/posts', function(req, res){
	res.send('i show all of the posts')
})
adminRouter.get('/users/:name', function(req, res){
	res.send('hello', + req.params.name)
})
adminRouter.get('/hello/:name', function(req, res){
	res.send('hello ' + req.name)
})

app.use('/admin', adminRouter)


app.listen(3000)
console.log('server listening on port 3000')