/*global $:true, console:true, Handlebars:true, JST:true*/

function buildTemplate ( template, data, element ) {
  $.getJSON( data, function( json ) {
    $( element ).append( JST[ template ] ( json ) );
  });
}

buildTemplate( 'app/templates/template.hbs', 'data/data.json', '.wrap');