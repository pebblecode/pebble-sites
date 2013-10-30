/*global require:true, module:false*/
module.exports = function (grunt) {
  'use strict';

  var port = grunt.option('port') || 7770,
    appBase = "app";

  // For livereload
  function addLivereloadMiddleware(connect, options) {
    var path = require('path'),
      lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
      folderMount = function folderMount(connect, point) {
        return connect['static'](path.resolve(point));
      };

    return [lrSnippet, folderMount(connect, options.base)];
  }

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // load handlebars
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    handlebars: {
      all: {
        files: {
          "app/js/templates.js": ["app/templates/**/*.hbs"]
        }
      }
    },

    connect: {
      livereload: {
        options: {
          hostname: '0.0.0.0',
          port: port,
          base: appBase,
          middleware: addLivereloadMiddleware
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },

        files: {
          'app/css/code-styles.css': 'app/sass/code-styles.scss',
          'app/css/it-styles.css': 'app/sass/it-styles.scss'
        }
      }
    },

    jshint: {
      jshintrc: '.jshintrc',
      gruntfile: {
        src: ['Gruntfile.js']
      },
      data: {
        src: ['app/data/*.json']
      },
      js: {
        src: ['app/js/*.js', 'test/**/*.js', '!app/js/templates.js']
      }
    },

    watch: {
      jshintrc: {
        files: '.jshintrc',
        tasks: ['jshint:jshintrc']
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      scripts: {
        files: ['app/js/*.js', '!app/js/templates.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'app/sass/*.scss',
        tasks: ['sass']
      },
      data: {
        files: '<%= jshint.data.src %>',
        options: {
          livereload: true
        }
      },
      html: {
        files: ['app/*.html', 'app/css/*.css'],
        options: {
          livereload: true
        }
      },
      handlebars: {
        files: ["app/templates/**/*.hbs"],
        tasks: ['handlebars'],
        options: {
          livereload: true
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:' + port
      }
    },

    'gh-pages': {
      options: {
        base: 'app'
      },

      src: ['*.html', 'js/**/*', 'css/**/*', 'img/**/*', '!app/js/templates.js']
    }
  });

  grunt.registerTask('default', ['open', 'connect', 'watch']);
};