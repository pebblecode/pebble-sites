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

});