'use strict';

describe( 'Directive: PrimaryButton', function() {

    // load the directive's module and view
    beforeEach( module( 'sbNigApp' ) );
    beforeEach( module( 'app/Common/Directives/PrimaryButton/PrimaryButton.html' ) );

    var element, scope;

    beforeEach( inject( function( $rootScope, $compile ) {
        scope = $rootScope.$new();
        element = angular.element( '<primary-button></primary-button>' );
        element = $compile( element )( scope );
        scope.$apply();
    } ) );

    it( 'should should compile the directive', function() {
        expect( element.children().hasClass( 'primary-form-button' ) ).toBe( true );
    } );
} );
