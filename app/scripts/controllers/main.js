'use strict';

/**
 * @ngdoc function
 * @name componentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the componentsApp
 */
 angular.module('componentsApp')
 .controller('MainCtrl', function ($scope, $http) {
 	$scope.filterHeroTile = 'Hero Tile';
 	$scope.filterSmallTile = 'Small Tile';

 	$http.get('/api/tiles.json').success(function(response) {
 		$scope.accountDetails = response;
 	});

 	$http.get('/api/chartData.json').success(function(response) {
 		$scope.chartData = response;
 	});

 	$scope.limitData = function() {
 		$scope.chartData.series[0].data = [1000,
            2000,
            4000,
            6000,
            3000];

        $scope.chartData.xAxis.categories = [ "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May"];
	};

	$scope.resetData = function() {
 		$scope.chartData.series[0].data = [1000,
            2000,
            4000,
            6000,
            3000,
            9000,
            1000,
            4500,
            12000,
            6000,
            8000,
            31000
          ];

        $scope.chartData.xAxis.categories = [ "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
	};
});
