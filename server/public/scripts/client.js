$(document).ready(start);

let numberOfPlayers;
let maxNumber;
let counter = 0;

function start() {
    console.log('JQ Sourced');

    $('#startButton').on('click', newPage);
}

function makeAGuess() {
    console.log('hecko');

    let guessValue = parseInt( $(this).closest('div').find('input').val() );
    console.log(guessValue);

    let button = this;

    $.ajax({
        method: 'POST',
        url: '/guess',
        data: {
            guessValue: guessValue
        },
        success: function(response) {
            console.log('in post');

            $.ajax({
                method: 'GET',
                url: '/guess',
                success: function(response) {
                    console.log('in post\'s get!', response);
                    $(button).closest('div').append(response);
                    $(button).remove();
                }
            });


        }
    });

    counter++;
    $('#showCounterDisplay').text('Counter: ' + counter);
}

// Make a new page
function newPage() {

    createPlayMode();
    if (numberOfPlayers <= 4 && numberOfPlayers > 0) {

        let newMain = $('<main>');
        newMain.append($('<div id="showMaxReminder">Maximum number: ' + maxNumber + '</div>'));
        newMain.append($('<div id="showCounterDisplay">Counter:</div>'));

        newMain.on('click', '.guessButton', makeAGuess);

        for (let i = 0; i < numberOfPlayers; i++) {
            let newPlayer = $('<div id="player-' + (i + 1) + '" class="player">');
            newPlayer.append('<input class="guess" type="number" placeholder="Player ' + (i + 1) + '">');
            newPlayer.append('<button class="guessButton">Guess!</button>');
            newMain.append(newPlayer);
        }
        $('body').empty().append(newMain);
    }
}

function createPlayMode() {
    let maxNumber = setDifficulty();
    let numberOfPlayers = setNumberPlayers();

    // $.ajax({
    //     method: 'POST',
    //     url: '/guess',
    //     data: {
    //         object: 'object'
    //     },
    //     success: function(response) {
    //         console.log('in post');

    //         $.ajax({
    //             method: 'GET',
    //             url: '/guess',
    //             success: function(response) {
    //                 console.log('in post\'s get!', response);
    //             }
    //         });

    //     }
    // });

    // if(numberOfPlayers) {
    //     runPlayMode(maxNumber, numberOfPlayers);
    // }

}

function runPlayMode(maxNumber, numberOfPlayers) {
    // AJAX call!
}

function setDifficulty() {
    let difficultyLevel = $('#maxNumberSelector').find(':selected').val();


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
    numberOfPlayers = parseInt($('#numberOfPlayers').val());
    if (numberOfPlayers <= 4 && numberOfPlayers > 0) {
        return numberOfPlayers;
    } else {
        alert('You need between one and four players, please!');
    }
}