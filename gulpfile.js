// 引入 gulp及组件
var gulp      = require('gulp'),                 //基础库
    sass      = require('gulp-ruby-sass'),       //sass
    autoprefixer = require('gulp-autoprefixer'), //添加css前缀
    plumber = require('gulp-plumber'),           //自动处理全部错误信息防止因为错误而导致 watch 不正常工作
    //changed = require('gulp-changed'),           //只编译修改过的文件，加快速度
    minifycss = require('gulp-minify-css');      //css压缩

// 样式处理
gulp.task('styles', function() {
    return sass('./src/',{
        style: 'expanded',
        compass:true
    })
    .pipe(plumber())
    //.pipe(changed('src',{extension:'.scss'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifycss({compatibility: 'ie7'}))
    .pipe(gulp.dest('./dist/'));
});


// 默认任务 清空样式; 运行语句 gulp
gulp.task('default', function(){
    gulp.start('styles');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){
    gulp.watch('./src/**/*.scss', function(){
        gulp.run('styles');
    });
});