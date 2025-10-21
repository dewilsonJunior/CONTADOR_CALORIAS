<?php

namespace App\Http\Controllers;

use App\Services\FoodService;
use Illuminate\Http\Request;
use Inertia\Inertia;


class CalcController extends Controller
{
    public function searchFood(Request $request)
    {
        $food = $request->query("search");
        $result = null;
        $data = null;

        if ($food) {
            $foodService = new FoodService();
            $data = $foodService->allFoods();
        }


        if (isset($data["Food_Display_Row"])) {

            $result = [];
            foreach ($data["Food_Display_Row"] as $value) {
                if (str_contains($value["Display_Name"], $food)) {
                    $result[] = $value;
                }
            }
        }

        return Inertia::render('Home', [
            'result' => $result,
        ]);
    }
}
