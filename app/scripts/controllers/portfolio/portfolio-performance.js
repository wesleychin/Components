'use strict';

angular.module('componentsApp')
.controller('PortfolioPerformanceCtrl', function ($scope, $http, $timeout, $filter) {

	$http.get('/api/portfolio/portfolio-performance-years.json').success(function(response) {
		$scope.years = response;
	});

	$scope.portfolioPerformanceChart = {
		options: {
			chart: {
				type: 'column'
			},
			tooltip: {
				enabled: false
			}
		},
		title:{
			text:''
		},
		series: [{
			color: "green",
			negativeColor: "red", 
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
			-20],
			pointPadding: 0,
			groupPadding: 0,
			showInLegend: false,
		}],
		xAxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			lineColor: 'transparent'
		}, 
		yAxis: {
			title:{
				text:''
			},
			gridLineWidth: 0,
			minorGridLineWidth: 0, 
			lineColor: 'transparent'
		}
	}

	// $scope.portfolioPerformanceChart = {
	// 	seriesDefaults: {
	// 		type: "column"
	// 	},
	// 	series: [{
	// 		color: function(data) {
	// 			if (data.value > 0) {
	// 				return "green";
	// 			} else {
	// 				return "red";
	// 			}
	// 		}, 
	// 		gap: 0,
	// 		spacing: 0,
	// 		data: [20,
	// 		-50,
	// 		-40,
	// 		-30,
	// 		40,
	// 		-80,
	// 		10,
	// 		-5,
	// 		60,
	// 		-60,
	// 		70,
	// 		-20]
	// 	}],
	// 	valueAxis: {
	// 		labels: {
	// 			format: "{0}%"
	// 		},
	// 		line: {
	// 			visible: false
	// 		},
	// 		axisCrossingValue: 0, 
	// 		majorGridLines: false
	// 	},
	// 	categoryAxis: {
	// 		categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	// 		line: {
	// 			visible: false
	// 		},
	// 		labels: {
	// 			padding: {top: 200}
	// 		}, 
	// 		majorGridLines: false
	// 	},
	// 	chartArea: { background: "#FFF", margin: 0, padding: 0, height: (screen.height * 0.48), width: (screen.width * 0.50) },
	// 	plotArea: { background: "#FFF", margin: 0, padding: 0, height: (screen.height * 0.48), width: (screen.width * 0.50) }
	// }

});		