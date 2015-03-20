'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http) {
	$scope.view = 1;
	$scope.time = moment().format('h:mm:ss');
	$scope.date = moment().format('YYYY/MM/DD'); 
	$scope.idSelectedVote = 1;
	$scope.displayDisclaimer = true;

	$scope.sectorBreakdownGrid = {
		dataSource: {
			type: "json",
			transport: {
				read: "api/portfolio/sector-breakdown.json"
			},
			pageSize: 10
		},
		scrollable: false,
		resizable: true,
		reorderable: true,
		sortable: true,
		pageable: false,
		columns: [{
			field: "symbol",
			title: " "
		},{
			field: "sectorName",
			title: "Sector name"
		},{
			field: "cost",
			title: "Cost"

		},{
			field: "marketValue",
			title: "Market value"
		},{
			field: "difference",
			title: "% Difference (Difference)"
		},{
			field: "portfolio",
			title: "% of portfolio"
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
		tooltip: {
			visible: true,
			format: "{0}%",
			template: "#= series.name #: #= value #"
		},
		chartArea: { margin: 0, padding: 0, height: (screen.height * 0.55), width: (screen.width * 0.57) },
plotArea: { margin: 0, padding: 0, height: (screen.height * 0.55), width: (screen.width * 0.57) }
	}

	$scope.mainGridOptions = {
		dataSource: {
			type: "json",
			transport: {
				read: "api/portfolio/getData.json"
			},
			pageSize: 10
		},
		sortable: true,
		pageable: true,
		columns: [{
			field: "firstName",
			title: "First Name"
		},{
			field: "lastName",
			title: "Last Name"

		},{
			field: "country"
		}]
	};

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


	$http.get('/api/portfolio/sections.json').success(function(response) {
		$scope.sections = response;
	});

	$http.get('/api/portfolio/portfolio-overview.json').success(function(response) {
		$scope.JSONdata = response;
	});

	$scope.goToView= function (sectionId) {
		$scope.view = sectionId;

		displayDisclaimer(sectionId);
		$scope.idSelectedVote = sectionId;
	}

	function displayDisclaimer(sectionId) {
		if (sectionId == 1) {
			$scope.displayDisclaimer = true;
		} else {
			$scope.displayDisclaimer = false;
		}
	}
});
