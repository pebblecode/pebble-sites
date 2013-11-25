/*global $:true, console:true, Handlebars:true, JST:true*/
$(document).ready(function(){

  $( '.homepage-head' ).height( $( window ).height() -60 );

  console.log( $( '.homepage-head h1' ).height() + $( '.homepage-head h2' ).height() );

  $( '.homepage-head' ).css( 'padding-top', 
    ( $( window ).height() - ( $( '.homepage-head h1' ).height() + $( '.homepage-head h2' ).height() ) ) / 2 + 25 + 'px'
  );

  $('.nav-btn').click( function() {
    $('.site-header').toggleClass('expanded');
    console.log('nav-clicked');
  });

  $( window ).resize(function(event) {
    if ( $(window).width() > 600 ) {
      $('.site-header').removeClass('expanded');
    }

    $( '.homepage-head' ).height( $( window ).height() -60 );

    $( '.homepage-head' ).css( 'padding-top', 
      ( $( window ).height() - ( $( '.homepage-head h1' ).height() + $( '.homepage-head h2' ).height() ) ) / 2 + 25 + 'px'
    );

    console.log( $( '.homepage-head h1' ).height() + $( '.homepage-head h2' ).height() );
  });

  $( window ).scroll( function() {
    $( '.homepage-head' ).css( 'background-position', '0 ' + ($( window ).scrollTop() - 60) + 'px');
  });

  function peopleGrid ( person, x, y ) {
    $( '.person-' + person ).css({
      top: squareSide * x,
      left: squareSide * y  
    });
  }

  // if on people page , do the people page stuff.
  if ( $( '.people' ).length > 0 ) {
    var squareSide = ( $( window ).width() -15 ) / 6 ;

    $( '.horizontal, .small-square' ).height( squareSide );
    $( '.vertical, .large-square' ).height( squareSide * 2 );

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

    if ( $('.people li').length > 13 ) {
      $( '.people' ).height( squareSide * 8 + 60 );

      peopleGrid( 14 , 4, 0 );
      peopleGrid( 15 , 4, 1 );
      peopleGrid( 16 , 4, 3 );
      peopleGrid( 17 , 4, 5 );
      peopleGrid( 18 , 5, 0 );
      peopleGrid( 19 , 6, 1 );
      peopleGrid( 20 , 5, 2 );
      peopleGrid( 21 , 5, 4 );
      peopleGrid( 22 , 7, 0 );
      peopleGrid( 23 , 7, 1 );
      peopleGrid( 24 , 7, 3 );
      peopleGrid( 25 , 6, 4 );
      peopleGrid( 26 , 6, 5 );
      peopleGrid( 27 , 7, 5 );
    }
    else {
      $( '.people' ).height( squareSide * 4 + 60 );
    }

    var colorClasses = ['color-1', 'color-2', 'color-3', 'color-4'];

    $( '.people li' ).each( function() {
      $( this ).addClass( colorClasses[ Math.floor(Math.random() * 4) + 0 ] );
    }); 
  }  

  // maps stuff. 
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(51.485672, -0.118554),
      zoom: 15,
      scrollwheel: false,
      disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(51.485672, -0.118554),
      map: map,
      title:"Hello World!"
    });
  }

  if ( $( '#map-canvas' ).length > 0 ) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  // footer interactions
  $( '.contact-link' ).click( function() {
    $( '.site-footer' ).addClass( 'active' );
  });

  $( '.site-header' ).click( function() {
    $( '.site-footer' ).removeClass( 'active' );
  });

});