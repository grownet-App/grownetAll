<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function productsAll(){

        $products = Product::productsAll()->get(); //Devuelve todos los productos
        return response()->json(['products' => $products]);
    }
}
