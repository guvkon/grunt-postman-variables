# grunt-postman-variables

> Replace Postman variables in files from .postman_globals and/or .postman_environment file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-postman-variables --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-postman-variables');
```

## The "postman_variables" task

### Overview
In your project's Gruntfile, add a section named `postman_variables` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  postman_variables: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### Options

#### options.globalsPath
Type: `String`
Default value: `'globals.postman_globals'`

Path to Postman globals variables (e.g. `'data/globals.postman_globals'`).

#### options.environmentPath
Type: `String`
Default value: `'environment.postman_environment'`

Path to Postman environment variables (e.g. `'data/prod.postman_environment'`).

#### options.replaceWithPattern
Type: `String`
Default value: `false`

(optional) String pattern which should be used to replace the rest of variables not covered by global and environment variables.
`__variable__` can be used in the pattern to refer to the variable's name.

### Usage Examples

```js
grunt.initConfig({
  postman_variables: {
    options: {
      environmentPath: 'environments/dev.postman_environment',
      replaceWithPattern: '_.getVar("__variable__")'
    },
    files: {
      'dest/some_file.js': ['src/some_file.js'],
      'dest/another_file.js': ['src/another_file.js'],
      'dest/some_directory': ['src/location/*.js']
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History

1.1.0. Added support for writing multiple source files into a directory.


## Credits

This project was initially developed for [ManagingLife](http://www.managinglife.com/).