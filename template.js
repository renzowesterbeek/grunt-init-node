'use strict';

// Short project description
exports.description = "A general web app project";

// Longer instructions at start of git-init command
exports.after = 'You should now install project dependencies with _npm ' +
					'install_. After that, you may execute project tasks with _grunt_.';

// Warn on existance of any files in target directory
exports.warnOn = '*'; 
exports.warnOn = 'Gruntfile.js';

// Actual init template
exports.template = function(grunt, init, done) {
  
	init.process({}, [
		init.prompt('name'),
		init.prompt('title'),
		init.prompt('description'),
		init.prompt('version'),
		init.prompt('licenses', 'MIT'),
		init.prompt('author_name', 'Renzo Westerbeek'),
    init.prompt('author_email', 'renzowesterbeek@gmail.com'),
    init.prompt('author_url', 'http://renzo.westerbeek.us')
	], function(err, props) {
		var files = init.filesToCopy(props);
		
		init.addLicenseFiles(files, props.licenses);
		
		init.copyAndProcess(files, props);
		
		// Grunt init doesn't copy empty dirs, do it here
		grunt.file.mkdir('assets/img');
		
		// Write package.json file
		init.writePackageJSON('package.json', {
			name: props.name,
			description: props.description,
			version: props.version,
			devDependencies: {
        'grunt-contrib-concat': '~0.3.0',
        'grunt-contrib-uglify': '~0.2.0',
				'grunt-contrib-jshint': '~0.10.0',
        'grunt-contrib-sass': '~0.9.0',
        'grunt-contrib-watch': '~0.4.0',
        'grunt-contrib-htmlmin': '~0.4.0',
        'grunt-contrib-copy': '~0.7.0',
        'grunt-contrib-clean': '~0.4.0',
        'grunt-ftp-deploy': '~0.1.0',
			},
		});
		
		// Done!
		done();
	});
};