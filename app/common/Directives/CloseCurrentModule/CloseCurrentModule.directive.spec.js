'use strict';

describe('Directive: CloseCurrentModule', function() {

    // load the directive's module and view
    beforeEach(module('sbNigApp'));
    beforeEach(module('app/Common/Directives/CloseCurrentModule/CloseCurrentModule.html'));

    var scope, Flows, httpBackend, element;
    var views = [
        'app/Features/Login/Login.html'
    ];

    views.forEach(function(view) {
        beforeEach(module(view));
    });

    beforeEach(inject(function($rootScope, $compile, $injector) {

        Flows = {
            goToNextState: function() {

            },
            indexOfState: function() {

            },
            endFlow: function() {

            }
        };

        scope = $rootScope.$new();
        httpBackend = $injector.get('$httpBackend');
        $rootScope.promises = [];
        httpBackend.expectGET('app/Common/Directives/CloseCurrentModule/CloseCurrentModule.html').respond(200);
        element = angular.element('<close-current-module></close-current-module>');
        element = $compile(element)(scope);
        scope.$apply();
    }));




	/*it('should make hidden element visible',function() {
        expect(element.children().children().children().hasClass('close-this-module-buttons')).toBe(true);
        expect(element.children().children().children().hasClass('close-this-top-info')).toBe(true);
    });

    it('should test if the directive checks the state data and decide to display the popup or not- test 1', inject(function($rootScope, $complie){
    	scope.closeButtonText = 'closeButtonText';
    	scope.closeDetailText = 'closeDetailText';
    	var elem = angular.element(
            "<div close-current-module close-button-text='{{closeButtonText}}' close-detail-text='{{closeDetailText}}'></div>"); //jshint ignore:line       
        element = $compile(elem)(scope);
        scope.$digest();
    	$rootScope.$broadcast('closeThisCurrentModuleInUse');
    }));*/
    /*it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<-close-current-module></-close-current-module>');
      element = $compile(element)(scope);
      scope.$apply();
      expect(element.text()).toBe('this is the CloseCurrentModule directive');
    }));*/
});
