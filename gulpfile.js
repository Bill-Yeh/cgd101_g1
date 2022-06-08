//套件方法的引入
const { src, dest, watch, series, parallel } = require('gulp');



// html package
const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('src/*.html') // 來源
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))// fileinclude function
        .pipe(dest('./dist'));// 目的地
}

exports.html =  includeHTML;

// php move
function includePHP() {
  return src('src/*.php') // 來源
      .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
      }))// fileinclude function
      .pipe(dest('./dist'));// 目的地
}

exports.php =  includePHP;

// js move
function moveJs() {
  return src('src/js/*.js').pipe(dest('dist/js'))
}

//img move
function moveImg() {
  return src('src/images/*.*').pipe(dest('dist/images'))
}

//sound move
function moveSound() {
  return src('src/sound/*.*').pipe(dest('dist/sound'))
}
exports.sound =  moveSound;


const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// sass ->css
function styleSass() {
  return src('./src/sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer({
        cascade: false
    }))  //解決跨瀏覽器
      .pipe(dest('./dist/css'));
}


// 監看
function watchfile() {
  watch(['src/*.html' , 'src/**/*.html'], includeHTML)    // 監看html
  watch(['src/*.php' , 'src/**/*.php'], includePHP)    // 監看php
  watch('js/*.js' , moveJs)  // 監看js
  watch(['src/images/*.*', 'src/images/**/*.*'] , moveImg)  // 監看img
  watch('sound/*.*' , moveSound)  // 監看mp3檔
  watch(['./src/sass/*.scss' ,'./src/sass/**/*.scss'], styleSass) // 監看sass
}

// 瀏覽器同步
const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['src/*.html' , 'src/**/*.html'], includeHTML).on('change' , reload)    // 監看html
    watch(['src/*.php' , 'src/**/*.php'], includePHP).on('change' , reload)    // 監看php
    watch('src/js/*.js' , moveJs).on('change' , reload)  // 監看js
    watch(['src/images/*.*', 'src/images/**/*.*'], moveImg).on('change' , reload)  // 監看 img
    watch('src/sound/*.*' , moveSound).on('change' , reload)  // 監看sound
    watch(['./src/sass/*.scss' ,'./src/sass/**/*.scss'], styleSass).on('change' , reload) // 監看sass
    done();
}


// 監看
exports.w =  series(parallel(moveJs,moveImg,includeHTML,styleSass,moveSound,includePHP), watchfile)  

//瀏覽器同步
exports.default =  series(parallel(moveJs,includeHTML,styleSass,moveImg,moveSound,includePHP), browser)  









