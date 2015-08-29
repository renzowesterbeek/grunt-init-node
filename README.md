# Renzo's Grunt HTML Template

Grunt template and foundation for general HTML / SCSS / JavaScript projects.

## Usage
1. Create new project folder `mkdir PROJECTNAME`
2. Run template `grunt-init /Volumes/Data/Developer/Templates/HTMLTemplate`
3. Start developing!

## Overview
Used tools: [SASS/SCSS](http://sass-lang.com), [Grunt](http://grunjs.com), [Bootstrap](http://getbootstrap.com)

- All files copied to target project folder are in the `root` folder
- `template.js` is used for defining project-specific values like name and description. Also defines used dependencies. 
- `rename.js` is used to rename files when generating project's file structure
- `Gruntfile.js` is the template's Gruntfile, `root/Gruntfile.js` is a foundation for your project's Gruntfile. 

- Store all non-code files (images, fonts, sounds etc.) in the `assets` folder
- `css/` folder contains source SCSS ([SASS](http://sass-lang.com)) files, files with underscore (`_`) are included in the base css file and won't be compiled to css
	- `_colors.scss` contains color declarations, define all colors here by preference
	- `_mixins.scss` contains functions to support cross-browser integration of transitions, shadows, etc
	- `_fonts.scss` contains font and fontstyle declaration, define all fonts and styles here by preference
- `js/` folder contains all JavaScript files except Gruntfiles. 
- `index.html` uses Bootstrap pulled from a CDN for cleaner dev directories. 