<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
//modelos
use App\Models\TelephoneCodes;
use App\Models\User;

class AuthenticationController extends Controller
{
    /*
        Nombre: ValidateNumber
        Funcionalidad: Valida que el numero exista en la base de datos
    */
    public function ValidateNumber(Request $request){
        $validate = User::ValidateNumber($request->indicador,$request->numero)->get();
        if (count($validate) ==  1) {
            //genera el codigo y lo envia al numero
            $codigoGenerado = TelephoneCodes::GenerateCode($validate[0]->id,$validate[0]->indicative,$validate[0]->phone);

            $respuesta = ["mensaje"=>"envio Codigo","bandera"=>1,"usuario"=>$validate[0]->id];
        }else {
            $respuesta = ["mensaje"=>"No esta registrado","bandera"=>0];
        }
        return response()->json($respuesta);
    }

    /*
        Nombre: Login
        Funcionalidad: Recibe un id de usuario y un codigo de seguridad para hacer login
    */
    public function Login(Request $request){
        $validateCodigo = TelephoneCodes::ValidateCodigo($request->user,$request->codigo)->get();
        if(count($validateCodigo) == 1){
            $usuario = User::find($request->user);
            Auth::login($usuario);
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $respuesta = ["mensaje"=>"Ingresa","bandera"=>1,"token"=>$token];
        }else{
            $respuesta = ["mensaje"=>"codigo no valido","bandera"=>0];
        }
        return response()->json($respuesta);
    }

    public function prueba(Request $request){
        //$user = $user->tokens()->where('id', "4|b3IL6dHOGMbbpO1nhz7OMrQaKZl2w56mVbz1j16N")->get();
        //"mensaje"=>"codigo no valido","bandera"=>auth()->user()
        //$respuesta = ["mensaje"=>"Ingresa","bandera"=>$user[0]->phone/*"token"=>$token*/];
        return response()->json(["mensaje"=>"codigo no valido","bandera"=>auth()->user()]);
    }
}
