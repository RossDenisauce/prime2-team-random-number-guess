$(document).ready(start);

function start() {
    console.log('JQ Sourced');

    $('#startButton').on('click', createPlayMode);
}

function createPlayMode() {
    let maxNumber = setDifficulty();
    let numberOfPlayers = setNumberPlayers();

    $.ajax({
        method: 'POST',
        url: '/guess',
        data: {
            object: 'object'
        },
        success: function(response) {
            console.log('in post');

            $.ajax({
                method: 'GET',
                url: '/guess',
                success: function(response) {
                    console.log('in post\'s get!', response);
                }
            });

        }
    });

    if(numberOfPlayers) {
        runPlayMode(maxNumber, numberOfPlayers);
    }

}

function runPlayMode(maxNumber, numberOfPlayers) {
    // AJAX call!
}

function setDifficulty() {
    let difficultyLevel = $('#maxNumberSelector').find(':selected').val();
    
    let maxNumber;

    if (difficultyLevel === 'normal') {
        maxNumber = 10;
    } else if (difficultyLevel === 'hard') {
        maxNumber = 100;
    } else {
        maxNumber = 1000;
    }
    return maxNumber;
}

function setNumberPlayers() {
    let numberOfPlayers = parseInt($('#numberOfPlayers').val());
    if (numberOfPlayers <= 4 && numberOfPlayers > 0) {
        return numberOfPlayers;
    } else {
        alert('You need between one and four players, please!');
    }
}