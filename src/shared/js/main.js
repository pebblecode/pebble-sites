/*global $:true, console:true, Handlebars:true, JST:true*/
$(document).ready(function(){

  $( '.homepage-head' ).height( $( window ).height() -220 );

  $('.nav-btn').click( function() {
    $('.site-header').toggleClass('expanded');
    console.log('nav-clicked');
  });

  $( window ).resize(function(event) {
    if ( $(window).width() > 600 ) {
      $('.site-header').removeClass('expanded');
    }

    $( '.homepage-head' ).height( $( window ).height() -220 );
  });

  $( window ).scroll( function() {
    $( '.homepage-head' ).css( 'background-position', '0 ' + ($( window ).scrollTop() - 60) + 'px');
  });

  // people page layout
  var squareSide = ( $( window ).width() -15 ) / 6;

  $( '.people' ).height( squareSide * 4 + 60 );
  $( '.horizontal, .small-square' ).height( squareSide );
  $( '.vertical, .large-square' ).height( squareSide * 2 );

  function peopleGrid ( person, x, y ) {
    $( '.person-' + person ).css({
      top: squareSide * x,
      left: squareSide * y  
    });
  }

  peopleGrid( 1 , 0, 0 );
  peopleGrid( 2 , 0, 1 );
  peopleGrid( 3 , 0, 3 );
  peopleGrid( 4 , 0, 4 );
  peopleGrid( 5 , 0, 5 );
  peopleGrid( 6 , 2, 0 );
  peopleGrid( 7 , 1, 1 );
  peopleGrid( 8 , 1, 3 );
  peopleGrid( 9 , 1, 4 );
  peopleGrid( 10 , 3, 0 );
  peopleGrid( 11 , 3, 2 );
  peopleGrid( 12 , 2, 3 );
  peopleGrid( 13 , 2, 4 );

  var colorClasses = ['color-1', 'color-2', 'color-3', 'color-4'];

  $( '.people li' ).each( function() {
    // $( this ).addClass( colorClasses[ Math.random()*colorClasses.size ] );
    $( this ).addClass( colorClasses[ Math.floor(Math.random() * 4) + 0 ] );
  });
  
});