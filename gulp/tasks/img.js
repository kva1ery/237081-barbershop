module.exports = function() {
    $.gulp.task('img', function () {
        return $.gulp.src('src/img/**/*.{png, jpg, gif')
            .pipe($.gp.tingpng('rf0K0zgsTkLFz4NzcYnkSdh0wvDBBHN9')) //API_KEY
            .pipe($.gulp.dest('build/img'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};