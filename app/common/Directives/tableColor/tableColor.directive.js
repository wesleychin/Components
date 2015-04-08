'use strict';

angular.module( 'sbNigApp' )
    .directive( 'tableColor', function() {
        return {
            scope: {
                myVal: '@'
            },
            link: function( $scope, element, attrs ) {

                if ( attrs.myVal.charAt( 0 ) === '-' ) {
                    element.css( 'color', '#cc0033' );
                } else {
                    element.css( 'color', '#669933' );
                }
            }
        };
    } );
