'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http) {
	$scope.view = 1;
	$scope.time = moment().format('h:mm:ss');
	$scope.date = moment().format('YYYY/MM/DD'); 
	$scope.idSelectedVote = 1;
	
	$http.get('/api/portfolio/sections.json').success(function(response) {
		$scope.sections = response;
	});

	$http.get('/api/portfolio/portfolio-overview.json').success(function(response) {
		$scope.JSONdata = response;
	});

	//$http.get('/api/portfolio/chart-data.json').success(function(response) {
		$scope.chartData = {
			options: {
				chart: {
					type: 'bar'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Hello'
			},
			loading: false
		}
	//});

$http.get('/api/portfolio/market-news.json').success(function(response) {
	$scope.marketNews = response;
});

$http.get('/api/portfolio/portfolio-dialog-buttons.json').success(function(response) {
	$scope.dialogButtons = response;
});

$scope.goToView= function (sectionId) {
	$scope.view = sectionId;
	$scope.idSelectedVote = sectionId;
}
});
