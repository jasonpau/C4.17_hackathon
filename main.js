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



function check_for_win() {

}



function check_for_diff_colors() {

}


function game_won() {

}

