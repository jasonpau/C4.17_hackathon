/**
 * Created by JTM on 5/2/17.
 */

var temp_win_count = null;
var number_of_players = null;
var current_player = 1;
var number_of_col = null;
var number_of_row = null;
var board = [];

function create_board_array(col, row) {
    for(var i = 0; i < row; i++) {
        var newRow = [];
        for(var j = 0; j < col; j++) {
            newRow.push(0);
        }
        board.push(newRow);
        console.log(newRow.join());
    }
    console.log(board);
}
create_board_array(6,5);


$(document).ready(function(){

//Event Listener
$("#play_game").on("click",initialize_game);

});


function initialize_game() {

// jQuery DOM CREATION

    create_DOM_board(6,5);

}

function create_DOM_board(col, row) {
    var $section = $("#board_wrapper");
    $section.empty($("div.row"));
    for(var i = 0; i < row; i++) {
        var $row = $("<div>").addClass("row");

        for(var j = 0; j < col; j++) {
            var $div = $("<div>").addClass("column");
            $row.append($div);
            console.log($row);
        }
        $section.append($row);
        // board.push(newRow);
    }
    $section.on("click",".column",function() {
        var click = $(this);
        add_token(click);
    });
}


function add_token(clicked) {
    // which player?

    var open_cell;

    // get the index of the column clicked (starts at 0)
    var column_number = clicked.index();

    console.log(clicked);

    // go down the column, checking each cell for an empty slot
    for (var r = 0; r < board.length; r++) {
        if (board[r][column_number] === 0) {
            open_cell = $('.row:nth-child(4) .column:nth-child(3)');
        } else {
            //$('.row:nth-child(' + r + ') .column:nth-child(' + column_number + ')').addClass(current_player);
            //clicked.addClass(current_player);
        }
    }
    open_cell.addClass(current_player);

    console.log(open_cell);
}



function switch_player() {
    current_player++;
    if (current_player > number_of_players) {
        current_player = 1;
    }
}



function update_dom() {

}




function check_for_win(row, col){
    var test_array =
        [[0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 1]];

    var temp_win_count = 1;
    var class_player1 = 1;  // check player1
    // row : to right end
    for(var c = col; c < test_array[row].length; c++){
        if(test_array[row][c+1] === class_player1){
            temp_win_count++;
            if(temp_win_count === 4){
                console.log('You won the game!');
                break;
            } else {
                console.log('to right: you did not match 4');
                // break;
            }
        }
    }
    // row : to left end
    for(var c = col; c >= 0; c--){
        if(test_array[row][c-1] === class_player1){
            temp_win_count++;
            if(temp_win_count === 4){
                console.log('You won the game!');
                break;
            } else {
                console.log('to left: you did not match 4');
                // break;
            }
        }
    }
}




function check_for_diff_colors() {

}


function game_won() {
    alert(current_player + ' won the game!');
}

// TESTING FUNCTION!! REMOVE BEFORE GOING LIVE
function display_array(array) {
    var output = '\n';
    for (var i = 0; i < array.length; i++) {
        output += array[i].join(' ') + '\n';
    }
    console.log(output);
}
display_array(board);
