'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http) {
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
		chartArea: { background: "#f4f5f6", margin: 0, padding: 0, height: (screen.height * 0.52), width: (screen.width * 0.54) },
		plotArea: { background: "#f4f5f6", margin: 0, padding: 0, height: (screen.height * 0.52), width: (screen.width * 0.54) }
	}

	// $scope.detailGridOptions = function(dataItem) {
	// 	return {
	// 		dataSource: {
	// 			type: "odata",
	// 			transport: {
	// 				read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
	// 			},
	// 			serverPaging: true,
	// 			serverSorting: true,
	// 			serverFiltering: true,
	// 			pageSize: 5,
	// 			filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
	// 		},
	// 		scrollable: false,
	// 		sortable: true,
	// 		pageable: true,
	// 		columns: [
	// 		{ field: "OrderID", title:"ID", width: "56px" },
	// 		{ field: "ShipCountry", title:"Ship Country", width: "110px" },
	// 		{ field: "ShipAddress", title:"Ship Address" },
	// 		{ field: "ShipName", title: "Ship Name", width: "190px" }
	// 		]
	// 	};
	// };

	$http.get('/api/portfolio/market-news.json').success(function(response) {
	$scope.marketNews = response;
	}); 

	$http.get('/api/portfolio/sections.json').success(function(response) {
		$scope.sections = response;
	});

	$scope.goToView= function (sectionId) {
		$scope.view = sectionId;
		$scope.idSelectedVote = sectionId;
	}
});
