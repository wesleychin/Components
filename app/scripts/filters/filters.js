'use strict';

angular.module( 'componentsApp' )
    .filter( 'DashboardTiles', function() {
        return function( input, filtertype ) {
            console.log("input: ", input, ", filtertype: ", filtertype);
            var filtered = [];
            angular.forEach( input, function( input ) {
                if ( input.isHero && filtertype === 'Hero Tile' ) {
                   filtered.push( input );
                } else if ( !input.isHero && filtertype === 'Small Tile' ) {   
                   filtered.push( input );
                }

            } );
            return filtered;
        };
    });