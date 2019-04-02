const { task, src, dest, series, pipe, watch } = require('gulp');
const path = require('path');
let sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const imageOptimization = require('gulp-imagemin');
const iconfont = require('gulp-iconfont');
const debug = require('gulp-debug');
const twigCompiler = require('gulp-twig');
const del = require('del');
const sassLinter = require('gulp-scss-lint');
const webserver = require('gulp-webserver');
const {argv} = require('yargs');

sass.compiler = require('node-sass');
const runTimestamp = Math.round(Date.now() / 1000);

const config = (() => {
    const src = './src';
    const dest = './dest';
    const node_modules = './node_modules/';
    const twigVariablesPath = path.join(__dirname, src, './twig', 'variables.js');
    const twigOrReact = argv.twigOrReact && ['twig','react'].includes(argv.twigOrReact) ? argv.twigOrReact : 'twig';
    return {
        src: {
            sass: path.join(src, './sass', '/**/main.{sass,scss}'),
            images: path.join(src, './images', '/**/*.{jpg,jpeg,png,gif}'),
            iconfonts: path.join(src, './icons', '/**/*.svg'),
            twig: [
                path.join(src, './twig', '/**/*.twig'),
                '!' + path.join(src, './twig', '/_**/**/*.*'),
            ],
            src,
        },
        dest: {
            css: path.join(dest, './css'),
            images: path.join(dest, '/images'),
            fonts: path.join(dest, '/fonts'),
            anotherFiles: path.join(dest, '/*.*'),
            dest
        },
        cleanCSS: {},
        imageOptimization: {},
        iconFont: {
            fontName: 'icons',
            prependUnicode: true,
            formats: ['ttf']
        },
        node_modules,
        node_modulesJoker: '~/',
        twig: {
            data: require(twigVariablesPath) || {},
            twigVariablesPath
        },
        sassLinter: {},
        webserver:{
            open:true,
            livereload:{enable:true},
            fallback: 'index.html',
        },
        twigOrReact
    }
})();

task('sass', () => {
    return src(config.src.sass)
        .pipe(replace(config.node_modulesJoker, config.node_modules))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS((config.cleanCSS || {})))
        .pipe(concat('main.css'))
        .pipe(dest(config.dest.css))
});

task('sass:lint', () => {
    return src(config.src.sass)
        .pipe(sassLinter(config.sassLinter))
});

task('images', () => {
    return src(config.src.images)
        .pipe(imageOptimization((config.imageOptimization || {})))
        .pipe(dest(config.dest.images))
});

task('iconfont', () => {
    return src(config.src.iconfonts)
        .pipe(iconfont((config.iconFont || {})))
        .pipe(dest(config.dest.fonts))
});

task('twig', (cb) => {
    return src(config.src.twig)
        .pipe(twigCompiler(config.twig))
        .pipe(dest(config.dest.dest))
});

task('clean', () => {
    return del([
        config.dest.images,
        config.dest.css,
        config.dest.anotherFiles,
    ]);
});

task('webserver',() => {
    return src(config.dest.dest)
           .pipe(webserver((config.webserver || {})))
});

task('watch', (cb) => {
    watch(config.src.twig[0], series(['twig']));
    watch(config.src.sass, series(['sass', 'sass:lint']));
    watch(config.src.images, series(['images']));
    watch(config.src.iconfonts, series(['iconfont']));
    cb();
});

task('bootstrap',series([config.twigOrReact, 'sass', 'images', 'iconfont', 'webserver']));

exports.default = series(['clean', 'bootstrap','watch']);