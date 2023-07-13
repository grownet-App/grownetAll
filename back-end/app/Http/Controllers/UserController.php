<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function usersAll(){

        $users = User::usersAll()->get(); //Devuelve todos los usuarios
        return response()->json(['users' => $users]);
    }
}
