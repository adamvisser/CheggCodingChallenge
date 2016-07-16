//a lot of this file has been copy/pasted from foundation 6's gulpfile.babel.js
//I am in a rush so a lot of this is all sorts of mess!!!!!!

'use strict';

var plugins = require('gulp-load-plugins');
var browser = require('browser-sync');
var gulp    = require('gulp');
var rimraf  = require('rimraf');
var yaml    = require('js-yaml');
var fs      = require('fs');

//a fix for some stuff i dont want to edit right now...
var PRODUCTION = false;

// Load all Gulp plugins into one variable
const $ = plugins();

// Load settings from settings.yml
var settingsJSON = loadConfig();
const COMPATIBILITY = settingsJSON.COMPATIBILITY;
const PORT = settingsJSON.PORT;
const UNCSS_OPTIONS = settingsJSON.UNCSS_OPTIONS;
const PATHS = settingsJSON.PATHS;

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}


// Build the "dist" folder by running all of the below tasks
gulp.task('build',
 gulp.series(clean, sass, javascript, images, copy, extracss));

gulp.task('dev',
 gulp.series(server, watch));

gulp.task('watch', gulp.series('build', server, watch));
// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series('watch'));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf('public_html', done);
}


// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
function copy() {
  return gulp.src(PATHS.assets)
    .pipe(gulp.dest('public_html/'));
}

function extracss(){
  return gulp.src(PATHS.extracss)
    .pipe(gulp.dest('public_html/css'));
}


// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
  return gulp.src('src/assets/scss/app.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
    .pipe($.if(PRODUCTION, $.cssnano()))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest('public_html/css'))
    .pipe(browser.reload({ stream: true }));
}

// Combine JavaScript into one file
// In production, the file is minified
function javascript() {
  return gulp.src(PATHS.javascript)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('app.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest('public_html/js'));
}

//something is broken here.....
function images() {
  return gulp.src('src/assets/img/**/*')
    .pipe($.if(PRODUCTION, $.imagemin({
      progressive: true
    })))
    .pipe(gulp.dest('public_html/img'));
}

// Start a server with BrowserSync to preview the site in
function server(done) {
  browser.init({
    server: 'public_html', port: PORT
  });
  done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  gulp.watch(PATHS.assets, copy);
  gulp.watch(PATHS.extracss, extracss);
  gulp.watch('src/assets/scss/**/*.scss', sass);
  gulp.watch('src/assets/js/**/*.js', gulp.series(javascript, browser.reload));
  gulp.watch('src/assets/img/**/*', gulp.series(images, browser.reload));
}
