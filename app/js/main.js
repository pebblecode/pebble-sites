/*global $:true, console:true, Handlebars:true*/
(function (){
  'use strict';


  var post = {
    title: 'working?'
  };

  var postTemplate = JST['app/templates/template.hbs'];

  var html = postTemplate(post);

  $('.wrap').append( html );

})();