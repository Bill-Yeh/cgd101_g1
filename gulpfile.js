const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


function defaultTask(cb) {
    console.log('gulp ok')
    cb();
  }
  
  exports.default = defaultTask

  //搬家 src ==> dest html
  function move(){
      return src('*.html').pipe(dest('dist'))
  }
  exports.m = move

  //js move
  function moveJs(){
      return src('js/*.js').pipe(dest('dist/js'))
  }
  exports.m = moveJs

  //css move
  function moveCss(){
    return src('css/*.css').pipe(dest('dist/css'))
}
exports.m = moveCss

//監看
  function watchfile(){
      watch('*.html',move)  //監看html
      watch('js/*.js',moveJs)  //監看js
      watch('css/*.css',moveCss)  //監看css
  }
  exports.w = watchfile