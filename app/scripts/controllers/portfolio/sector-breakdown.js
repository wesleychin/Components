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
		template: '<span class="text-blue">#: sectorName#</span>'
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

$http.get('/api/portfolio/sector-breakdown.json').success(function(response) {
	$scope.sectorBreakdownInfo = response;
});

$http.get('/api/portfolio/sector-breakdown-additional-information.json').success(function(response) {
	$scope.sectorBreakdownAdditionalInfo = response;
});
});		