'use strict';

angular.module('componentsApp')
.controller('PortfolioOverviewCtrl', function ($scope, $http, $timeout, $filter, $templateCache) 
{$scope.downloadOptions = [ 'pdf', 'xls', 'csv'];
	$http.get('/api/portfolio/portfolio-overview-column-headings.json').success(function(response) {
		var columnData = response;

		$http.get('views/portfolio/partials/views/portfolio-overview-grid-data.html', {
			cache: $templateCache
		}).then(function(result) {
			var template = result.data;
			$scope.portfolioOverviewGrid = {  
				dataSource:{  
					type:"json",
					transport:{  
						read:{  
							url:"api/portfolio/portfolio-overview.json"
						}
					},
					table:null
				},
				scrollable:false,
				resizable:true,
				reorderable:true,
				sortable:true,
				pageable:false,
				columns:columnData,
				rowTemplate: template
			}
		});
	});

	$http.get('/api/portfolio/portfolio-overview.json').success(function(response) {
		$scope.portfolioOverviewInfo = response;
	});
});	
	// $scope.portfolioOverviewGridAdditionalInformation = function(dataItem) {
	// 	$http.get('/api/portfolio/portfolio-overview.json').success(function(response) {
	// 		var single_object = $filter('filter')(response, function (d) {return d.id === dataItem.id;})[0];
	// 		$scope.portfolioOverviewGridMetaData = single_object;
	// 	});
	// }; 

	// $scope.onSelection = function(kendoEvent) {
 //        var grid = kendoEvent.sender;
 //        var selectedData = grid.dataItem(grid.select());
 //        $http.get('/api/portfolio/portfolio-overview.json').success(function(response) {
	// 		var single_object = $filter('filter')(response, function (d) {return d.id === selectedData.id;})[0];
	// 		$scope.portfolioOverviewGridMetaData = single_object;
	// 	});
 //    }	