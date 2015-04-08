/*jshint ignore:start*/
'use strict';

angular.module( 'sbNigApp' )
    .directive( 'blurBackground', function() {
        return {
            restrict: 'EA',
            link: function( scope ) {
                var stateToCopyHtml = [ 'MainView.Dashboard', 'MainView.Accounts.AccountTransactions' ];

                scope.$on( '$stateChangeStart', function( event, toState, toParams, fromState ) {

                    var clonedHtml = '';

                    if ( _.contains( stateToCopyHtml, fromState.name ) && !_.contains( stateToCopyHtml, toState.name ) ) {
                        clonedHtml = angular.element( '.Appcontainer' ).html();
                        angular.element( '.blur-placeholder' ).html( clonedHtml );
                        if ( !Modernizr.cssfilters ) {
                            angular.element( '.blur-placeholder' ).addClass( 'opacity-zero' );
                        }
                    } else if ( _.contains( stateToCopyHtml, toState.name ) ) {
                        angular.element( '.blur-placeholder' ).html( '' );
                    }

                } );
            }
        };
    } );
/*jshint ignore:end*/
