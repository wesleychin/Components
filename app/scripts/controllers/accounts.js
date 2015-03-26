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

	$scope.sectorBreakdownGrid = {
		dataSource:{  
			type:"json",
			transport:{  
				read:{  
					url:"api/portfolio/sector-breakdown.json"
				}
			},
            serverPaging: true,
            serverSorting: true
        },
        sortable: true,
        pageable: false,
        scrollable: false,
        dataBound: function() {
            this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
		columns:[  
		{  
			field:"symbol",
			title:" ",
			template: '<span ng-class="{\'k-icon k-i-arrow-n\': dataItem.symbol == \'increase\', \'k-icon k-i-arrow-s\': dataItem.symbol == \'decrease\', \'k-icon k-i-arrow-e\': dataItem.symbol == \'neutral\'}"></span>'
		},
		{  
			field:"sectorName",
			title:"Sector name"
		},
		{  
			field:"cost",
			title:"Cost"
		},
		{  
			field:"marketValue",
			title:"Market value"
		},
		{  
			field:"difference",
			title:"% Difference (Difference)"
		},
		{  
			field:"portfolio",
			title:"% of portfolio"
		}
		]
	}

	 $scope.detailGridOptions = function(dataItem) {
                return {
                    dataSource: {
                        type:"json",
						transport:{  
							read:{  
								url:"api/portfolio/sector-breakdown-additional-information.json"
							}
						},
                        serverPaging: true,
                        serverSorting: true,
                        serverFiltering: true,
                        filter: { field: "sectorId", operator: "eq", value: dataItem.sectorId }
                    },
                    scrollable: false,
                    sortable: true,
                    pageable: false,
                    columns: [
                    { field: "OrderID", title:"ID", width: "56px" },
                    { field: "ShipCountry", title:"Ship Country", width: "110px" },
                    { field: "ShipAddress", title:"Ship Address" },
                    { field: "ShipName", title: "Ship Name", width: "190px" }
                    ]
                };
            };

	// $http.get('/api/portfolio/portfolio-performance-chart.json').success(function(response) {
	// 	$scope.portfolioPerformanceChart = response;
	// });

	$http.get('/api/portfolio/portfolio-performance.json').success(function (data, status) {
		$scope.chartConfig = {
			chart: {
            type: 'column'
	        },
	        title: {
	            text: 'Column chart with negative values'
	        },
	        xAxis: {
	            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: 'John',
	            data: [5, 3, 4, 7, 2]
	        }, {
	            name: 'Jane',
	            data: [2, -2, -3, 2, 1]
	        }, {
	            name: 'Joe',
	            data: [3, 4, 4, -2, 5]
	        }]
		};
	});

	$scope.portfolioPerformanceChart = {
        options: {
            chart: {
                type: 'column'
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