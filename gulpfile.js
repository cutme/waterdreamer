var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    jshint       = require('gulp-jshint'),
    compass      = require('compass-importer'),
    concat       = require('gulp-concat'),
    gulpFilter   = require('gulp-filter'),
    bowerFiles   = require('gulp-main-bower-files'),
    htmlhint     = require("gulp-htmlhint"),
    sass         = require('gulp-sass'),
    sassGlob     = require('gulp-sass-glob'),
    cssmin       = require('gulp-cssmin'),
    uglify       = require('gulp-uglify'),
    notify       = require("gulp-notify"),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    watch        = require('gulp-watch'),
    newer        = require('gulp-newer'),
    manifest     = require('gulp-manifest'),
    merge        = require('merge-stream'),
    fileinclude  = require('gulp-file-include'),
    spritesmith  = require('gulp.spritesmith'),
    autoprefixer = require('gulp-autoprefixer'),
    gcmq         = require('gulp-group-css-media-queries'),
    livereload   = require('gulp-livereload'),
    browserSync  = require('browser-sync').create();

var config = {
  src: {
    root: 'src',
    images: 'src/images/**/*.{jpg,png,gif,svg}',
    js: [
      'src/js/*/*.js',
    ],
    scss: 'src/scss/main.scss',
    html: 'src/index.html',
    fonts: 'src/fonts/**/*',
  },
  dist: {
    root: 'web',
    images: 'web/images',
    js: 'web/js',
    css: 'web/css',
    html: 'web',
    fonts: 'web/fonts',
  }
}


gulp.task('default', ['watch']);

gulp.task('jshint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('web/js/'))
        .pipe(browserSync.stream());
});

gulp.task('bower', function() {
	var jsFilter = gulpFilter('**/*.js', {restore: true})
	var cssFilter = gulpFilter('**/*.css', {restore: true})

    return gulp.src('./bower.json')
    	.pipe(bowerFiles())
    	.pipe(jsFilter)
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dist.js))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(config.dist.css))
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/sprites/*.png').pipe(spritesmith({
        imgName     : 'sprites.png',
        cssName     : '_sprites.scss',
        cssTemplate : 'sprites.css.handlebars',
        padding     : 2,
        algorithm   : 'top-down'
    }));
    
    var imagesStream = spriteData.img.pipe(gulp.dest('src/images/'));
    var cssStream = spriteData.css.pipe(gulp.dest('src/sass/tools/'));

    return merge(imagesStream, cssStream);
});

gulp.task('sass', function()
{
    return gulp.src('src/sass/**/*.scss')
      .pipe(sassGlob())
      .pipe(sass({ importer: compass }).on('error', notify.onError(function (error) { return sass.logError })))
      .pipe(autoprefixer({
        browsers: ['last 5 versions', 'safari 5', 'ie 8' ,'ie 9', 'ie 10', 'ie 11', 'opera 12.1', 'ios 6', 'ios 7', 'Android >= 2.1'],
            cascade: false,
            add: true,
            remove: false
        }))
      .pipe(gcmq())
      .pipe(cssmin())
      .pipe(gulp.dest('web/css/'))
      .pipe(browserSync.stream());

});

gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(newer('web/images'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('web/images'));
});

gulp.task('manifest', function(){
    gulp.src(['web/**/*'], { base: './web' })
        .pipe(manifest({
            hash: true,
            preferOnline: true,
            network: ['*'],
            filename: 'app.manifest',
            exclude: 'app.manifest'
        }))
        .pipe(gulp.dest('web'));
});

gulp.task('fileinclude', function() {
    gulp.src(['src/*.html'])
        .pipe(fileinclude({
            prefix: '<!--@',
            suffix: '-->',
            basepath: '@file'
        }))
        .pipe(gulp.dest('web/'))
        .pipe(livereload())
        .pipe(browserSync.stream());
});

gulp.task('htmlhint', function () {
  return gulp.src([
    '*.html'
  ]).pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter({ suppress: true }));
});


gulp.task('watch', function() {
    livereload.listen();
    
    browserSync.init({
	server: {
		baseDir: './web'
		}
	})
  
    gulp.watch('src/js/**/*.js', ['jshint']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/fonts/**/*');
    gulp.watch('src/**/*.html', ['fileinclude', 'htmlhint']);
    
});