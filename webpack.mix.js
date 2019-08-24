let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
	.autoload({
		"jquery": ['$', 'window.jQuery']
	})
	.sass('resources/assets/sass/app.scss', 'public/css', {
		implementation: require('node-sass')
	});

mix.browserSync({
	files: [
		"public/**/*.*"
	],
	proxy: 'http://localhost:8000'
});
