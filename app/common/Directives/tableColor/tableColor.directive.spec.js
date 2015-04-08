'use strict';

describe( 'Directive: tableColor', function() {

    // load the directive's module
    beforeEach( module( 'sbNigApp' ) );

    var element, scope;

    beforeEach( inject( function( $rootScope ) {
        scope = $rootScope.$new();

    } ) );

    it( 'should access value from markup', ( inject( function( $compile ) {
        scope.myVal = '-11';
        var elem = angular.element(
            '<table-color myVal="{{myVal}}"></table-color>' );
        element = $compile( elem )( scope );
        scope.$digest();
        expect( element.attr( 'myVal' ) ).toBe( '-11' );
    } ) ) );

    it( 'should have red color for negative values', ( inject( function( $compile ) {
        scope.myVal = '-11';
        var elem = angular.element(
            '<div table-color my-val="{{myVal}}"></div>' );
        element = $compile( elem )( scope );
        scope.$apply();
        expect( element.css( 'color' ) ).toEqual( 'rgb(204, 0, 51)' );
    } ) ) );

    it( 'should have green color for positive values', ( inject( function( $compile ) {
        scope.myVal = '11';
        var elem = angular.element(
            '<div table-color my-val="{{myVal}}"></div>' );
        element = $compile( elem )( scope );
        scope.$apply();
        expect( element.css( 'color' ) ).toEqual( 'rgb(102, 153, 51)' );
    } ) ) );

} );
