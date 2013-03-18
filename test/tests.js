(function( $, undefined ) {

    describe( 'Initialization', function() {

        it( 'should add a .colorRange method on jQuery.prototype', function() {

            expect( $.prototype.colorRange ).to.be.a( 'function' );

        });


    });



})( jQuery );
