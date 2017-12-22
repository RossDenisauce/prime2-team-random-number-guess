$(document).ready(start);

let numberOfPlayers;

function start() {
    console.log('JQ Sourced');

    $('#startButton').on('click', newPage);
}

// Make a new page
function newPage() {

    createPlayMode();
    if (numberOfPlayers <= 4 && numberOfPlayers > 0) {

        let newMain = $('<div id="main">');

        for (let i = 0; i < numberOfPlayers; i++) {
            let newPlayer = $('<div class="player">');
            newPlayer.append('<input>');
            newPlayer.append('<button>Guess!</button>');
            newMain.append(newPlayer);
        }


        // numberOfPlayers;


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
    numberOfPlayers = parseInt($('#numberOfPlayers').val());
    if (numberOfPlayers <= 4 && numberOfPlayers > 0) {
        return numberOfPlayers;
    } else {
        alert('You need between one and four players, please!');
    }
}