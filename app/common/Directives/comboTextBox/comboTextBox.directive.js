'use strict';

angular.module( 'sbNigApp' )
    .directive( 'comboTextBox', function() {
        return {
            templateUrl: 'app/Common/Directives/comboTextBox/comboTextBox.html',
            restrict: 'EA',
            scope: {

                placeholderText: '@',
                type: '@',
                allowDecimal: '@',
                decimalUpto: '@',
                ngModel: '=',
                inputBoxClass: '@',
                focusEvent: '@',
                textBoxClass: '@',

                leftIconType: '@',
                leftIconRequired: '@',
                leftIconClass: '@',
                leftIconNgClass: '@',

                leftLabelValue: '@',
                leftLabelRequired: '@',
                leftLabelClass: '@',
                leftLabelNgClass: '@',
                leftContentOnclick: '@',

                rightIconType: '@',
                rightIconRequired: '@',
                rightIconClass: '@',
                rightIconNgClass: '@',

                rightLabelValue: '@',
                rightLabelRequired: '@',
                rightLabelClass: '@',
                rightLabelNgClass: '@',
                rightContentOnclick: '@'
            },
            link: function( scope ) {
                scope.expr = function( expr ) {

                    return scope.$eval( expr );
                };
            }
        };
    } );
