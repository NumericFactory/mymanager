<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;
use Closure;
class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
    ];

    public function handle($request, Closure $next){

    	if($request->ajax()) {
    		if($request->input('_token')) {
				if ( \Session::getToken() != $request->input('_token')) {
					$response = [
					'token_mismatch' => true,
                    'status'    =>  'success',
                    'message'   =>  'Votre session a expiré. Vous allez être redirigé(e) vers la page de connexion.',
                    ];
					return response()->json($response);
				}
			}

        }	

		return parent::handle($request, $next);
	} 


}
