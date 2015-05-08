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

	$scope.name = 'World';
    $scope.cars = [{id:1, name: 'Audi'}, {id:2, name: 'BMW'}, {id:1, name: 'Honda'}];
    $scope.selectedCar = [];

    $scope.fruits = [{id: 1, name: 'Apple'}, {id: 2, name: 'Orange'},{id: 3, name: 'Banana'}];
    $scope.selectedFruit = null;
});	