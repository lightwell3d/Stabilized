'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      compass: {
        files: ['app/sass/**/*.scss'],
        tasks: ['compass:dist']
      },
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade:dist']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'app/sass',
          cssDir: 'css',
          outputStyle: 'compact',
          noLineComments: true
        }
      }
    },
    jade: {
      dist: {
        options: {
          pretty: true
        },
        files: {
          "index.html": "app/index.jade"
        }
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Define tasks
  grunt.registerTask('build', [
    'compass:dist',
    'jade:dist'
  ]);

  // Register tasks
  grunt.registerTask('default', ['build']);

}