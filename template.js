'use strict';

// Short project description
exports.description = "A NodeJS project";

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

		// Write package.json file
		init.writePackageJSON('package.json', {
			name: props.name,
			description: props.description,
			version: props.version,
			devDependencies: {
        'grunt-contrib-uglify': '~0.2.0',
				'grunt-contrib-jshint': '~0.10.0',
        'grunt-contrib-watch': '~0.4.0',
			},
		});

		// Done!
		done();
	});
};
