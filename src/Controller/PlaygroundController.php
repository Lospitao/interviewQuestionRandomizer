<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class PlaygroundController extends AbstractController
{

    private $client;
    private $randomlyChosenItem;
    private $apiDomain;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * @Route("/play/{uuid}", name="playground")
     * @param $uuid
     * @return Response
     */

    public function index($uuid): Response
    {
        try {
            $this->apiDomain = $this->getApiDomain();
            $this->randomlyChosenItem = $this->getRandomlyChosenItem($uuid);
            $playgroundTemplate = $this->renderPlaygroundTemplate($uuid);
            return $playgroundTemplate;
        }
        catch (Exception $exception) {
            $jsonResponseWithError = $this->createJsonResponseWithError($exception);
            return $jsonResponseWithError;
        }

    }

    private function renderPlaygroundTemplate($uuid)
    {
        return $this->render('playground/index.html.twig', [
            'controller_name' => 'PlaygroundController',
            'apiHost' => $this->getParameter('api_host'),
            'uuid' => $uuid,
            'question' => $this->randomlyChosenItem['question'],
            'answer' => $this->randomlyChosenItem['answer'],
            'category' => $this->randomlyChosenItem['category'],

        ]);
    }

    private function createJsonResponseWithError(Exception $exception)
    {
        $response = new JsonResponse();
        $response->setStatusCode(JsonResponse::HTTP_NO_CONTENT);
        return $response;
    }

    private function getRandomlyChosenItem($uuid)
    {
        return json_decode($this->client->request('GET', $this->apiDomain.'/v1/Questions/play/'.$uuid, [
            'headers' => [
                'Accept' => 'application/json',
            ],
        ])->getContent(), true);
    }

    private function getApiDomain()
    {
        return $this->getParameter('api_host');
    }
}
