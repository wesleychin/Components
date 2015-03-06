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
    'mm.foundation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
