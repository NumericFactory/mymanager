<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
=======


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//Route::auth();

// Route::get('/', function () {
//     return view('home');
// });

// La route qui suit fait la même chose qu'au dessus
Route::get('/', 'HomeController@index');

// Route::get('/login', function() {
//   return view('login');
// });

// Route::group(['middleware' => ['web']], function () {
Route::group(['middleware' => ['auth']], function () {
  /*
  |--------------------------------------------------------------------------
  | Toutes les routes Admin/
  |--------------------------------------------------------------------------
  */
  // Route::group(['prefix' => 'admin'], function() {
  Route::resource('orders', 'OrdersController');
  Route::resource('invoices', 'InvoicesController');
  Route::resource('customers', 'CustomersController');
  /*Route::resource('users', 'usersController');*/
  
  /*  resources defines following routes:
  | GET|HEAD users               | users.index   | UsersController@index
  | GET|HEAD users/create        | users.create  | UsersController@create
  | POST users                   | users.store   | UsersController@store
  | GET|HEAD users/{users}       | users.show    | UsersController@show
  | GET|HEAD users/{users}/edit  | users.edit    | UsersController@edit
  | PUT users/{users}            | users.update  | UsersController@update
  | PATCH users/{users}          |               | UsersController@update
  | DELETE users/{users}         | users.destroy | UsersController@destroy
  });

  Route::post('uploadplaceimg', 'PicturesController@uploadPlaceImg');
  Route::delete('destroytemporaryplaceimg', 'PicturesController@destroy');
  Route::delete('destroydefinitiveplaceimg', 'PicturesController@deleteDefinitiveImage');
    
  
  /**
   * ROUTE POUR DEFINIR LE CHEMIN DES FICHIERS IMAGES TEMPORAIRES
   * chemin du dossier où on stocke les fichiers temp : /storage/app/temp/xxx.jpg
  */

  Route::get('/pricing', function() {
    return view('pages.pricing');
  })->name('pricing');;



  Route::get('temp/places/{path}/{filename}', function ($path, $filename)
    {
        $path = storage_path() . '/app/temp/'.$path.'/'. $filename;

        if(!File::exists($path)) abort(404);

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    }); //fin route images dans le dossier /storage/app/temp/xxx.jpg

 }); //fin route group


Auth::routes();
