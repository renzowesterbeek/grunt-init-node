module.exports = function(grunt){

	grunt.initConfig({
		// Metadata
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author_name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

		// Task configuration
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '*.js',
        dest: 'dist/'
      }
    },
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      source: {
        src: ['*.js']
      },
      dist: {
        src: ['dist/*.js']
      }
    },
		watch: {
	    js: {
	      files: ['*.js'],
	      tasks: ['jshint:source'],
	    },
	  } // end of task config

	}); // end of grunt.initConfig

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Tasks
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('deploy', ['jshint', 'uglify']);

};
