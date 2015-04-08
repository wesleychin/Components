'use strict';

describe( 'Directive: modalDialog', function() {

    // load the directive's module and view
    beforeEach( module( 'sbNigApp' ) );
    beforeEach( module( 'app/Common/Directives/modalDialog/modalDialog.html' ) );

    var element, scope;

    beforeEach( inject( function( $rootScope ) {
        scope = $rootScope.$new();
    } ) );

    it( 'should compile the directive', inject( function( $compile ) {
        element = angular.element( '<modal-dialog></modal-dialog>' );
        element = $compile( element )( scope );
        scope.$apply();
        expect( element.hasClass( 'ng-modal-wrap' ) ).toBe( true );
    } ) );

    it( 'directive should be visible if show is true', inject( function( $compile ) {
        scope.showVal = true;
        element = angular.element( '<modal-dialog show="showVal"></modal-dialog>' );
        element = $compile( element )( scope );
        scope.$apply();
        expect( element.hasClass( 'ng-hide' ) ).toBe( false );
        scope.showVal = false;
        scope.$apply();
        expect( element.hasClass( 'ng-hide' ) ).toBe( true );
        scope.showVal = true;
        scope.$apply();
        expect( element.hasClass( 'ng-hide' ) ).toBe( false );
    } ) );

} );

describe( 'Directive: modal-dialog 2', function() {

    // load the directive's module and view
    beforeEach( module( 'sbNigApp' ) );
    beforeEach( module( 'app/Common/Directives/modalDialog/modalDialog.html' ) );

    var element, scope, bg;

    beforeEach( inject( function( $rootScope, $compile ) {

        scope = $rootScope.$new();
        scope.showVal = true;
        element = angular.element( '<modal-dialog show="showVal"></modal-dialog>' );
        element = $compile( element )( scope );
        scope.$apply();
        bg = element.find( '.ng-modal-bg' );
    } ) );

    it( 'testing hideModal', inject( function() {
        var spyEvent = spyOnEvent( bg, 'click' ); // jshint ignore:line
        bg.trigger( 'click' );
        expect( 'click' ).toHaveBeenTriggeredOn( bg );
        expect( spyEvent ).toHaveBeenTriggered(); // jshint ignore:line
    } ) );
} );
