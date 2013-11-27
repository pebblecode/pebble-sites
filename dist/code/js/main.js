/*global $:true, console:true, Handlebars:true, JST:true*/
$(document).ready(function(){

  $( '.homepage-head' ).height( $( window ).height() -60 );


  $( '.homepage-head' ).css( 'padding-top', 
    ( $( window ).height() - ( $( '.homepage-head h1' ).height() + $( '.homepage-head h2' ).height() ) ) / 2 + 25 + 'px'
  );

  $('.nav-btn').click( function() {
    $('.site-header').toggleClass('expanded');

  });

  $( window ).resize(function(event) {
    if ( $(window).width() > 600 ) {
      $('.site-header').removeClass('expanded');
    }

    $( '.homepage-head' ).height( $( window ).height() -60 );

    $( '.homepage-head' ).css( 'padding-top', 
      ( $( window ).height() - ( $( '.homepage-head h1' ).height() + $( '.homepage-head h2' ).height() ) ) / 2 + 25 + 'px'
    );


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

  // sliding contacts
  $( '.find-us-link' ).click( function() {
    $( '.contact-panel' ).addClass( 'active' );
  });

  $( '#map-canvas, .site-header' ).click( function() {
    $( '.contact-panel' ).removeClass( 'active' );
  });

  // people page stuff
  var peopleColumns = 6;
  var colorClasses = ['color-1', 'color-2', 'color-3', 'color-4'];

  function respond () {
    if ( $( window ).width() < 1000 && $( window ).width() > 800 ) {
      peopleColumns = 5;
    }
    else if ( $( window ).width() <= 800 && $( window ).width() > 600 ) {
      peopleColumns = 4;
    }
    else if ( $( window ).width() <= 600 && $( window ).width() > 400 ) {
      peopleColumns = 3;
    }
    else if ( $( window ).width() <= 400 ) {
      peopleColumns = 2;
      $( '.horizontal, .vertical' ).removeClass( 'horizontal vertical' ).addClass( 'small-square' );
    }
  }

  respond();

  peopleSize = function () {
    var unit = Math.floor( $( window ).innerWidth() / peopleColumns );
    $( '.small-square' ).height( unit ).width( unit );
    $( '.large-square' ).height( unit * 2 ).width( unit * 2 );
    $( '.vertical' ).height( unit * 2 ).width( unit );
    $( '.horizontal' ).height( unit ).width( unit * 2 );
  };

  peopleSize();

  $(function(){
    var $container = $( '.people' );
    $container.masonry({
      itemSelector : '.person',
      isResizeBound : false
    });

    $( window ).resize(function(event) {
      $( '.people' ).addClass( 'hide' );
      respond();
      peopleSize();
      $container.masonry();
    });

    $container.masonry( 'on', 'layoutComplete', function() {
      $( '.people' ).removeClass( 'hide' );
    });
  });

  $( '.person' ).each( function() {
    $( this ).addClass( colorClasses[ Math.floor(Math.random() * 4) + 0 ] );
  }); 

});