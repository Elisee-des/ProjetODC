<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    /**
     * @Route("/api/person", name="app_test")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function index(): Response
    {
        $persons = [
            [
                "id" => 1,
                "lastname" => "Ouedraogo",
                "firstname" => "Paul",
                "avatar" => "/profile/ouedraogo-paul.png"
            ],
            [
                "id" => 2,
                "lastname" => "Sakara",
                "firstname" => "Paul",
                "avatar" => "/profile/sakara-paul.png"
            ],
            [
                "id" => 3,
                "lastname" => "Compaore",
                "firstname" => "Paul",
                "avatar" => "/profile/compaore-paul.png"
            ],
            [
                "id" => 4,
                "lastname" => "Kabore",
                "firstname" => "Paul",
                "avatar" => "/profile/kabore-paul.png"
            ],
            [
                "id" => 5,
                "lastname" => "Damiba",
                "firstname" => "Paul",
                "avatar" => "/profile/damiba-paul.png"
            ],
        ];

        $response = new Response();
        $response->setContent(json_encode($persons));
        return $response;
    }
}
