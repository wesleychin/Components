'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http, $timeout) {
	$scope.view = 1;
	$scope.time = moment().format('h:mm:ss');
	$scope.date = moment().format('YYYY/MM/DD'); 
	$scope.idSelectedVote = 1;

	$http.get('/api/portfolio/portfolio-overview-grid.json').success(function(response) {
		$scope.portfolioOverviewGrid = response;
	});

	$http.get('/api/portfolio/sector-breakdown-chart.json').success(function(response) {
		$scope.sectorBreakdownGrid = response;
	});

	// $http.get('/api/portfolio/portfolio-performance-chart.json').success(function(response) {
	// 	$scope.portfolioPerformanceChart = response;
	// });

	$http.get('/api/portfolio/portfolio-performance.json').success(function (data, status) {
		$scope.chartConfig = {
			chart: {
				type: 'column'
			},
			xAxis: {
				categories: data.categories
			},
			series: [{
				data: data.values
			}],
			legend: {
				enabled: false
			}, 
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			}
		};
	});

	$scope.portfolioPerformanceChart = {
		seriesDefaults: {
			type: "column"
		},
		series: [{
			color: function(data) {
				if (data.value > 0) {
					return "green";
				} else {
					return "red";
				}
			}, 
			gap: 0,
			spacing: 0,
			data: [20,
			-50,
			-40,
			-30,
			40,
			-80,
			10,
			-5,
			60,
			-60,
			70,
			-20]
		}],
		valueAxis: {
			labels: {
				format: "{0}%"
			},
			line: {
				visible: false
			},
			axisCrossingValue: 0, 
			majorGridLines: false
		},
		categoryAxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			line: {
				visible: false
			},
			labels: {
				padding: {top: 200}
			}, 
			majorGridLines: false
		},
		chartArea: { background: "#FFF", margin: 0, padding: 0, height: (screen.height * 0.48), width: (screen.width * 0.50) },
		plotArea: { background: "#FFF", margin: 0, padding: 0, height: (screen.height * 0.48), width: (screen.width * 0.50) }
	}

	$http.get('/api/portfolio/market-news.json').success(function(response) {
		$scope.marketNews = response;
	}); 

	$http.get('/api/portfolio/sections.json').success(function(response) {
		$scope.sections = response;
	});

	$scope.goToView= function (sectionId) {
		$scope.view = sectionId;
		$scope.idSelectedVote = sectionId;
	};
});