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
	'ui.select',
    'ngSanitize',
    'ngTouch',
    'mm.foundation', 
    'kendo.directives', 
    'highcharts-ng', 
    'angularSpinner',
    'ui.multiselect'
  ])
  .config(function ($routeProvider, uiSelectConfig) {
    uiSelectConfig.theme='select2';
	uiSelectConfig.resetSearchInput = true;
	$routeProvider
      .when('/', {
        templateUrl: 'views/accounts/accounts-overview.html',
        controller: 'AccountsCtrl'
      });
  });