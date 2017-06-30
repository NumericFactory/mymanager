<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Customer;
use App\Address;
use App\Contact;

use Illuminate\Support\Facades\Auth;

class CustomersController extends Controller
{
    public $countries = array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $customers = $user->customers()->orderBy('id', 'DESC')->get();

        // $cust = Customer::find(519)->addresses;
        // dd($cust);
        return view('customers.index', [
            'title'=>'Clients', 
            'btntitle'=>'Ajouter un client', 
            'ctrllink'=> 'customers', 
            'actionlink'=>  'create',
            'customers'=>$customers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('customers.create', ['title'=>'Ajouter un Client', 'countries' => $this->countries]);
    }

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
    public function edit($id)
    {
        return view('customers.edit');
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::find($id);
        $customer->delete();
    }

    public function createCustomerDataStepOne(Request $request, Customer $customer) 
    {   
        // Par défaut, créer un Client est autorisé à tout le monde
        // dd($request); dd($customer);
        $user = Auth::user();

        /* 
        ** Modification de: siret, siren, nic, customername et customeroptionnalname avant enregistrement
        ** Avec la méthode offsetSet() de Laravel
        ** (permet de modifier une value à l'intérieur de $request->all() )
        */
        $siret = str_replace(' ', '', $request->siret);
        $siren = substr($siret, 0, 9);
        $nic = substr($siret, 9, 5);
        $nic = sprintf("%05s", $nic);
        $request->offsetSet('siret', $siret);
        $request->offsetSet('siren', $siren);
        $request->offsetSet('nic', $nic);

        $name = trim($request->customername);
        $name = strtoupper($name);
        $name = (string)$name;
        $request->offsetSet('customername', $name);

        $optionnalname = trim($request->customeroptionnalname);
        $optionnalname = strtoupper($optionnalname);
        $optionnalname = (string)$optionnalname;
        $request->offsetSet('customeroptionnalname', $optionnalname);

        /*
        ** VALIDATION
        */
        $this->validate($request, 
            [
                'customername' => 'required|min:2|max:85',
                'siret' => 'required|digits:14',
                'customertype' => 'required'
            ], 
            [
                'customertype.required' => 'Choisissez le type de votre client',
                'customername.required' => 'Le nom de votre client requis',
                'customername.min' => 'Le nom de votre client est requis - entre 2 et 85 caractères',
                'customername.max' => 'Le nom de votre client est requis - entre 2 et 85 caractères'      
            ]
        );
        /* 
        ** Si le client existe alors on update ce client, sinon on le crée (la fonction save())
        ** Les champs customer_id et customer_code sont générés côté JS 
        ** (function saveCustomerPersoData() - /resources/assets/js/customer.js)
        ** On utilise la fonction crypt et decrypt de laravel (https://laravel.com/docs/5.4/encryption)
        */
        if($request->customer_id || $request->customercode) 
        {
            // customerVerify() retourne l'object $customer trouvé en DB, ou false
            $customerexists = $this->customerVerify($request->customer_id, $request->customercode, $user); 
            
            if($customerexists == false ) 
            {
                $response = ['status'=>'success','message'=>'Opération non autorisée.'];
                if($request->ajax()) 
                {
                    return response()->json(['error' => 'Not authorized.'],403);
                } 
                else 
                {
                    \Session::flash('flash', $response['message']);
                    return redirect(route('customers.index'));
                }
            } 
            else 
            {
                $customer = $customerexists;     
            }
        }

        // On forme l'objet $customer à sauvegarder
        $customer->name    = $request->customername;
        $customer->optionnalname = $request->customeroptionnalname;
        $customer->type_id = $request->customertype;
        $customer->siret   = $request->siret;
        $customer->siren   = $request->siren;
        $customer->nic     = $request->nic;

        // On sauvegarde le customer
        if($customer->save() && $user->customers()->syncWithoutDetaching([$customer->id]) )
        {
            //dd($customer->id);
            $response = [
                'customercode' => encrypt($customer->id),
                'customerid'=>  $customer->id,
                'status'    =>  'success',
                'message'   =>  'Identité du client sauvegardée.',
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
            return redirect(route('customers.index'));
        }

    } // FIN function createcustomerDataStepOne




    public function createCustomerDataStepTwo(Request $request, Address $address, Customer $customer) {
        /* 
        ** 1 Si le customer id existe
        ** (Le champ customer_id est généré côté JS)
        ** (function saveCustomerPersoData() - /resources/assets/js/customer.js)
        */
        $user = Auth::user();
        if($request->customer_id && $request->customer_id != 'undefined') 
        { 
            // customerVerify() retourne l'object $customer trouvé en DB, ou false
            $customerexists = $this->customerVerify($request->customer_id, $request->customercode, $user); 
            
            if($customerexists == false ) 
            {
                $response = ['status'=>'success','message'=>'Opération non autorisée.'];
                if($request->ajax()) 
                {
                    return response()->json(['error' => 'Not authorized.'],403);
                } 
                else 
                {
                    \Session::flash('flash', $response['message']);
                    return redirect(route('customers.index'));
                }
            } 
            else 
            {
                //return l'adresse du customer, null if no address in DB, 
                $adressexists = Address::where([
                    'addressable_id'=>$request->customer_id, 
                    'addressable_type'=>'App\Customer',
                    'addresstype' =>1 
                ])  ->first();    
            }


            

            // 1.1 Si l'adresse de facturation du customer existe en DB
            if($adressexists != null) 
            { 
                /*
                ** 1.2 Si cette adresse de facturation appartient à : un customer enregistré qui appartient à l'utilisateur 
                ** alors on update cette adresse
                ** Sinon on renvoie un message d'erreur
                */
                switch($adressexists->addressable->user->first()->id) {
                    case Auth::user()->id:
                        $address = $adressexists;
                    break;
                    default:
                        $response = [
                            'status'    =>  'success',
                            'message'   =>  'Opération non autorisée.',
                        ];
                        if($request->ajax()) {
                            return response()->json(['error' => 'Not authorized.'],403);
                        } else {
                            \Session::flash('flash', $response['message']);
                            return redirect(route('customers.index'));
                        }
                    break;
                }   
            }

            $address->addressable_type  = 'App\Customer';
            $address->addressable_id    = $request->customer_id;
            $address->formatted_address = $request->formatted_address;
            $address->address           = $request->address;
            $address->complementaddress = $request->complementaddress;
            $address->cp                = $request->cp;
            $address->city              = $request->city;
            $address->country           = $request->country;
            $address->addresstype       = 1; // 1 = adresse de facturation / 2 = adresse entreprise
            
            

            if( $address->save() )
            {
                //dd($customer->id);
                $response = [
                    'status'    =>  'success',
                    'message'   =>  'Adresse de facturation client sauvegardée.',
                ];
            }
            else 
            {
                $response = [
                    'status'    =>  'error',
                    'message'   =>  'Une erreur est survenue durant la mise à jour. Veuillez rééssayer.'
                ];
            }



        }
        
        /* 
        **  2 Sinon, le customer id n'existe pas, c'est qu'il y a un problème
        **  On n'enregistre pas l'adresse et on indique à l'utilisateur de réessayer
        */
        else {
            $response = [
                            'status'    =>  'success',
                            'message'   =>  'Opération non autorisée.',
                        ];
                        if($request->ajax()) {
                            return response()->json(['error' => 'Not authorized.'],403);
                        } else {
                            \Session::flash('flash', $response['message']);
                            return redirect(route('customers.index'));
                        }
                        
                    //break;
        }

        if($request->ajax()) { return response()->json($response);} 
        else { \Session::flash('flash', $response['message']); return redirect(route('customers.index'));}

    } // FIN CUSTOMER DATASTEPTWO




    public function createCustomerDataStepThree(Request $request, Contact $contact, Customer $customer) {

        /* 
        ** 1 Si le customer id existe
        ** (Le champ customer_id est généré côté JS)
        ** (function saveCustomerPersoData() - /resources/assets/js/customer.js)
        */
        $user = Auth::user();
        if($request->customer_id && $request->customer_id != 'undefined') 
        { 
            // dd($request->all());
            // customerVerify() retourne l'object $customer trouvé en DB, ou false
            $customerexists = $this->customerVerify($request->customer_id, $request->customercode, $user); 
            
            if($customerexists == false ) 
            {
                $response = ['status'=>'success','message'=>'Opération non autorisée.'];
                if($request->ajax()) 
                {
                    return response()->json(['error' => 'Not authorized.'],403);
                } 
                else 
                {
                    \Session::flash('flash', $response['message']);
                    return redirect(route('customers.index'));
                }
            } 
            else 
            {
                //return le contact du customer, null if no contact in DB, 
                $contactexists = Contact::where([
                    'customer_id'=>$request->customer_id, 
                ])  ->first();    
            }

        }


        /* 
        **  2 Sinon, le customer id n'existe pas, c'est qu'il y a un problème
        **  On n'enregistre pas l'adresse et on indique à l'utilisateur de réessayer
        */
        else 
        {
            $response = [
                            'status'    =>  'success',
                            'message'   =>  'Opération non autorisée.',
                        ];
                        if($request->ajax()) {
                            return response()->json(['error' => 'Not authorized.'],403);
                        } else {
                            \Session::flash('flash', $response['message']);
                            return redirect(route('customers.index'));
                        }
                    break;
        }




        if($request->ajax()) { return response()->json($response);} 
        else { \Session::flash('flash', $response['message']); return redirect(route('customers.index'));}     

    }








    /*
    ** Function customerVerify
    ** Vérifie la correspondance : customer_id / customercode (antihack) et que le customer appartient à l'utilisateur
    ** Retourne l'objet $customer si validation, false sinon
    */
    private function customerVerify($customer_id, $customer_code, $user)  
    {     
        /* 
        ** On vérifie SI l'utilisateur n'a pas moidifié le customer_id (hack ou malveillance)
        ** en comparant le $customer_id au customercode (crypté)
        */
        if($customer_code && trim($customer_id)=='') {
            return false;
        }
        if($customer_id != decrypt($customer_code)) {
            return false;
        }

        // Si le customer existe en DB, appartient-il à l'utilisateur connecté
        $customerexists = Customer::where('id', $customer_id)->first(); // return null if no customer with this id in DB
        if($customerexists != null ) 
        { 
            switch($customerexists->user->first()->id)
            {
                case $user->id: // Ce client existe dans la DB ET appartient bien à l'utilisateur
                    return $customerexists;
                break;

                default: // Ce client existe dans la DB mais n'appartient pas à l'utilisateur
                    return false;
                break;
            }    
        }   
    } // FIN function CustomerVerify



}
