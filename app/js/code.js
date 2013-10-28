/*global $:true, console:true, Handlebars:true, JST:true*/

buildTemplate( 'app/templates/style-guide.hbs', 'data/code-styles.json', '.wrap');

buildTemplate( 'app/templates/header.hbs', 'data/code-header.json', '.site-header');
