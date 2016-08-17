angular.module('app', [])

angular.module('app')
	.controller('controllerOne', ['$scope', '$http', function($scope, $http){

		var s = $scope
		$http.get('/api/getItems')
			.then(function(serverData){
				console.log(serverData.data)
				s.itemArray = serverData.data
				console.log('ingredient list', s.itemArray)
			})

		s.item = {}
		s.subIng = function(){
			console.log('ingredient submission fired', s.item)
			$http.post('/api/newItem', s.item)
				.then(function(serverData){
					console.log('returned ingredient', serverData.data)
					alert('Your ingredient has been saved!!')
					$http.get('/api/getItems')
						.then(function(serverData){
							s.itemArray = serverData.data
							s.item = {}
						})
				})
		}

		s.rec = {
			name : null, 
			description : null, 
			ingredients : []
		}
		s.subRec = function(){
			console.log('recipe submission fired', s.rec)
			angular.forEach(s.itemArray, function(item){
				if(!!item.selected) s.rec.ingredients.push(item.name)
				})
			console.log('checked items', s.checkedArray)
			$http.post('/api/newRecipe', s.rec)
				.then(function(serverData){
					console.log('saved recipe', serverData.data)
					alert('Your recipe has been saved!!')
					s.rec = {
						name : null, 
						description : null, 
						ingredients : []
					}
				})
		}

	}])
angular.module('app')
	.controller('controllerTwo', ['$scope', '$http', function($scope, $http){
		var s = $scope

		s.search = {}
		s.findName = function(){
			console.log("find by name fired")
			$http.post('/api/ingredient/name', s.search)
				.then(function(serverData){
					console.log('search results', serverData.data)
					s.item = serverData.data
					s.found = true
					console.log(s.found)
				})
		}
		s.editIng = function(){
			s.edit = true
			console.log('edit ingredient fired')
			$http.post('/api/ingredient/edit', s.item)
				.then(function(serverData){
					console.log('edit success', serverData.data)
					alert('Your ingredient has been edited')
					s.edit = false
				})	
		}

	}])
angular.module('app')
	.controller('controllerThree', ['$scope', '$http', function($scope, $http){



	}])