'use strict';

describe( 'Directive: validNumber', function() {

    beforeEach( module( 'sbNigApp' ) );
    var scope, element;
    beforeEach( inject( function( $rootScope ) {
        scope = $rootScope.$new();
        scope.models = {};
    } ) );

    it( 'should take 2 decimal places', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test" decimal-upto="2" allow-negative="false" required/>' +
            '</form>' );
        scope.models.test = 111.1111;
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( 123.1235 );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue ).toBe( '123.12' );
    } ) ) );

    it( 'should allow negative values and take 1 decimal digit', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test" decimal-upto="1" allow-negative="true" required/>' +
            '</form>' );
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( -123.123 );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue ).toBe( '-123.1' );
    } ) ) );

    it( 'should not allow decimals', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test"  allow-decimal="false" />' +
            '</form>' );
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( 123.123 );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue ).toBe( '123' );
    } ) ) );

    it( 'should take any number of decimals', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test" allow-decimal="true" />' +
            '</form>' );
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( -123.123 );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue ).toBe( -123.123 );
    } ) ) );

    it( 'should not allow negative', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test" allow-negative="false" allow-decimal="true" />' +
            '</form>' );
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( '-123.123' );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue ).toBe( '123.123' );
    } ) ) );

    it( 'should return if length is zero', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test" allow-negative="false" allow-decimal="true" />' +
            '</form>' );
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( '' );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue.length ).toBe( 0 );

    } ) ) );

    it( 'should return . if only dot is entered', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test" allow-negative="false" allow-decimal="true" />' +
            '</form>' );
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( '.' );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue.length ).toBe( 1 );
    } ) ) );

    it( 'should return if no number is entered', ( inject( function( $compile ) {
        var elem = angular.element( '<form name="form">' +
            '<input type="text" name="one" valid-number ng-model="models.test" allow-negative="true" allow-decimal="true" />' +
            '</form>' );
        element = $compile( elem )( scope );
        scope.$digest();
        scope.form.one.$setViewValue( '-.' );
        scope.$digest();
        expect( scope.form.one.$valid ).toBe( true );
        expect( scope.form.one.$modelValue.length ).toBe( 2 );
    } ) ) );

} );
