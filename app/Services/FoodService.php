<?php

namespace App\Services;

use Illuminate\Support\Facades\File;

class FoodService
{
    public function allFoods(): array
    {
        $array = [];
        $filePath = storage_path('app/xml/Food_Display_Table.xml');

        if (! File::exists($filePath)) {
            return $array;
        }

        $xmlString = File::get($filePath);

        $xml = simplexml_load_string($xmlString, "SimpleXMLElement", LIBXML_NOERROR | LIBXML_ERR_NONE);

        if ($xml === false) {
            return $array;
        }

        $json = json_encode($xml);
        $array = json_decode($json, true);

        return $array;
    }

    public function parse(string $path): ?\SimpleXMLElement
    {
        if (!File::exists($path)) {
            return null;
        }

        $xmlString = File::get($path);
        return simplexml_load_string($xmlString);
    }

    public function toArray(\SimpleXMLElement $xml): array
    {
        return json_decode(json_encode($xml), true);
    }
}
