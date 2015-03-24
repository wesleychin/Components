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

	$scope.highchartsNG = {
		options: {
			chart: {
				type: 'column'
			}
		},
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
	}

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
