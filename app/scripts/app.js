'use strict';

/**
 * @ngdoc overview
 * @name componentsApp
 * @description
 * # componentsApp
 *
 * Main module of the application.
 */
angular
  .module('componentsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mm.foundation',
    'highcharts-ng', 
    'gridster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accounts/accounts-overview.html',
        controller: 'AccountsCtrl'
      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });