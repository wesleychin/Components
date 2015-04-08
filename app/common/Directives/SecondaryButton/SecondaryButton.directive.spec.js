'use strict';

describe( 'Directive: SecondaryButton', function() {

    // load the directive's module and view
    beforeEach( module( 'sbNigApp' ) );
    beforeEach( module( 'app/Common/Directives/SecondaryButton/SecondaryButton.html' ) );

    var element, scope;

    beforeEach( inject( function( $rootScope, $compile ) {
        scope = $rootScope.$new();
        element = angular.element( '<secondary-button></secondary-button>' );
        element = $compile( element )( scope );
        scope.$apply();
    } ) );

    it( 'should should compile the directive', function() {
        expect( element.children().hasClass( 'secondary-form-button' ) ).toBe( true );
    } );
} );
