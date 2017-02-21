const elixir = require('laravel-elixir');

<<<<<<< HEAD
require('laravel-elixir-vue-2');

=======
// require('laravel-elixir-vue-2');
>>>>>>> 834c800531b664a577b74ce0a3d6604a9cba907c
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

<<<<<<< HEAD
elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js');
=======
/*elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js');
});*/

elixir(function(mix) {

    mix.styles([
        'app.css',
        '../lib/jquery.niftymodals/dist/jquery.niftymodals.css',  

    ]);

    mix.scripts([
       '../lib/jquery.niftymodals/dist/jquery.niftymodals.min.js',
       'main.js',
       
      //'vendor/'
       //'my.js',
       //'ajaxsetup.js',
       //'file-upload.js'

   ]);

>>>>>>> 834c800531b664a577b74ce0a3d6604a9cba907c
});
