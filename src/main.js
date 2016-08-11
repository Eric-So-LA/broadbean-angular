angular.module('Broadbean', ['factoryModule'])
.controller('mainCtrl', function($scope, mainFactory){

	$scope.movieData = [];
	$scope.hundred = {name: 'hundred', list: []};
	$scope.ninety = {name: 'ninety', list: []};
	$scope.eighty = {name: 'eighty', list: []};
	$scope.seventy ={name: 'seventy', list: []};
	$scope.zero = {name: 'zero', list: []};
	function sortMovie(movie){
		var rating = movie.metacriticScore;
		if(rating > 90){
			$scope.hundred.list.push(movie);
		} else if(rating > 80){
			$scope.ninety.list.push(movie);
		} else if(rating > 70){
			$scope.eighty.list.push(movie);
		} else if(rating > 60) {
			$scope.seventy.list.push(movie);
		} else {
			$scope.zero.list.push(movie);
		}
	}

	mainFactory.getMovieData().then(function(data){
		$scope.movieData = data.data;
		$scope.movieData.forEach(function(movie){
			sortMovie(movie);
		})
		
		console.log("movie data: ", data);
	})
	console.log("bootstrapped mainCtrl!");

})
.directive("movieList", function(){
	return {
		restrict: 'E',
		scope: {
			movieList: '=info'
		},
		templateUrl: 'src/customDirectives/movie-list.html'
	}
});
// {dealID : "0RCpWEYbu8MU2hVWME4oEBOdqcpiwF9MStuF9XyP%2BWs%3D",
// dealRating : "9.6",
// gameID : "96654",
// internalName : "SYSTEMSHOCK2",
// isOnSale : "1",
// lastChange : 1470568929,
// metacriticLink : "/game/pc/system-shock-2",
// metacriticScore : "92",
// normalPrice : "9.99",
// releaseDate : 934329600,
// salePrice : "2.00",
// savings : "79.979980",
// steamRatingCount : "3187",
// steamRatingPercent : "94",
// steamRatingText : "Very Positive",
// storeID : "2",
// thumb : "http://cdn.akamai.steamstatic.com/steam/apps/238210/capsule_sm_120.jpg?t=1466791175",
// title : "System Shock 2"
// }