<?php

namespace App\Http\Controllers;

use App\Models\Provider;

use Illuminate\Http\Request;

class ProviderController extends Controller
{
    public function providersAll(){

        $providers = Provider::providersAll()->get(); //Devuelve todos los proveedores
        return response()->json(['providers' => $providers]);
    }
}
