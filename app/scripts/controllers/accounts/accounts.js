'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http, $timeout, $filter) {
	$scope.view = 1;
	$scope.time = moment().format('h:mm:ss');
	$scope.date = moment().format('YYYY/MM/DD'); 
	$scope.idSelectedVote = 1;
	$scope.streamingButtonActive = true;

	$http.get('/api/accounts/account-details.json').success(function(response) {
		$scope.accounts = response;
	});

	$http.get('/api/common/download-options.json').success(function(response) {
		$scope.downloadOptions = response;
	});

	$http.get('/api/common/search-options.json').success(function(response) {
		$scope.searchOptions = response;
	});

	$http.get('/api/portfolio/portfolio-dialog-buttons.json').success(function(response) {
		$scope.buttons = response;
	});

	$http.get('/api/portfolio/sections.json').success(function(response) {
		$scope.sections = response;
	});

	$http.get('/api/portfolio/performers.json').success(function(response) {
		$scope.performers = response;
	});

	$scope.goToView= function (sectionId) {
		$scope.view = sectionId;
		$scope.idSelectedVote = sectionId;
	};

	$scope.toggleStreaming = function () {
		if ($scope.streamingButtonActive === true) {
			$scope.streamingButtonActive = false;
		} else {
			$scope.streamingButtonActive = true;
		}
	};
});