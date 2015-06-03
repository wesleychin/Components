'use strict';

 angular.module('componentsApp')
 .controller('MainCtrl', function ($scope, $http) {
  $scope.filterHeroTile = 'Hero Tile';
  $scope.filterSmallTile = 'Small Tile';
  $scope.dropdownValue = "Completed";

  $http.get('/api/tiles.json').success(function(response) {
   $scope.accountDetails = response;
 });

  $http.get('/api/stickybar.json').success(function(response) {
   $scope.stickybarData = response;
 });

  $http.get('/api/portfolio/performers.json').success(function(response) {
    var data = response;

    var obj = data.sort(function(a, b){ return a.gain < b.gain; });

    $scope.performers = [];

    for (var o in obj) {
      $scope.performers.push(obj[o])
    }

    var sortedPerformers = response.sort(function(a,b) { return parseFloat(a.amount) - parseFloat(b.amount) } );

    $scope.top5performers = sortedPerformers.reverse().slice(0,5);
  });

  $scope.getDropdownValue = function() {
    $scope.dropdownValue = $("#dropdown option:selected").text();
  }

  $scope.limitData = function() {
   $scope.accountDetails[1].chartData.series[0].data = [1000,
   2000,
   4000,
   6000,
   3000];

   $scope.accountDetails[1].chartData.xAxis.categories = [ "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May"];
 };

 $scope.resetData = function() {
   $scope.accountDetails[1].chartData.series[0].data = [1000,
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

   $scope.accountDetails[1].chartData.xAxis.categories = [ "Jan",
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
