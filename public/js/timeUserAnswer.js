setInterval(function(){

    document.getElementById("user-answer-textarea").disabled = true;}, 60000);

$('#user-answer-textarea').onchange = function () {
    setInterval();
}
