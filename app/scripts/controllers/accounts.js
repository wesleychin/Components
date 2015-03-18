'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http, ngDialog) {
	$scope.view = 1;
	// $scope.visible = false;
	
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

	$http.get('/api/portfolio/portfolio-dialog-buttons.json').success(function(response) {
		$scope.dialogButtons = response;
	});

	$scope.goToView= function (sectionId) {
		$scope.view = sectionId;
	}

	$scope.goToOption= function (optionId) {
		console.log(optionId);
	}

	$scope.clickToOpen = function () {
        ngDialog.open({ template: 'views/portfolio/partials/views/portfolio-dialog.html' });
    };

	$scope.time = moment().format('h:mm:ss'); 
});
