/*global $:true, console:true, Handlebars:true, JST:true*/

$(document).ready(function(){

$('.nav-btn').click( function() {
  $('.site-header').toggleClass('expanded');
  console.log('nav-clicked');
});

$( window ).resize(function(event) {
  if ( $(window).width() > 600 ) {
    $('.site-header').removeClass('expanded');
  }
});

$( window ).scroll( function() {
  $( '.homepage-head' ).css( 'background-position', '0 ' + ( $( window ).scrollTop() - 60) + 'px');
});

});