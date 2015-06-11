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

	$scope.filterPriceTypes = [
	{"priceTypeId" : 2, "priceTypeName" : "Delayed"}
	];

	$scope.filterBidRulingTypes = [
	{"bidRulingTypeId" : 2, "bidRulingTypeName" : "Ruling"}
	];

	$scope.filterAccountList = [
	{"AccountId" : 2222, "AccountName" : "Personal 2"},
	{"AccountId" : 3333, "AccountName" : "Personal 3"},
	{"AccountId" : 4444, "AccountName" : "Personal 4"},
	{"AccountId" : 5555, "AccountName" : "Personal 5"},
	{"AccountId" : 6666, "AccountName" : "Personal 6"},
	{"AccountId" : 7777, "AccountName" : "Personal 7"},
	{"AccountId" : 8888, "AccountName" : "Personal 8"},
	{"AccountId" : 9999, "AccountName" : "Personal 9"},
	{"AccountId" : 1010, "AccountName" : "Personal 10"}
	];

	$scope.filterHeroTile = 'Hero Tile';
	$scope.filterSmallTile = 'Small Tile';
	$scope.dropdownValue = "Completed";

	$http.get('/api/tiles.json').success(function(response) {
		$scope.accountDetails = response;
	});

	$http.get('/api/stickybar.json').success(function(response) {
		$scope.stickybarData = response;
	});

	$scope.getDropdownValue = function() {
		$scope.dropdownValue = $("#dropdown option:selected").text();
	}

	$scope.limitData = function() {
		$scope.accountDetails[1].chartData.series[0].data = [1000,
		2000,
		4000,
		6000,
		3000];

		$scope.accountDetails[1].chartData.xAxis.categories = [ "Jan",
		"Feb",
		"Mar",
		"Apr",
		"May"];
	};

	$scope.resetData = function() {
		$scope.accountDetails[1].chartData.series[0].data = [1000,
		2000,
		4000,
		6000,
		3000,
		9000,
		1000,
		4500,
		12000,
		6000,
		8000,
		31000
		];

		$scope.accountDetails[1].chartData.xAxis.categories = [ "Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
		];
	};
});
