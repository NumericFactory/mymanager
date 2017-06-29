<?php

namespace App\Policies;

use App\User; 
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class CustomerPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function before(User $user)
     {
        if ($user->role === 'admin') {
            return true;
        }
    }

    public function createCustomerDataStepOne(User $user, Customer $customer)
    {
        return $user->id === $customer->user_id;
    }

    public function createCustomerDataStepTwo(User $user)
    {
        //return $user->id === $address->addressable->user->first()->id;
        // $address->adressable | return the customer who have this address
        // ->user->first() | return the only and first user associate with the customer in customer_user table
    }
}
