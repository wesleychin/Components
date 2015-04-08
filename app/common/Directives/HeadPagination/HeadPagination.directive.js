'use strict';

angular.module('sbNigApp')
    .directive('headPagination', function(Flows, $rootScope) {
        var directive = {};

        directive.templateUrl = 'app/Common/Directives/HeadPagination/HeadPagination.html';
        directive.restrict = 'EA';
        directive.scope = {
            mainTitle: '@',
            subTitle: '@',
            iconType: '@',
            iconRequired: '@',
            onclickFunction: '&',
            totalInnerpages: '@',
            flowName: '@',
            currentIndex: '@',
            arrowClick: '&',
            showHead: '&',
            showBack: '@',
            closeModText: '@',
            closeModButtonText: '@'
        };

        directive.compile = function() {

            var linkfunction = function(scope) {
                var dummy = [];
                scope.showBullets = false;
                if (scope.currentIndex >= 0) {
                    scope.showBullets = true;
                }
                scope.$watch('currentIndex', function(newValue, oldValue) {
                    if (oldValue !== newValue) {
                        scope.thisStateIndex = newValue;
                        if (scope.currentIndex >= 0) {
                            scope.showBullets = true;
                        } else {
                            scope.showBullets = false;
                        }
                    }
                });

                scope.renderingArray = Flows.flows[scope.flowName];
                scope.thisStateIndex = scope.currentIndex;

                scope.$watch('flowName', function() {
                    scope.renderingArray = Flows.flows[scope.flowName];
                    if (Flows.flowConfigurations[scope.flowName]) {
                        if (Flows.flowConfigurations[scope.flowName].notificationType) {
                            angular.copy(Flows.flows[scope.flowName], dummy);
                            dummy.splice(Flows.flows[scope.flowName].length - 1, 1);
                            scope.renderingArray = dummy;
                        }
                    }
                });

                scope.backHome = function() {
                    $rootScope.$emit('closeThisCurrentModuleInUse');
                    scope.$broadcast('closeThis');
                };

                scope.expr = function(expr) {
                    return scope.$eval(expr);
                };

            };
            return linkfunction;
        };
        return directive;

    });
