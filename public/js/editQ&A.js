
function editCategory(category, uuid, editQuestionsAndAnswersWebService) {
    $.ajax({

        url : editQuestionsAndAnswersWebService,
        data : {
            'uuid' : uuid,
            'category' : category
            },
        type : 'PATCH',
        dataType : 'json',
        success: function (data) {
            console.log('Submission was successful.');
        },
        error: function (data) {
            console.log('An error occurred.');
        },
    })
}
function editQuestion(question, uuid, editQuestionsAndAnswersWebService) {
    $.ajax({

        url : editQuestionsAndAnswersWebService,
        data : {
            'uuid' : uuid,
            'question' : question
        },
        type : 'PATCH',
        dataType : 'json',
        success: function (data) {
            console.log('Submission was successful.');
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(question);
        },
    })
}
function editAnswer(answer, uuid, editQuestionsAndAnswersWebService) {
    $.ajax({

        url : editQuestionsAndAnswersWebService,
        data : {
            'uuid' : uuid,
            'answer' : answer
        },
        type : 'PATCH',
        dataType : 'json',
        success: function (data) {
            console.log('Submission was successful.');
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(answer);
        },
    })
}
function editCategoryEvent(uuid, editQuestionsAndAnswersWebService) {
    $('#category').on("blur", function () {
        var category = $('#category').val();
        editCategory(category, uuid, editQuestionsAndAnswersWebService);
    });
}
function editQuestionEvent(uuid, editQuestionsAndAnswersWebService){
    $('#question').on("blur", function () {
        var question = $('#question').val();
        console.log(question);
        editQuestion(question, uuid, editQuestionsAndAnswersWebService);
    });
}
function editAnswerEvent(uuid, editQuestionsAndAnswersWebService) {
    $('#answer').on("blur", function () {
        var answer = $('#answer').val();
        console.log(answer);
        editAnswer(answer, uuid, editQuestionsAndAnswersWebService);
    });
}


$(document).ready(function() {
    var question = document.getElementById("question");
    var uuid = question.getAttribute("data-uuid");
    var editQuestionsAndAnswersWebService = API_DOMAIN + '/v1/Questions/'+ uuid + '/edit';
    editCategoryEvent(uuid, editQuestionsAndAnswersWebService);
    editQuestionEvent(uuid, editQuestionsAndAnswersWebService);
    editAnswerEvent(uuid, editQuestionsAndAnswersWebService);

});