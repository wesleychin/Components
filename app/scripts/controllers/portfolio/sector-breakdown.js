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

	$http.get('/api/portfolio/sector-breakdown.json').success(function(response) {
		$scope.sectorBreakdownInfo = response;
	});
});		