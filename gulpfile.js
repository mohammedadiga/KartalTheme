// List dependences
const {src, dest, watch,series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
// const imagemin = require('gulp-imagemin');
// const imagewebp = require('gulp-webp');

// Create Function

// scss
function compilescss(){
    return src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(prefix())
    // .pipe(minify())
    .pipe(dest('dist/css'))
}

// // js
// function jsmin(){
//     return src('src/js/*.js')
//     .pipe(terser())
//     .pipe(dest('dist/js'))
// }

// // images
// function optimizimg(){
//     return src('src/images/*.{jpg,png}')
//     .pipe(imagemin([
//         imagemin.mozjpeg({quality: 80, progressive: true}),
//         imagemin.optipng({ optiminzationLevel: 2}),
//     ]))
//     .pipe(dest('dist/images'))
// }

// // webp images
// function webpImage(){
//     return src('dist/images/*.{jpg,png}')
//     .pipe(imagewebp())
//     .pipe(dest('dist/images'))
// }

// Create watchTask
function watchTask(){
    watch('src/scss/*.scss', compilescss);
    // watch('src/js/*.js', jsmin);
    // watch('src/images/*.{jpg,png}', optimizimg);
    // watch('dist/images/*.{jpg,png}', webpImage);
}

// default gulp
exports.default = series(
    compilescss,
    // jsmin,
    // optimizimg,
    // webpImage,
    watchTask
);