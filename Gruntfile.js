// grunt configuration
module.exports = function ( grunt ) {
  // use strick mode for JS
  'use strict';

  // grunt config options
  grunt.initConfig({
    // read package.json
    pkg: grunt.file.readJSON( 'package.json' ),

    // assemble (static site generator) options
    assemble: {
      // shared options
      options: {
        partials: ['src/shared/templates/partials/*.hbs'],
        layout: ['src/shared/templates/layouts/default.hbs'],
        postprocess: require('pretty'),
        flatten: true
      },

      // generate pebble {code} pages
      codeSite: {
        options: {
          data: ['src/code/data/*.json']
        },
        files: {
          'dist/code/': [ 'src/shared/templates/pages/*.hbs' ]
        }
      },

      // generate pebble.it pages
      itSite: {
        options: {
          data: ['src/it/data/*.json']
        },
        files: {
          'dist/it/': [ 'src/shared/templates/pages/*.hbs' ]
        }
      }
    },

    // clean up old html
    clean: {
      all: ['dist/**/*.html']
    }
  });

  grunt.loadNpmTasks( 'assemble' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.registerTask( 'default', [ 'clean', 'assemble' ] );
};