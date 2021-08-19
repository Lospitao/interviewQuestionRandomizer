
function practiceQuestionsAndAnswers(practiceQuestionsAndAnswersWebService) {
    $.ajax({

        url : practiceQuestionsAndAnswersWebService,
        data : {
        },
        type : 'GET',
        dataType : 'json',
        success: function (data) {
            console.log('Submission was successful.');
            var uuid = data['uuid'];
            var question = data['question'];

            var url = 'https://localhost:8000/play/'+ uuid;
            window.location.replace(url);
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(data);
        },
    })
}

function practiceQuestionsAndAnswersEvent(practiceQuestionsAndAnswersWebService) {
    $('#practice_questions_and_answers_button').click(function() {
        practiceQuestionsAndAnswers(practiceQuestionsAndAnswersWebService);
    });
}

$(document).ready(function() {

    let practiceQuestionsAndAnswersWebService = API_DOMAIN + '/v1/Questions/random-question';
    practiceQuestionsAndAnswersEvent(practiceQuestionsAndAnswersWebService);

});