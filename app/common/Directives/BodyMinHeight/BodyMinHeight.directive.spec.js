'use strict';

describe('Directive: BodyMinHeight', function() {

    // load the directive's module
    beforeEach(module('sbNigApp'));

    var scope, DeviceDetector;

    beforeEach(inject(function($rootScope, _DeviceDetector_) {
        scope = $rootScope.$new();
        DeviceDetector = _DeviceDetector_;
        spyOn(DeviceDetector, 'getDeviceheight').and.returnValue(300);
    }));

    /*it('should make define min-height of div', inject(function ($compile) {
      element = angular.element('<div body-min-height></div>');
      element = $compile(element)(scope);
      expect(element.css('min-height')).toEqual('64px');
    })); */
});
