'use strict';

angular.module( 'componentsApp' )
    .directive( 'secondaryButton', function() {
        return {
            templateUrl: 'common/Directives/SecondaryButton/SecondaryButton.html',
            restrict: 'EA',
            scope: {
                onclickFunction: '&',
                buttonValue: '@',
                iconRequired: '@',
                iconType: '@',
                iconPositionRight: '@'
            },
            link: function( scope ) {
                scope.expr = function( expr ) {
                    return scope.$eval( expr );
                };
            }
        };
    } );
