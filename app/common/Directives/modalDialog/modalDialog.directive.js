'use strict';

angular.module( 'sbNigApp' )
    .directive( 'modalDialog', function() {
        return {
            restrict: 'EA',
            scope: {
                show: '=',
                mobile: '=',
                dialogTitle: '@',
                onClose: '&?',
                size: '@',
                ignoreMaskClick: '@'
            },
            replace: true,
            transclude: true,
            link: function( scope ) {

                scope.hideModal = function() {
                    if ( !scope.ignoreMaskClick ) {
                        scope.show = false;
                    }
                };
                scope.$watch( 'show', function( newVal, oldVal ) {
                    if ( newVal && !oldVal ) {
                        document.getElementsByTagName( 'body' )[ 0 ].style.overflow = 'hidden';
                    } else {
                        document.getElementsByTagName( 'body' )[ 0 ].style.overflow = '';
                    }
                    if ( ( !newVal && oldVal ) && ( scope.onClose !== null ) ) {
                        return scope.onClose();
                    }
                } );

            },

            templateUrl: 'app/Common/Directives/modalDialog/modalDialog.html'
        };
    } );
