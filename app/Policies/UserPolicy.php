<?php

namespace App\Policies;

use App\User; 
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the user.
     *
     * @param  \App\User  $user
     * @param  \App\User  $user
     * @return mixed
     */

    public function before(User $user)
     {
        if ($user->role === 'admin') {
            return true;
        }
    }

    public function edit(User $user, User $edit_user) {
        /* 
        ** $user est l'utilisateur connecté
        ** $edit_user est l'utilisateur passé dans l'url (ex: .../users/2/edit)
        ** si l'id de utilisateur connecté = user à éditer on return true
        */
        return $user->id === $edit_user->id;
    }

    public function saveCompanyDataStepOne(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }
    
    public function saveCompanyDataStepTwo(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }

    /*public function saveCompanyIbanActivate(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }*/
    public function saveCompanyIban(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }
    public function saveCompanyCheque(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }
    public function saveCompanyPaypal(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }
    public function saveCompanyMoney(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }
    public function view(User $user, User $edit_user)
    {
        return $user->id === $edit_user->id;
    }

    /**
     * Determine whether the user can create users.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the user.
     *
     * @param  \App\User  $user
     * @param  \App\User  $user
     * @return mixed
     */
    public function update(User $user, User $user)
    {
        //
    }

    /**
     * Determine whether the user can delete the user.
     *
     * @param  \App\User  $user
     * @param  \App\User  $user
     * @return mixed
     */
    public function delete(User $user, User $user)
    {
        //
    }
}
