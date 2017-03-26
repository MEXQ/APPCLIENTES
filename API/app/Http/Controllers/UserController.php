<?php
namespace App\Http\Controllers;

use App\Quote;
use Illuminate\Http\Request;

class UserController extends Controller
{
    

    public function getUser($usuario)
    {
        
        return response()->json(["nombre"=>$usuario,
            "login"=>"true"
            ]);
    }

    public function putQuote(Request $request, $id)
    {
        $quote = Quote::find($id);
        if (!$quote) {
            return response()->json(['message' => 'Document not found'], 404);
        }
        $quote->content = $request->input('content');
        $quote->save();
        return response()->json(['quote' => $quote], 200);
    }

    public function deleteQuote($id)
    {
        $quote = Quote::find($id);
        $quote->delete();
        return response()->json(['message' => 'Quote deleted'], 200);
    }
}