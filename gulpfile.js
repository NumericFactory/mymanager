const elixir = require('laravel-elixir');
// require('laravel-elixir-vue-2');
elixir.extend('sourcemaps', false);

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

/*elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js');*/

/*elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js');
});*/

elixir(function(mix) {


    mix.styles([
        //'oldapp.css',
        'styleamarettimin.css',
        'app.css',
        '../lib/jquery.niftymodals/dist/jquery.niftymodals.css',
        '../lib/select2/css/select2.css',
        '../lib/jquery.gritter/css/jquery.gritter.css',

    ]);

    mix.scripts([
       'utilities.js',
       '../lib/jquery.niftymodals/dist/jquery.niftymodals.min.js',
       '../lib/jquery.gritter/js/jquery.gritter.js',
       'main.js',
       'customer.js',
       'perso.js'
       //'vendor/'
       //'my.js',
       //'ajaxsetup.js',
       //'file-upload.js'
   ]);

    mix.version('css/all.css', 'public');
    mix.version('js/all.js', 'public');

});
