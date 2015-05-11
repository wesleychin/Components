'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http, $timeout, $filter) {
	$scope.view = 1;
	$scope.time = moment().format('h:mm:ss');
	$scope.date = moment().format('YYYY/MM/DD'); 
	$scope.idSelectedVote = 1;
	$scope.downloadOptions = [ 'pdf', 'xls', 'csv'];
	$scope.streamingButtonActive = true;

	$http.get('/api/accounts/cash-summary.json').success(function(response) {
		$scope.cashSummaryComponent = response;
	});

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
		var data = response;

		var obj = data.sort(function(a, b){ return a.gain < b.gain; });

		$scope.performers = [];

		for (var o in obj) {
			$scope.performers.push(obj[o])
		}

		var sortedPerformers = response.sort(function(a,b) { return parseFloat(a.amount) - parseFloat(b.amount) } );
		
		$scope.top5performers = sortedPerformers.reverse().slice(0,5);
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

	$http.get('/api/accounts/breadcrumb.json').success(function(response) {
		$scope.breadcrumbComponent = response;
		var accounts =response.ostModel.accounts;
		$scope.selectedAccount = accounts[0].AccountId;
	});

	$scope.setSelectedAccount = function(accountId) {
    	$scope.selectedAccount = accountId;
  	};
});