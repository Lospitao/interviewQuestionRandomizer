
function createNewQuestionAndAnswer(createQuestionsAndAnswersWebService) {
    $.ajax({

        url : createQuestionsAndAnswersWebService,
        data : {
        },
        type : 'POST',
        dataType : 'json',
        success: function (data) {
            console.log('Submission was successful.');
            var uuid = data['uuid'];
            var url = 'https://localhost:8000/question_and_answer/'+ uuid +'/editor';
            window.location.replace(url);
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(data);
        },
    })
}

function createNewQuestionAndAnswerEvent(createQuestionsAndAnswersWebService) {
    $('#add_new_question_button').click(function() {
        createNewQuestionAndAnswer(createQuestionsAndAnswersWebService);
    });
}

$(document).ready(function() {

    let createQuestionsAndAnswersWebService = API_DOMAIN + '/v1/Questions/create';
    createNewQuestionAndAnswerEvent(createQuestionsAndAnswersWebService);

});