let project_folder = "dist";
let source_folder = "#source";
let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/"
    },
    src: {
        html: [source_folder + "/*.html","!" + source_folder + "/_*.html"],
        css: source_folder + "/blocks/**/*.scss",
        js: source_folder + "/blocks/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf"
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/blocks/**/*.scss",
        js: source_folder + "/blocks/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}


let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browser_sync = require("browser-sync").create(),
    file_include = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    sourcemaps = require("gulp-sourcemaps"),
    webp = require("gulp-webp"),
    webpHTML = require("gulp-webp-html"),
    ttf2woff = require("gulp-ttf2woff"),
    ttf2woff2 = require("gulp-ttf2woff2"),
    fonter = require("gulp-fonter"),
    concat = require('gulp-concat');



function browserSync(params) {
    browser_sync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

//html

function html() {
    return src(path.src.html)
        .pipe(file_include())
        .pipe(webpHTML())
        .pipe(dest(path.build.html))
        .pipe(browser_sync.stream())
}

//

//watcher

function watcher(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], img);
}

function clean(params) {
    return del(path.clean);
}

//

//css

function css() {
    return src(path.src.css)
        .pipe(concat('style.scss'))
        .pipe(scss({
            outputStyle: "expanded"
        }))
        .pipe(group_media())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        }))
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browser_sync.stream())
}

//

//js

function js() {
    return src(path.src.js)
        .pipe(concat('script.js'))
        .pipe(sourcemaps.init())
        .pipe(file_include())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js"
            })
         )
        .pipe(sourcemaps.write())
        .pipe(dest(path.build.js))
        .pipe(browser_sync.stream())
}

//

//img

function img() {
    return src(path.src.img)
        .pipe(webp({
            quality: 80
        }))
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(dest(path.build.img))
        .pipe(browser_sync.stream())
}

//

//fonts

function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
}

function fontsOTF() {
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats:['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'));
}
//app
function video() {
    return src('#source/**/*.mp4')
        .pipe(dest('dist'))
        .pipe(browser_sync.stream());
}
//

let build = gulp.series(clean, gulp.parallel(html,css,js,img,fonts,video));
let watch = gulp.parallel(build,watcher,browserSync);

//External task
exports.fontsOTF = fontsOTF;
//
exports.fonts = fonts;
exports.img = img;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
