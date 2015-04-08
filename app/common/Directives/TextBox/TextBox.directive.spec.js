'use strict';

describe( 'Directive: TextBox', function() {

    // load the directive's module and view
    beforeEach( module( 'sbNigApp' ) );
    beforeEach( module( 'app/Common/Directives/TextBox/TextBox.html' ) );

    var element, scope, textBoxLable, textBoxInput;

    beforeEach( inject( function( $rootScope, $compile ) {
        scope = $rootScope.$new();
        element = angular.element( '<text-box type=\'text\'></text-box>' );
        element = $compile( element )( scope );
        scope.$apply();
        textBoxLable = element.find( '.form-elem-textbox' );
        textBoxInput = element.find( 'input' );

    } ) );

    it( 'should should compile the directive', function() {
        expect( element.children().hasClass( 'form-elem-textbox' ) ).toBe( true );
    } );

    it( 'should check the status before clicking on text box', function() {
        expect( element.children().children().hasClass( 'textbox-placeholder' ) ).toBe( true );
        expect( element.children().children().hasClass( 'form-elem-half-border' ) ).toBe( true );
    } );

    it( 'should trigger click on textbox Lable', function() {
        var spyEvent = spyOnEvent( textBoxLable, 'click' ); // jshint ignore:line
        textBoxLable.click();
        expect( element.children().children().hasClass( 'textbox-txt-position-active' ) ).toBe( true );
        expect( element.children().children().hasClass( 'form-elem-half-border' ) ).toBe( true );
        expect( 'click' ).toHaveBeenTriggeredOn( textBoxLable );
        expect( spyEvent ).toHaveBeenTriggered(); // jshint ignore:line
    } );
} );
