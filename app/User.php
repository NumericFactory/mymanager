<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'civility',
        'firstname', 
        'lastname',
        'tel', 
        'mobile', 
        'email', 
        'password',
        'iban'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function company()
    {
        return $this->hasOne('App\Company');
    }

    public function paymentmethods()
    {
        return $this->belongsToMany('App\Paymentmethod')
                    // ->withTimestamps();  
                    ->withPivot('meta', 'activate');
    }
    /**
     * The customers that belong to the user.
    */
    public function customers()
    {
        return $this->belongsToMany('App\Customer');
                        //->withPivot('address_id');
    }
    // Permet d'accéder aux customers avec :
    // $user->customers
    // $user->customers->where('id', '=', $customer->id);

    public function addresses()
    {
        return $this->morphMany('App\Address', 'addressable');
    }
    
    public static $countries = array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
    
    public static $iban_patterns = [
        ['countrycode'=>'DE', 'country'=>'Allemagne', 'length'=>'22', 'exemple'=>'DE89 3704 0044 0532 0130 00'],  
        ['countrycode'=>'AT', 'country'=>'Autriche', 'length'=>'20', 'exemple'=>'AT61 1904 3002 3457 3201'], 
        ['countrycode'=>'BE', 'country'=>'Belgique', 'length'=>'16', 'exemple'=>'BE68 5390 0754 7034'], 
        ['countrycode'=>'BG', 'country'=>'Bulgarie', 'length'=>'22', 'exemple'=>'BG62 UBBS 8002 1079 3545 17'], 
        ['countrycode'=>'CY', 'country'=>'Chypre', 'length'=>'28', 'exemple'=>'CY17 0020 0128 0000 0012 0052 7600'], 
        ['countrycode'=>'DK', 'country'=>'Danemark', 'length'=>'18', 'exemple'=>'DK50 0040 0440 1162 43'], 
        ['countrycode'=>'ES', 'country'=>'Espagne', 'length'=>'24', 'exemple'=>'ES91 2100 0418 4502 0005 1332'], 
        ['countrycode'=>'EE', 'country'=>'Estonie', 'length'=>'20', 'exemple'=>'EE85 2200 2210 2014 6585'], 
        ['countrycode'=>'FI', 'country'=>'Finlande', 'length'=>'18', 'exemple'=>'FI21 1234 5600 0007 85'], 
        ['countrycode'=>'FR', 'country'=>'France', 'length'=>'27', 'exemple'=>'FR14 2004 1010 0505 0001 3M02 606'], 
        ['countrycode'=>'GR', 'country'=>'Grèce', 'length'=>'27', 'exemple'=>'GR16 0110 1250 0000 0001 2300 695'], 
        ['countrycode'=>'HU', 'country'=>'Hongrie', 'length'=>'28', 'exemple'=>'HU42 1177 3016 1111 1018 0000 0000'], 
        ['countrycode'=>'IE', 'country'=>'Irlande', 'length'=>'22', 'exemple'=>'IE29 AIBK 9311 5212 3456 78'], 
        ['countrycode'=>'IS', 'country'=>'Islande', 'length'=>'26', 'exemple'=>'IS14 0159 2600 7654 5510 7303 39'], 
        ['countrycode'=>'IT', 'country'=>'Italie', 'length'=>'27', 'exemple'=>'IT60 X054 2811 1010 0000 0123 456'], 
        ['countrycode'=>'LV', 'country'=>'Lettonie', 'countrycode'=>'21', 'exemple'=>'LV80 BANK 0000 4351 9500 1'], 
        ['countrycode'=>'LI', 'country'=>'Liechtenstein', 'length'=>'21', 'exemple'=>'LI21 0881 0000 2324 013A A'], 
        ['countrycode'=>'LT', 'country'=>'Lituanie', 'length'=>'20', 'exemple'=>'LT12 1000 0111 0100 1000'], 
        ['countrycode'=>'LU', 'country'=>'Luxembourg', 'length'=>'20', 'exemple'=>'LU28 0019 4006 4475 0000'], 
        ['countrycode'=>'MT', 'country'=>'Malte', 'length'=>'31', 'exemple'=>'MT84 MALT 0110 0001 2345 MTLC AST0 01S'], 
        ['countrycode'=>'NO', 'country'=>'Norvège', 'length'=>'15', 'exemple'=>'NO93 8601 1117 947'], 
        ['countrycode'=>'NL', 'country'=>'Pays-Bas', 'length'=>'18', 'exemple'=>'NL91 ABNA 0417 1643 00'], 
        ['countrycode'=>'PL', 'country'=>'Pologne', 'length'=>'28', 'exemple'=>'PL27 1140 2004 0000 3002 0135 5387'], 
        ['countrycode'=>'PT', 'country'=>'Portugal', 'length'=>'25', 'exemple'=>'PT50 0002 0123 1234 5678 9015 4'], 
        ['countrycode'=>'CZ', 'country'=>'République Tchèque ', 'length'=>'24', 'exemple'=>'CZ65 0800 0000 1920 0014 5399'], 
        ['countrycode'=>'RO', 'country'=>'Roumanie', 'length'=>'24', 'exemple'=>'RO49 AAAA 1B31 0075 9384 0000'], 
        ['countrycode'=>'GB', 'country'=>'Royaume-Uni', 'length'=>'22', 'exemple'=>'GB29 NWBK 6016 1331 9268 19'], 
        ['countrycode'=>'SK', 'country'=>'Slovaquie', 'length'=>'24', 'exemple'=>'SK31 1200 0000 1987 4263 7541'], 
        ['countrycode'=>'SI', 'country'=>'Slovénie', 'length'=>'19', 'exemple'=>'SI56 1910 0000 0123 438'], 
        ['countrycode'=>'SE', 'country'=>'Suède', 'length'=>'24', 'exemple'=>'SE35 5000 0000 0549 1000 0003'],
    ]; 

}
