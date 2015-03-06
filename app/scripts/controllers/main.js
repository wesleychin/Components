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
 		//console.log(response);
 		var ob = response;
 		$scope.accountDetails = ob;
 	});
 });
