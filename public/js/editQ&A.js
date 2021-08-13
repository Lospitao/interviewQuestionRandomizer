
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
function editAnswear(answear, uuid, editQuestionsAndAnswersWebService) {
    $.ajax({

        url : editQuestionsAndAnswersWebService,
        data : {
            'uuid' : uuid,
            'answear' : answear
        },
        type : 'PATCH',
        dataType : 'json',
        success: function (data) {
            console.log('Submission was successful.');
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(answear);
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
    $('#answear').on("blur", function () {
        var answear = $('#answear').val();
        console.log(answear);
        editAnswear(answear, uuid, editQuestionsAndAnswersWebService);
    });
}


$(document).ready(function() {
    var question = document.getElementById("question");
    var uuid = question.getAttribute("data-uuid");
    var editQuestionsAndAnswersWebService = API_DOMAIN + '/v1/QuestionsAndAnswers/'+ uuid;
    editCategoryEvent(uuid, editQuestionsAndAnswersWebService);
    editQuestionEvent(uuid, editQuestionsAndAnswersWebService);
    editAnswerEvent(uuid, editQuestionsAndAnswersWebService);

});