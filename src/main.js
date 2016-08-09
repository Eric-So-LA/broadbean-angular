angular.module('Broadbean', ['factoryModule'])
.controller('mainCtrl', function($scope, mainFactory){

	$scope.movieData = [];
	mainFactory.getMovieData().then(function(data){
		$scope.movieData = data.data;
		console.log("movie data: ", data);
	})
	console.log("bootstrapped mainCtrl!");

})