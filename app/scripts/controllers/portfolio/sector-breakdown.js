'use strict';

angular.module('componentsApp')
.controller('SectorBreakdownCtrl', function ($scope, $http, $timeout, $filter) {
	$scope.chartConfig = {
		options: {
			chart: {
				type: 'bar',
				height: 550
			},
			plotOptions: {
				series: {
					pointWidth: 40,
					stacking: 'normal'
				}
			}
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: ['Banks', 'Diversified Industrials', 'Exchange Traded Funds', 'Exchange Traded Notes', 'Food Products', 'General Mining', 'Health Care Providers', 'Industrials & Office REITs', 'Investment Services', 'Iron & Steel']
		},
		yAxis: {
			min: 0,
			max: 100
		},
		series: [{
			name: 'Total',
			data: [
			{y: 87, color: 'yellow'},
			{y: 80, color: 'brown'},
			{y: 90, color: 'purple'},
			{y: 92, color: 'gold'},
			{y: 75, color: 'pink'},
			{y: 65, color: 'black'},
			{y: 40, color: 'orange'},
			{y: 30, color: 'blue'},
			{y: 50, color: 'green'},
			{y: 25, color: 'red'}
			]
		}, {
			name: 'Percentage',
			data: [
			{y: 13, color: 'red'},
			{y: 20, color: 'green'},
			{y: 10, color: 'blue'},
			{y: 8, color: 'orange'},
			{y: 25, color: 'black'},
			{y: 35, color: 'pink'},
			{y: 60, color: 'gold'},
			{y: 70, color: 'purple'},
			{y: 50, color: 'brown'},
			{y: 75, color: 'yellow'}
			]
		}]
	}
});		