'use strict';

describe( 'Directive: comboTextBox', function() {

    // load the directive's module and view
    beforeEach( module( 'sbNigApp' ) );
    beforeEach( module( 'app/Common/Directives/comboTextBox/comboTextBox.html' ) );
    var views = [
        'app/Common/Directives/TextBox/TextBox.html'
    ];

    views.forEach( function( view ) {
        beforeEach( module( view ) );
    } );
    var element, scope;

    beforeEach( inject( function( $rootScope ) {
        scope = $rootScope.$new();
    } ) );

    it( 'should make hidden element visible', inject( function( $compile ) {
        element = angular.element( '<combo-text-box></combo-text-box>' );
        element = $compile( element )( scope );
        scope.$apply();
        expect( element.children().hasClass( 'combo-textbox-wrapper' ) ).toBe( true );

    } ) );
} );
