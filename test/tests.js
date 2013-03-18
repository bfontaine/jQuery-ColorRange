(function( $, undefined ) {

    describe( 'Initialization', function() {

        it( 'should add a .colorRange method on jQuery.prototype', function() {

            expect( $.prototype.colorRange ).to.be.a( 'function' );

        });

    });

    describe( '$().colorRange method', function() {

        it( 'should return itself', function () {

            var d = $( '<div/>' );

            expect( d.colorRange() ).to.deep.equal( d );
            expect( d.colorRange({}) ).to.deep.equal( d );

        });

        it( 'should not modify its color '
          + 'if there\'s only one element in the selection', function() {

            var d     = $( '<div/>' ).css( 'background-color', '#fff' ),
                color = d.css( 'background-color' );

            d.colorRange();

            expect( d.css( 'background-color' ) ).to.equal( color );

        });

    });


})( jQuery );
