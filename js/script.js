$(function () {
    $currentPlayer = new Boolean(1)

    players = ['X', 'O']

    $('.cell').on('click', function (e) {
        let clickedCell = e.target
        let getlock = clickedCell.getAttribute('data-lock')
        cPlayer = players[boolval($currentPlayer)]

        if (getlock == 'false') {
            clickedCell.innerHTML = cPlayer
            clickedCell.setAttribute('data-lock', 'true')
        }
        // Game logic 

        // Player win cases
        if (
            // horizontal wins cases
            getCell('cell1') == getCell('cell2') && getCell('cell3') == getCell('cell2') && getCell('cell1') != '' && getCell('cell2') != '' && getCell('cell3') != '' ||
            getCell('cell4') == getCell('cell5') && getCell('cell5') == getCell('cell6') && getCell('cell4') != '' && getCell('cell5') != '' && getCell('cell6') != '' ||
            getCell('cell7') == getCell('cell8') && getCell('cell8') == getCell('cell9') && getCell('cell7') != '' && getCell('cell8') != '' && getCell('cell9') != '' ||

            // vertical wins cases
            getCell('cell1') == getCell('cell4') && getCell('cell4') == getCell('cell7') && getCell('cell1') != '' && getCell('cell4') != '' && getCell('cell7') != '' ||
            getCell('cell2') == getCell('cell5') && getCell('cell5') == getCell('cell8') && getCell('cell2') != '' && getCell('cell5') != '' && getCell('cell8') != '' ||
            getCell('cell3') == getCell('cell6') && getCell('cell6') == getCell('cell9') && getCell('cell3') != '' && getCell('cell6') != '' && getCell('cell9') != '' ||

            // diagonal
            getCell('cell1') == getCell('cell5') && getCell('cell5') == getCell('cell9') && getCell('cell1') != '' && getCell('cell5') != '' && getCell('cell9') != '' ||
            getCell('cell3') == getCell('cell5') && getCell('cell5') == getCell('cell7') && getCell('cell3') != '' && getCell('cell5') != '' && getCell('cell7') != ''
        ) {
            setTimeout(function () {
                console.log(cPlayer + ' wins')

                $('#winner .text')[0].innerText = 'player ' + cPlayer + ' Wins!'

                $('#winner').css('display', 'block')

                lockAll()
            }, 1000)
        } else if (
            // Draw cases
            getCell('cell1') != '' &&
            getCell('cell2') != '' &&
            getCell('cell3') != '' &&
            getCell('cell4') != '' &&
            getCell('cell5') != '' &&
            getCell('cell6') != '' &&
            getCell('cell7') != '' &&
            getCell('cell8') != '' &&
            getCell('cell9') != ''
        ) {
            setTimeout(function () {
                console.log('Draw')

                $('#winner .text')[0].innerText = 'Drow! .. no winners!'

                $('#winner').css('display', 'block')

                lockAll()
            }, 1000)
        }

        console.log('player ' + cPlayer + ' played his turn')
        $currentPlayer = !$currentPlayer
    })

})



function boolval(v) {
    return (v == true) ? 1 : 0
}

function getCell(id) {
    return $('#' + id)[0].innerHTML
}

function lockAll() {
    let arr = $('.cell')
    for (let i = 1; i <= arr.length; i++) {
        $('#cell' + i)[0].setAttribute('data-lock', 'true')
    }
}