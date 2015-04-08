'use strict';

describe( 'Directive: blurBackground', function() {

    // load the directive's module
    beforeEach( module( 'sbNigApp' ) );

    var element, scope, expectedModifiedHtml;

    beforeEach( inject( function( $rootScope, $compile ) {

        expectedModifiedHtml = '<div class="blur-placeholder"><span>Blur test</span></div><div class="Appcontainer"><span>Blur test</span></div>';
        scope = $rootScope.$new();
        element = angular.element( '<div blur-background><div class="blur-placeholder"></div><div class="Appcontainer"><span>Blur test</span></div></div>' );
        element = $compile( element )( scope );
        element.scope().$apply();
        angular.element( document.body ).append( element );
    } ) );

    it( 'should set html if fromState is MainView.Dashboard and toState is other than MainView.Accounts.AccountTransactions', inject( function() {
        var toState = {},
            fromState = {};
        toState.name = 'MainView.test';
        fromState.name = 'MainView.Dashboard';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).toEqual( expectedModifiedHtml );

    } ) );

    it( 'should set html if fromState is MainView.Accounts.AccountTransactions and toState is other than MainView.Dashboard', inject( function() {
        var toState = {},
            fromState = {};
        toState.name = 'MainView.test';
        fromState.name = 'MainView.Accounts.AccountTransactions';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).toEqual( expectedModifiedHtml );

    } ) );

    it( 'should clear html if toState is MainView.Dashboard', inject( function() {
        var toState = {},
            fromState = {};
        toState.name = 'MainView.Dashboard';
        fromState.name = 'MainView.test';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).not.toEqual( expectedModifiedHtml );

    } ) );

    it( 'should clear html if toState is MainView.Accounts.AccountTransactions', inject( function() {
        var toState = {},
            fromState = {};
        toState.name = 'MainView.Accounts.AccountTransactions';
        fromState.name = 'MainView.test';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).not.toEqual( expectedModifiedHtml );

    } ) );

    it( 'should clear html if state change is between Dashboard and Accounts  -Scenario 1', inject( function() {
        var toState = {},
            fromState = {};
        toState.name = 'MainView.Accounts.AccountTransactions';
        fromState.name = 'MainView.Dashboard';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).not.toEqual( expectedModifiedHtml );

    } ) );

    it( 'should clear html if state change is between Dashboard and Accounts  -Scenario 2', inject( function() {
        var toState = {},
            fromState = {};
        fromState.name = 'MainView.Accounts.AccountTransactions';
        toState.name = 'MainView.Dashboard';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).not.toEqual( expectedModifiedHtml );

    } ) );

    it( 'should not change the content of blur-placeholder when toState and fromState are other than Dashboar and accounts - scenario 1', inject( function() {
        var toState = {},
            fromState = {},
            newToState = {};
        fromState.name = 'MainView.Dashboard';
        toState.name = 'MainView.test';
        newToState.name = 'MainView.test1';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).toEqual( expectedModifiedHtml );
        scope.$emit( '$stateChangeStart', newToState, 'newToParams', toState );
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', newToState, 'newToParams', toState );
        expect( element.html() ).toEqual( expectedModifiedHtml );

    } ) );

    it( 'should not change the content of blur-placeholder when toState and fromState are other than Dashboar and accounts - scenario 2', inject( function() {
        var toState = {},
            fromState = {},
            newToState = {};
        fromState.name = 'MainView.Accounts.AccountTransactions';
        toState.name = 'MainView.test';
        newToState.name = 'MainView.test1';
        spyOn( scope, '$emit' ).and.callThrough();
        scope.$emit( '$stateChangeStart', toState, 'toParams', fromState );
        scope.$digest();
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', toState, 'toParams', fromState );
        expect( element.html() ).toEqual( expectedModifiedHtml );
        scope.$emit( '$stateChangeStart', newToState, 'newToParams', toState );
        expect( scope.$emit ).toHaveBeenCalledWith( '$stateChangeStart', newToState, 'newToParams', toState );
        expect( element.html() ).toEqual( expectedModifiedHtml );

    } ) );
} );
