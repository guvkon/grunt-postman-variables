'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.postman_variables = {
  setUp: function(done) {
    done();
  },
  single_variable: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/single_variable_test');
    var expected = grunt.file.read('test/expected/single_variable_test');
    test.equal(actual, expected, 'Replace of a single variable occurrence');

    test.done();
  },
  single_variables: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/single_variables_test');
    var expected = grunt.file.read('test/expected/single_variables_test');
    test.equal(actual, expected, 'Replace of multiple occurrences of a variable');

    test.done();
  },
  multiple_variables: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiple_variables_test');
    var expected = grunt.file.read('test/expected/multiple_variables_test');
    test.equal(actual, expected, 'Replace of multiple variables');

    test.done();
  },
  globals_environment: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/globals_environment_test');
    var expected = grunt.file.read('test/expected/globals_environment_test');
    test.equal(actual, expected, 'Check replace priority of environment and globals variables');

    test.done();
  }
};
