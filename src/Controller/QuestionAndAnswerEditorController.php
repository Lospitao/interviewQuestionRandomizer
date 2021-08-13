<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class QuestionAndAnswerEditorController extends AbstractController
{
    /**
     * @Route("/question_and_answer/{uuid}/editor", name="question_and_answer_editor")
     * @param $uuid
     */
    public function index($uuid): Response
    {
        return $this->render('question_and_answer_editor/index.html.twig', [
            'controller_name' => 'QuestionAndAnswerEditorController',
            'apiHost' => $this->getParameter('api_host'),
            'uuid' => $uuid
        ]);
    }
}
