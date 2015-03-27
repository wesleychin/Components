'use strict';

angular.module('componentsApp')
.controller('MarketNewsCtrl', function ($scope, $http, $timeout, $filter) {
	$http.get('/api/portfolio/market-news.json').success(function(response) {
		$scope.marketNews = response;
	}); 
});		