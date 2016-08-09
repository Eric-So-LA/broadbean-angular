angular.module('factoryModule', [])

//GET http://www.cheapshark.com/api/1.0/deals
.factory('mainFactory', function($http){
	var rootUrl = "http://www.cheapshark.com/api/1.0/deals";

	function getMovieData(){
		return $http.get(rootUrl);
	}
	return { getMovieData: getMovieData };
})