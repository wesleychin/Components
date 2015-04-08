'use strict';

angular.module('sbNigApp')
    .directive('bodyHeight', function(DeviceDetector) {
        return {

            restrict: 'EA',
            scope: {},
            link: function(scope, element, attr) {
                var heightRequired;

                heightRequired = DeviceDetector.getDeviceheight() - attr.heightOffset;
                if (attr.heightType === 'min-height') {
                    element.css('min-height', heightRequired);
                } else if (attr.heightType === 'max-height') {
                    element.css('max-height', heightRequired);
                }
            }
        };
    });
