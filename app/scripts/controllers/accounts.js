'use strict';

angular.module('componentsApp')
.controller('AccountsCtrl', function ($scope, $http) {
	$scope.view = 1;
	$scope.time = moment().format('h:mm:ss');
	$scope.date = moment().format('YYYY/MM/DD'); 
	$scope.idSelectedVote = 1;
	$scope.displayDisclaimer = true;

	$scope.sectorBreakdownChart = {
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
	};

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

	$http.get('/api/portfolio/market-news.json').success(function(response) {
		$scope.marketNews = response;
	});

	$http.get('/api/portfolio/portfolio-dialog-buttons.json').success(function(response) {
		$scope.dialogButtons = response;
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
