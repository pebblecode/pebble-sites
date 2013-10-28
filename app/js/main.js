/*global $:true, console:true, Handlebars:true, JST:true*/

function buildTemplate ( template, data, element ) {
  $.getJSON( data, function( json ) {
    $( element ).append( JST[ template ] ( json ) );
  });
}