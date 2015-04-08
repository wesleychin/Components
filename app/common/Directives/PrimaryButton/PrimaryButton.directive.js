'use strict';

angular.module( 'componentsApp' )
    .directive( 'primaryButton', function() {
        return {
            templateUrl: 'common/Directives/PrimaryButton/PrimaryButton.html',
            restrict: 'EA',

            scope: {
                buttonValue: '@',
                iconRequired: '@',
                iconType: '@',
                onclickFunction: '&'
            },
            link: function( scope ) {
                scope.expr = function( expr ) {
                    return scope.$eval( expr );
                };

            }
        };
    } );
