let project_folder = "dist";
let source_folder = "#src";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: source_folder + "/index.html",
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.{ttf,eot,woff}",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.{ttf,eot,woff}",
    },
    clean: "./" + project_folder + "/"
}

let {src, dest} = require("gulp")
gulp = require("gulp")
browsersync = require("browser-sync").create()
fileinclude = require("gulp-file-include")
del = require("del")
scss = require("gulp-sass")

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(scss({
            outputStyle: "expanded"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function img() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.img], img)
    gulp.watch([path.watch.fonts], fonts)
}

function clean(params) {
    return del(path.clean)
}




let build = gulp.series(clean, gulp.parallel(css, html, img, fonts))
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.scss = scss;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
