'use strict';

angular.module('componentsApp')
.controller('SectorBreakdownCtrl', function ($scope, $http, $timeout, $filter) {
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
		columns:[  
		{  
			field:"symbol",
			title:" ",
			template: '<span class="right" ng-class="{\'k-icon k-i-arrow-n\': dataItem.symbol == \'increase\', \'k-icon k-i-arrow-s\': dataItem.symbol == \'decrease\', \'k-icon k-i-arrow-e\': dataItem.symbol == \'neutral\'}"></span>'
		},
		{  
			field:"sectorName",
			title:"Sector name",
			template: '<span class="text-blue">#: sectorName# &nbsp;<i class="fa fa-exclamation-circle text-red"></i></span>'
		},
		{  
			field:"cost",
			title:"Cost",
			template: '<span class="right">#: cost#</span>',
		},
		{  
			field:"marketValue",
			title:"Market value",
			template: '<span class="right">#: marketValue#</span>'
		},
		{  
			field:"difference",
			title:"% Difference (Difference)",
			template: '<span class="right">#: difference#</span>'
		},
		{  
			field:"portfolio",
			title:"% of portfolio",
			template: '<span class="right">#: portfolio#</span>'
		}
		]
	}

	$scope.sectorBreakdownChart = {
		title: {
			text: "Olympic Medals won by USA"
		},
		legend: {
			visible: false
		},
		seriesDefaults: {
			type: "bar",
			stack: {
				type: "100%"
			}
		},
		series: [{
			name: "Silver Medals",
			data: [19, 25, 21, 26, 28, 31, 35, 60, 31, 34, 32, 24, 40, 38, 29],
			color: "#b8b8b8"
		}, {
			name: "Bronze Medals",
			data: [17, 17, 16, 28, 34, 30, 25, 30, 27, 37, 25, 33, 26, 36, 29],
			color: "#bb6e36"
		}],
		valueAxis: {
			line: {
				visible: false
			},
			minorGridLines: {
				visible: true
			}
		},
		categoryAxis: {
			categories: [1952, 1956, 1960, 1964, 1968, 1972, 1976, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012],
			majorGridLines: {
				visible: false
			}
		},
		tooltip: {
			visible: true,
			template: "#= series.name #: #= value #"
		}
	}
});		