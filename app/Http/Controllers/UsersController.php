<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

use Illuminate\Support\Facades\Auth;


class UsersController extends Controller
{
	
    
      /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $this->authorize('edit', $user);
        // dd($user->company->addresses->first());
        return view('users.edit', ['title' => 'Mon entreprise', 'countries' => User::$countries, 'iban'=>User::$iban_patterns, 'user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function saveCompanyMoney(Request $request, User $user) {
        $this->authorize('saveCompanyMoney', $user);

        $checkboxmoneyvalue = (bool)$request->checkboxmoney;
        if( $request->checkboxmoney == "true" ) { $activate = 1; }
        else { $activate = 0; }

        $activate = (int)$activate;
        $request->offsetSet('activate', $activate);

        $saveMoneyAction = $user->paymentmethods()->sync
        (
            [ 5 => ['meta'=> null, 'activate'=> $request->activate] ],  
            false 
        );
        // dd($saveMoneyAction);
        if  ( !empty($saveMoneyAction['attached'] )) {
            $response = [
                'status'    =>  'success',
                'message'   =>  'Règlement en espèces activé.',
            ];

        }
        elseif (!empty($saveMoneyAction['updated'])) {
                switch($user->paymentmethods()->where('type', 'money')->withPivot('activate')->get()[0]['pivot']['activate']) {
                    case 0:
                    $response = [
                    'status'    =>  'success',
                    'message'   =>  'Règlement en espèces désactivé.',
                    ];
                    break;
                    case 1:
                    $response = [
                    'status'    =>  'success',
                    'message'   =>  'Règlement en espèces activé.',
                    ];
                    break; 
                }
                    
        }
        else {
            $response = [
                    'status'    =>  'success',
                    'message'   =>  'Règlement en espèces activé.',
                    ];
        }

        /*$user->paymentmethods()->withPivot('meta', 'activate')->get();*/
        if($request->ajax()) {
            return response()->json($response);
        } else {
            \Session::flash('flash', $response['message']);
            return redirect(route('users.edit', Auth::id()));
        }



    }

    public function saveCompanyCheque(Request $request, User $user) {
        $this->authorize('saveCompanyCheque', $user);

        if( $request->activate !=null || $request->activate !=0 ) { $activate = 1; }
        else { $activate = 0; }

        $activate = (int)$activate;
        $request->offsetSet('activate', $activate);

        $saveChequeAction = $user->paymentmethods()->sync
        (
            [ 2 => ['meta'=> null, 'activate'=> $request->activate] ],  
            false 
        );
        // dd($saveChequeAction);
        // Si IBAN crée et sauvegardé en BDD
        if  ( !empty($saveChequeAction['attached'] )) {
            $response = [
                'status'    =>  'success',
                'message'   =>  'Règlement par chèque activé.',
            ];

        }
        // Si ACTIVATE Cheque a été mis à jour en BDD
        elseif (!empty($saveChequeAction['updated'])) {
            if($request->elt) {
                switch($user->paymentmethods()->where('type', 'cheque')->withPivot('activate')->get()[0]['pivot']['activate']) {
                    case 0:
                    $response = [
                    'status'    =>  'success',
                    'message'   =>  'Règlement par chèque désactivé.',
                    ];
                    break;
                    case 1:
                    $response = [
                    'status'    =>  'success',
                    'message'   =>  'Règlement par chèque activé.',
                    ];
                    break; 
                }
                
            } else {
                $response = [
                'status'    =>  'success',
                'message'   =>  'Règlement par chèque activé.',
                ];       
            }      
        }
        elseif (empty($saveChequeAction['updated'])) {
            $response = [
                'status'    =>  'success',
                'message'   =>  'Option règlement par chèque activée'
            ];
        }

        /*$user->paymentmethods()->withPivot('meta', 'activate')->get();*/

        if($request->ajax()) {
            return response()->json($response);
        } else {
            \Session::flash('flash', $response['message']);
            return redirect(route('users.edit', Auth::id()));
        }

    }



    public function saveCompanyPaypal(Request $request, User $user) {
        $this->authorize('saveCompanyPaypal', $user);

        if( $request->activate !=null || $request->activate !=0 ) { $activate = 1; }
        else { $activate = 0; }
        $activate = (int)$activate;
        $request->offsetSet('activate', $activate);
        /*dd($request->paypalemail);*/

        if( empty(trim($request->paypalemail)) ) { 
            $response = [
                'status'    =>  'success',
                'message'   =>  'Email ne peut être vide',
            ];
        }
        else {
            $savePaypalAction = $user->paymentmethods()->sync
            (
                [ 4 => ['meta'=> $request->paypalemail, 'activate'=> $request->activate] ],  
                false 
            );
            // Si réglement par PAYPAL crée et sauvegardé en BDD
            if  ( !empty($savePaypalAction['attached'] )) {
                $response = [
                    'status'    =>  'success',
                    'message'   =>  'Règlement par Paypal activé.',
                ];
            }
            // Sinon si règlement par PAYPAL a été mis à jour en BDD
            elseif (!empty($savePaypalAction['updated'])) {
                if($request->elt) {
                    switch($user->paymentmethods()->where('type', 'paypal')->withPivot('meta','activate')->get()[0]['pivot']['activate']) {
                        case 0:
                        $response = [
                        'status'    =>  'success',
                        'message'   =>  'Option règlement par Paypal désactivée',
                        ];
                        break;
                        case 1:
                        $response = [
                        'status'    =>  'success',
                        'message'   =>  'Option règlement par Paypal activée',
                        ];
                        break; 
                    }
                    
                } else {
                    $response = [
                    'status'    =>  'success',
                    'message'   =>  'Règlement par Paypal activé.',
                    ];       
                }      
            }
            elseif (empty($savePaypalAction['updated'])) {
                /*$response = [
                    'status'    =>  'success',
                    'message'   =>  'Option règlement par Paypal activée.'
                ];*/
            }
            else {}

        }

        /*$user->paymentmethods()->withPivot('meta', 'activate')->get();*/

        if($request->ajax()) {
            return response()->json($response);
        } else {
            \Session::flash('flash', $response['message']);
            return redirect(route('users.edit', Auth::id()));
        }

    }



    public function saveCompanyIban(Request $request, User $user) 
    {
        $this->authorize('saveCompanyIban', $user);
        //dd($request->all());
        //dd($user->paymentmethods()->where('type', 'banktransfer')->withPivot('meta', 'activate')->get()[0]['pivot']['activate']);

        /* 
            ** Modification du champ activate qui doit valoir 0 ou 1 avant enregistrement
            ** Avec la méthode offsetSet() de Laravel
        */
        if( $request->activate !=null || $request->activate !=0 ) { $activate = 1; }
        else { $activate = 0; }

        $activate = (int)$activate;
        $request->offsetSet('activate', $activate);
        // dd($request->all());

        /*
            ** Sauvegarde de l' IBAN et du champ activate dans la table pivot paymentmethod_user
            ** Methode sync(Array of Data, boolean)
        */ 
        $saveIbanAction = $user->paymentmethods()->sync
        (
            [ 1 => ['meta'=> $request->iban, 'activate'=> $request->activate] ],  
            false 
        );

        /*
            ** Réponse de la requête 
            ** en utilisant la réponse de la méthode sync() de Laravel

            ** Si nouvel iban créé en BDD : "Iban Sauvegardé"
            ** Si iban mis à jour : "Iban mis à jour"
            ** Sinon : "Une erreur est survenue durant la mise à jour. Veuillez rééssayer"
        */
        // Si IBAN crée et sauvegardé en BDD
        if  ( !empty($saveIbanAction['attached'] )) {
            $response = [
                'status'    =>  'success',
                'message'   =>  'Votre IBAN est sauvegardé.',
            ];

        }
        // Si IBAN ou ACTIVATE a été mis à jour en BDD
        elseif (!empty($saveIbanAction['updated'])) {
            if($request->elt) {
                switch($user->paymentmethods()->where('type', 'banktransfer')->withPivot('meta', 'activate')->get()[0]['pivot']['activate']) {
                    case 0:
                    $response = [
                    'status'    =>  'success',
                    'message'   =>  'Option règlement par virement désactivée',
                    ];
                    break;
                    case 1:
                    $response = [
                    'status'    =>  'success',
                    'message'   =>  'Option règlement par virement activée',
                    ];
                    break; 
                }
                
            } else {
                $response = [
                'status'    =>  'success',
                'message'   =>  'IBAN mis à jour.',
                ]; 
               
            }
           
        }
        elseif (empty($saveIbanAction['updated'])) {
            $response = [
                'status'    =>  'success',
                'message'   =>  'IBAN valide et sauvegardé.'
            ];
        }
        // Si erreur serveur
        else {
            $response = [
                'status'    =>  'error',
                'message'   =>  'Une erreur est survenue durant la mise à jour. Veuillez rééssayer.'
            ];
        }
        
        /*$user->paymentmethods()->withPivot('meta', 'activate')->get();*/

        if($request->ajax()) {
            return response()->json($response);
        } else {
            \Session::flash('flash', $response['message']);
            return redirect(route('users.edit', Auth::id()));
        }

    } // FIN saveCompanyIban()




    public function saveCompanyDataStepOne(Request $request, User $user) 
    {
        // dd(Auth::viaRemember()); 
        $this->authorize('saveCompanyDataStepOne', $user);
        /* 
        ** Modification du siren avant enregistrement
        ** Avec la méthode offsetSet() de Laravel
        ** (permet de modifier une value à l'intérieur de $request->all() )
        */
        $siren = str_replace(' ', '', $request->siren);
        $siren = (int)$siren;
        $request->offsetSet('siren', $siren);
        /*
        ** Fin modification siren
        */
        
        $this->validate($request, 
            [
                'companyname' => 'required|min:2|max:85',
                'siren' => 'required|digits:9',
                'companytype' => 'required',
                'address' => 'required|min:5|max:255',
                'cp' => 'required|digits:5',
                'city' => 'required|min:2|max:75',
               // 'country' => 'required|max:15'
            ], 
            [
                'companyname.required' => 'Le nom de votre Entreprise est obligatoire', 
                'companytype.required' => 'Choisissez le type de votre entreprise'
            ]

        );

        $company =  [
            'name'        => $request->companyname,
            'companytype' => $request->companytype,
            'siren'       => $request->siren,
            // 'nic'      => $request->nic,
        ];
        $address = [
            'formatted_address' => $request->formatted_address,
            'address'           => $request->address,
            'complementaddress' => $request->complementaddress,
            'cp'                => $request->cp,
            'city'              => $request->city,
            'country'           => $request->country,
            'addresstype'       => 1 // 1 = adresse de facturation / 2 = adresse d'envoi
        ];

        /*
        if ($user->update($request->all())) {
            $response = [
                'status'    =>  'success',
                'message'   =>  'Identité de votre entreprise sauvegardée.',
            ];
        } 
        */
        if($user->company->update($company) && $user->company->addresses->first()->update($address)) 
        {
            $response = [
                'status'    =>  'success',
                'message'   =>  'Identité de votre entreprise sauvegardée.',
            ];
        }
        else 
        {
            $response = [
                'status'    =>  'error',
                'message'   =>  'Une erreur est survenue durant la mise à jour. Veuillez rééssayer.'
            ];
        }

        if($request->ajax()) {
            return response()->json($response);
        } else {
            \Session::flash('flash', $response['message']);
            return redirect(route('users.edit', Auth::id()));
        }

        
    } // Fin saveCompanyDataStepOne

    public function saveCompanyDataStepTwo(Request $request, User $user) 
    {
        //dd($request->all());
        $this->authorize('saveCompanyDataStepTwo', $user);
        /* 
        ** Modification du tel avant enregistrement
        ** Avec la méthode offsetSet() de Laravel
        ** (permet de modifier une value à l'intérieur de $request->all() )
        */
        $tel = str_replace(' ', '', $request->tel);
        $tel = (string)$tel;
        $request->offsetSet('tel', $tel);

        $firstname = preg_replace('/\d/', '', $request->firstname );
        $firstname = trim($firstname);
        $firstname = ucfirst(mb_strtolower($firstname, 'UTF-8'));
        $firstname = (string)$firstname;
        $request->offsetSet('firstname', $firstname);

        $lastname = preg_replace('/\d/', '', $request->lastname );
        $lastname = trim($lastname);
        $lastname = strtoupper($lastname);
        $lastname = (string)$lastname;
        $request->offsetSet('lastname', $lastname);

        /*
        ** Fin modification tel
        */

        $this->validate($request, [
            'civility'  => 'required',
            'firstname' => 'required|min:2|max:85|regex:/^[\pL\s\-]+$/u',
            'lastname'  => 'required|min:2|max:85|regex:/^[\pL\s\-]+$/u',
            'tel'       => 'required|digits:10',
            'email'     => 'required|email',
           // 'country' => 'required|max:15'
        ], 
        [   'tel.required' => 'Numéro de téléphone requis|ex: 06 87 56 00 50', 'civility.required' => 'Choisissez votre civilité.']
        );

        //dd($request->all());

        if ($user->update($request->all())) {
            $response = [
                'status'    =>  'success',
                'message'   =>  'Coordonnées de contact sauvegardées.',
            ];
        } else {
            $response = [
                'status'    =>  'error',
                'message'   =>  'Une erreur est survenue durant la mise à jour. Veuillez rééssayer.'
            ];
        }

        if($request->ajax()) {
            return response()->json($response);
        } else {
            \Session::flash('flash', $response['message']);
            return redirect(route('users.edit', Auth::id()));
        }
   
    } // Fin saveCompanyDataStepTwo

}
