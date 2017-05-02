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
// initialize_game();

});

function initialize_game() {

// jQuery DOM CREATION



}



function add_token() {

}



function switch_player() {

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

}

