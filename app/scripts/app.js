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
    'gridster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accounts/accounts-overview.html',
        controller: 'AccountsCtrl'
      });
  });