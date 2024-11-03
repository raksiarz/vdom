const { dest, src, watch } = require('gulp')
const babel = require('gulp-babel')

function build(cb) {
    return src(['src/vdom.js', '!node_modules/**'])
        .pipe(babel())
        .pipe(dest('dist/'))
        .on('end', function() {
            cb()
        })
}

exports.watch = function() {
    watch('src/vdom.js', build)
}
