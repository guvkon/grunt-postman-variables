/*
 * grunt-postman-variables
 * https://github.com/guvkon/grunt-postman-variables
 *
 * Copyright (c) 2017 Konstantin Gusev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporterOutput: ""
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    postman_variables: {
      test: {
        options: {
          globalsPath: 'test/globals.postman_globals',
          environmentPath: 'test/environment.postman_environment'
        },
        files: {
          'tmp': ['test/fixtures/*_variables_test'],
          'tmp/single_variable_test': ['test/fixtures/single_variable_test'],
          'tmp/globals_environment_test': ['test/fixtures/globals_environment_test']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'postman_variables', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
