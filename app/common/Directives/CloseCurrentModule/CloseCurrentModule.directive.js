'use strict';

angular.module('sbNigApp')
    .directive('closeCurrentModule', function(Flows, $rootScope, $state) {
        return {
            templateUrl: 'app/Common/Directives/CloseCurrentModule/CloseCurrentModule.html',
            restrict: 'EA',
            scope: {
                closeButtonText: '@',
                closeDetailText: '@'
            },

            link: function(scope) {
                scope.modal = {};

                scope.$on('closeThis', function() {
                    if ($state.current.data) {
                        scope.closeOptionToBeShown = $state.current.data.closeOptionToBeShown;
                        if (scope.closeOptionToBeShown) {
                            scope.modal.showClosethismodule = true;
                        } else {
                            scope.modal.showClosethismodule = false;
                            $rootScope.$broadcast('forceCloseThisModule');
                            Flows.endFlow();
                        }
                    } else if (typeof $state.current.data === 'undefined') {
                        scope.modal.showClosethismodule = true;
                    }

                });

                scope.goBackToCurrentModule = function() {
                    scope.modal.showClosethismodule = false;
                };

                scope.closethisModule = function() {
                    $rootScope.$broadcast('forceCloseThisModule');
                    scope.modal.showClosethismodule = false;
                    Flows.endFlow();
                };

            }
        };
    });
