$(document).ready(start);

function start() {
    console.log('JQ Sourced');

    $('#startButton').on('click', buttonClick);
    // .find(":selected").val()
}

function buttonClick() {
    console.log('button clicked');
}