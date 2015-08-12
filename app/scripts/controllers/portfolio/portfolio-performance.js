'use strict';

angular.module('componentsApp')
.controller('PortfolioPerformanceCtrl', function ($scope, $http, $timeout, $filter) {

	$http.get('/api/portfolio/portfolio-performance-years.json').success(function(response) {
		$scope.years = response;
	});

	$scope.portfolioPerformanceChart = {
		options: {
			chart: {
				type: 'column'
			},
			tooltip: {
				enabled: false
			},
			plotOptions: {
				series: {
					pointWidth: 40,
					stacking: 'normal'
				}
			}
		},
		title:{
			text:''
		},
		series: [{
			color: "#7fbf7f",
			negativeColor: "#ffb2b2", 
			data: [20, -50, -40, -30, 40, -80, 10, -5, 60, -60, 70, -20, 30],
			pointPadding: 0,
			groupPadding: 0,
			showInLegend: false,
		}, 
		{
			color: "green",
			negativeColor: "red", 
            data: [80, -50, -60, -70, 60, -20, 90, -95, 40, -40, 30, -80, 70]
        }],
		xAxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Total"],
			lineColor: 'transparent'
		}, 
		yAxis: {
			min: -100,
			max: 100, 
			title:{
				text:''
			}, 
			lineColor: 'transparent', 
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
		}
	}
});		