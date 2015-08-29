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
        src: '<%= concat.js.dest %>',
        dest: 'dist/js/scripts.min.js'
      }
    },
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      source: {
        src: ['js/**/*.js']
      },
      dist: {
        src: ['dist/js/**/*.js']
      }
    },
	  copy: {
		  assets: {
		    src: 'assets/**/*',
		    dest: 'dist/',
		  },
		},
		clean: {
		  dist: {
		    src: ["dist/"]
		  }
		},
		watch: {
	    js: {
	      files: ['js/**/*.js'],
	      tasks: ['jshint:source', 'concat', 'uglify'],
	    },
	    style: {
	      files: ['css/**/*.scss'],
	      tasks: ['sass'],
	    },
	    html: {
	      files: '/**/*.html',
	      tasks: ['htmlmin'],
	    },
	  } // end of task config

	}); // end of grunt.initConfig

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Tasks
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'sass', 'htmlmin', 'copy']);
	grunt.registerTask('deploy', ['clean', 'concat', 'uglify', 'sass', 'htmlmin', 'copy', 'ftp-deploy']);

};
