'use strict';

angular.module('componentsApp')
.controller('SectorBreakdownCtrl', function ($scope, $http, $timeout, $filter) {
	$scope.chartConfig = {
		options: {
			chart: {
				type: 'bar'
			},
			plotOptions: {
				series: {
					stacking: 'normal'
				}
			}
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: ['Banks', 'Diversified Industrials', 'Exchange Traded Funds', 'Food Products', 'General Mining', 'Health Care Providers', 'Industrials & Office REITs', 'Investment Services', 'Iron & Steel']
		},
		yAxis: {
			min: 0,
			max: 100
		},
		series: [{
			name: 'Stuff',
			data: [87, 80, 90, 92, 75, 65, 40, 30, 50, 25]
		}, {
			name: 'Other Stuff',
			data: [13, 20, 10, 8, 25, 35, 60, 70, 50, 75]
		}]
	}
});		