/*global $:true, console:true, Handlebars:true, JST:true*/
(function (){
  'use strict';

  $.getJSON( "templates/data.json", function( json ) {

    var postTemplate = JST['app/templates/template.hbs'];
    var html = postTemplate( json );
    
    $('.wrap').append( html );
  });

})();