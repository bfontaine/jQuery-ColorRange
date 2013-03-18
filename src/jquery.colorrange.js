;(function( $, ctx, undefined ) {

    // No Pheasant.js :(
    if ( !ctx || typeof ctx.Pheasant !== 'object' ) { return; }

    /**
     * Main function.
     **/
    $.fn.colorrange = $.fn.colorRange = function colorRange( opts ) {

        var len = this.length, colorFrom, colorTo, property, range;

        // If there is no element in the current selection, don't do anything
        if ( len === 0 ) { return this; }

        if ( typeof opts !== 'object' ) { opts = {}; }

        // The CSS property on which the range is made
        property = opts.property || opts.which || 'background-color';

        // The starting/ending colors
        colorFrom = opts.from || this.eq( 0 ).css( property );
        colorTo   = opts.to   || this.eq( -1 ).css( property );

        range = Pheasant.range({

            from: colorFrom,
            to: colorTo,
            length: len,
            format: 'rgba'

        });

        // Range error
        if ( range === null ) { return this; }

        $.each( this, function( i, e ) {

            $( e ).css( property, range[ i ] );

        });

        return this;

    };


})( jQuery, this );
