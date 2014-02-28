'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      compass: {
        files: ['app/sass/**/*.scss'],
        tasks: ['compass:dev']
      },
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade:dist']
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'app/sass',
          cssDir: 'css',
          outputStyle: 'expanded'
        }
      },
      dist: {
        options: {
          sassDir: 'app/sass',
          cssDir: 'tmp',
          environment: 'production'
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
    },
    concat: {
      options: {
        banner: '/*! \n' +
          '* stabilized.min.css\n*\n' +
          '* <%= pkg.name %> - v<%= pkg.version %>\n' +
          '* Last Updated: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '* Built by: <%= pkg.author %>\n' +
          '* License: <%= pkg.license %>\n' +
          '*/\n\n',
        stripBanners: true
      },
      dist: {
        files: {
          'css/stabilized.min.css': ['tmp/Stabilized.css']
        }
      }
    },
    clean: {
      dist: ['tmp', 'css']
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Define tasks
  grunt.registerTask('build', [
    'compass:dev',
    'jade:dist'
  ]);

  // Register tasks
  grunt.registerTask('default', ['build']);

  grunt.registerTask('deploy', [
    'build',
    'compass:dist',
    'concat:dist'
  ]);

}