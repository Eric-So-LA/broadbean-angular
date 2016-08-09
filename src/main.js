angular.module('Broadbean', ['factoryModule'])
.controller('mainCtrl', function($scope, mainFactory){

	mainFactory.getMovieData().then(function(data){
		console.log("movie data: ", data);
	})
	console.log("bootstrapped mainCtrl!");

})