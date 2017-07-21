/*
 * grunt-postman-variables
 * https://github.com/guvkon/grunt-postman-variables
 *
 * Copyright (c) 2017 Konstantin Gusev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('postman_variables', 'Replace Postman variables in files from .postman_globals and/or .postman_environment file', function() {
    var _ = require('lodash');

    var options = this.options({
      globalsPath: 'globals.postman_globals',
      environmentPath: 'environment.postman_environment'
    });

    // Read globals and environment variables from provided files if exist.
    var globals = {}, environment = {};
    var parseVariablesFile = function (inputValues, output) {
      _.forEach(inputValues, function (valueObj) {
        if (valueObj.enabled) {
          output[valueObj.key] = valueObj.value;
        }
      });
    };
    if (grunt.file.exists(options.globalsPath)) {
      var globalsFile = grunt.file.readJSON(options.globalsPath);
      parseVariablesFile(globalsFile.values, globals);
    }
    if (grunt.file.exists(options.environmentPath)) {
      var environmentFile = grunt.file.readJSON(options.environmentPath);
      parseVariablesFile(environmentFile.values, environment);
    }

    // Main logic
    var replaceContentWithVariables = function (content, variables) {
      _.forEach(variables, function (value, key) {
        var find = '{{' + key + '}}';
        content = content.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), value);
      });
      return content;
    };
    this.files.forEach(function(f) {
      var content = grunt.file.read(f.src);
      content = replaceContentWithVariables(content, environment);
      content = replaceContentWithVariables(content, globals);

      grunt.file.write(f.dest, content);
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
