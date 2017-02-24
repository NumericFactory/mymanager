const elixir = require('laravel-elixir');
// require('laravel-elixir-vue-2');

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
        'app.css',
        '../lib/jquery.niftymodals/dist/jquery.niftymodals.css',
        '../lib/select2/css/select2.css',
    ]);

    mix.scripts([
       '../lib/jquery.niftymodals/dist/jquery.niftymodals.min.js',
       '../lib/select2/js/select2.min.js',
       'main.js',
       '../lib/datetimepicker/js/bootstrap-datetimepicker.js',
       'app-form-elements.js',
       //'vendor/'
       //'my.js',
       //'ajaxsetup.js',
       //'file-upload.js'
   ]);

});
