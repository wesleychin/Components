'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http) {
	$scope.view = 1;
	
	$http.get('/api/portfolio/sections.json').success(function(response) {
		$scope.sections = response;
	});

	$http.get('/api/portfolio/portfolio-overview.json').success(function(response) {
		$scope.JSONdata = response;
	});

	$http.get('/api/portfolio/chart-data.json').success(function(response) {
		$scope.chartData = response;
	});

	$http.get('/api/portfolio/market-news.json').success(function(response) {
		$scope.marketNews = response;
	});

	$scope.goToView= function (sectionId) {
		$scope.view = sectionId;
	}
});
