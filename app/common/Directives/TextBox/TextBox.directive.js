'use strict';

angular.module( 'sbNigApp' )
    .directive( 'textBox', function() {
        var directive = {};

        directive.templateUrl = 'app/Common/Directives/TextBox/TextBox.html';
        directive.restrict = 'EA';
        directive.scope = {
            details: '@',
            placeholderText: '@',
            type: '@',
            ngModel: '=',
            inputClass: '@',
            index: '@',
            allowDecimal: '@',
            maxlength: '@',
            decimalUpto: '@'
        };

        directive.compile = function() {

            var linkFunction = function( $scope, element ) {
                $scope.textBoxActive = false;
                $scope.shakeThis = false;
                var isFocus = false;
                var isBlur = false;
                $scope.elemTxtBox = element.find( '.input-type-textbox' );

                $scope.textBoxClick = function() {
                    $scope.elemTxtBox.focus();
                    $scope.textBoxActive = true;
                };

                $scope.txtBoxActive = function() {
                    var passingValues = {};
                    isFocus = true;
                    isBlur = false;
                    passingValues.model = $scope.ngModel;
                    passingValues.index = $scope.index;
                    $scope.textBoxActive = true;
                    $scope.$emit( 'inputIsFocused', passingValues );
                };

                $scope.getTextBoxValue = function() {

                    var passingValues = {};
                    isFocus = false;
                    isBlur = true;
                    passingValues.model = $scope.ngModel;
                    passingValues.index = $scope.index;
                    $scope.$emit( 'inputIsBlured', passingValues );
                    if ( !$scope.ngModel || $scope.ngModel === '' ) {
                        $scope.textBoxActive = false;
                        $scope.shakeThis = true;

                    } else {
                        $scope.textBoxActive = true;
                        $scope.shakeThis = false;
                        angular.element( 'div.form-elem-half-border' ).removeClass( 'isError' );

                    }
                };

                $scope.watchFilterTextBox = function() {
                    $scope.$watch( function( $scope ) {
                        return $scope.ngModel;
                    }, function( newValue ) {
                        if ( newValue === '' && !isFocus ) {
                            $scope.textBoxActive = false;
                        }
                    } );
                };
                if ( element.hasClass( 'filterTextBox' ) ) {
                    $scope.watchFilterTextBox();
                }
                $scope.getTextBoxValue();

            };

            return linkFunction;
        };

        return directive;
    } );
