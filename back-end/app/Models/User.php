<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [

        'names',
        'avatar',
        'names',
        'surnames',
        'email',
        'phone',
        'password',
        'indicative',
        'phone'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    public function scopeValidateNumber($query,$indicative,$phone){
        return $query->select('id','indicative','phone')->where('indicative',$indicative)->where('phone',$phone);
    }
  
    public function scopeUsersAll($query){
        return $query->select('avatar', 'names', 'surnames', 'email', 'phone');
    }
}
