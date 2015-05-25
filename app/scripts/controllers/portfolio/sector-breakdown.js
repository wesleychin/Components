'use strict';

angular.module('componentsApp')
.controller('SectorBreakdownCtrl', function ($scope, $http, $timeout, $filter) {
	$scope.chartConfig = {
        options: {
            chart: {
                type: 'bar',
                height: 750
            },
            plotOptions: {
                series: {
                    pointWidth: 40,
                    stacking: 'normal'
                },
                bar: {
                    dataLabels: {
                        enabled: true,
                        align: 'right',
                        color: 'white'
                    }
                }
            },
            tooltip: {
                enabled: false
            }
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Banks', 'Diversified Industrials', 'Exchange Traded Funds', 'Exchange Traded Notes', 'Food Products', 'General Mining', 'Health Care Providers', 'Industrials & Office REITs', 'Investment Services', 'Iron & Steel'],
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            labels: {
                enabled: false
            },
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            stackLabels: {
                formatter: function() {
                    return this.axis.chart.xAxis[0].categories[this.x];
                },
                enabled: true,
                verticalAlign: 'top',
                color: "#333333",
                align: 'left',
                y: -5,
                x: 2
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        series: [{
            name: 'Total',
            data: [
            {y: 87, color: '#F5DFCA'},
            {y: 80, color: '#B0A39A'},
            {y: 90, color: '#899DAB'},
            {y: 92, color: '#5B849E'},
            {y: 75, color: '#46AEBA'},
            {y: 65, color: '#898F92'},
            {y: 40, color: '#7CB6EA'},
            {y: 30, color: '#7791BC'},
            {y: 50, color: '#D1E6F1'},
            {y: 25, color: '#C9F7FF'}
            ]
        }, {
            name: 'Percentage',
            data: [
            {y: 13, color: '#c2ac97'},
            {y: 20, color: '#7d7067'},
            {y: 10, color: '#566a78'},
            {y: 8,  color: '#28516b'},
            {y: 25, color: '#137b87'},
            {y: 35, color: '#565c5f'},
            {y: 60, color: '#4983b7'},
            {y: 70, color: '#445e89'},
            {y: 50, color: '#9eb3be'},
            {y: 75, color: '#96c4d7'}
            ]
        }]
    }

});
