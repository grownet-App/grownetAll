<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\ActiveScope;

//twilio
use Twilio\Rest\Client;

class TelephoneCodes extends Model
{
    protected $table = 'TelephoneCodes';

    public static function GenerateCode($user,$indicative,$phone){
        $banderacodigo = true;
        while ($banderacodigo){
           $codigo = "";
           for ($i = 0; $i <= 1; $i++){
               $codigo .= strval(mt_rand(0,9));
           }
           $fecha = strval(time());
           $codigo .= substr($fecha, -2);
           $fechaExpires = time();
           //valida que el codigo se pueda utilizar
           $validarCodigo = TelephoneCodes::select('id')->where('codigo',$codigo)->where('expires','>=',$fechaExpires)->get();
           if(count($validarCodigo) == 0){
               $fechaExpiresCodigo = date('Y-m-d H:i:s');
               //expira en 10 minutos
               $NuevaFecha = strtotime('+10 minute',strtotime($fechaExpiresCodigo)); 
               $banderacodigo = false;
               $TelephoneCode = new TelephoneCodes();
               $TelephoneCode->users = $user;
               $TelephoneCode->codigo = $codigo;
               $TelephoneCode->expires = $NuevaFecha;
               $TelephoneCode->save();

                //envia el codigo con twilio
                $account_sid = getenv('TWILIO_SID');
                $auth_token = getenv('TWILIO_TOKEN');

                // A Twilio number you own with SMS capabilities
                $twilio_number = "+14847150919";

                $client = new Client("AC431c118db28737823d4c832ff6367b93", "d268f47037d35dc362fc2c0eaceaad0c");
                $client->messages->create(
                    // Where to send a text message (your cell phone?)
                    '+'.$indicative.$phone,
                    array(
                        'from' => $twilio_number,
                        'body' => 'Tu codigo de verificacion es:'.$codigo
                    )
                );
           }
        }

        return $codigo;
    }

    public function scopeValidateCodigo($query,$usuario,$codigo){
        $fechaExpires = time();
        return $query->where('users',$usuario)->where('codigo',$codigo);
    }

}
