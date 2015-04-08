'use strict';

describe( 'Directive: HeadPagination', function() {

    // load the directive's module and view
    beforeEach( module( 'sbNigApp' ) );
    var httpBackend, Flows;
    beforeEach( module( 'app/Common/Directives/HeadPagination/HeadPagination.html' ) );

    var views = [
        'app/Features/Login/Login.html'
    ];

    views.forEach( function( view ) {
        beforeEach( module( view ) );
    } );

    var element, scope;

    beforeEach( inject( function( $rootScope, $compile, $injector ) {

        Flows = {
            goToNextState: function() {

            },
            indexOfState: function() {},
            endFlow: function() {}
        };

        scope = $rootScope.$new();
        httpBackend = $injector.get( '$httpBackend' );
        $rootScope.promises = [];
        httpBackend.expectGET( 'app/Common/Directives/CloseCurrentModule/CloseCurrentModule.html' ).respond( 200 );
        element = angular.element( '<head-pagination></head-pagination>' );
        element = $compile( element )( scope );
        scope.currentIndex = 10;
        scope.$apply();
    } ) );

    it( 'should make hidden element visible', inject( function() {
        expect( element.children().children().hasClass( 'pagination-heading-con' ) ).toBe( true );
    } ) );

} );
