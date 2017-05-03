/**
 * Created by JTM on 5/2/17.
 */

var temp_win_count = null;
var number_of_players = 2;
var current_player = 1;
var number_of_col = 6;
var number_of_row = 5;
var board = [];


$(document).ready(function(){

//Event Listener
    $("#play_game").on("click",initialize_game);
    $("#two_players").click(function() {
        number_of_players = 2;
        console.log("Number of Players: ",number_of_players);
    });
    $("#three_players").click(function() {
        number_of_players = 3;
        console.log("Number of Players: ",number_of_players);
    });

    $("#small").click(function() {
        number_of_col = 6;
        number_of_row = 5;
        console.log("Number of Columns: ",number_of_col, "Number of Rows: ",number_of_row);
    });

    $("#medium").click(function() {
        number_of_col = 9;
        number_of_row = 7;
        console.log("Number of Columns: ",number_of_col, "Number of Rows: ",number_of_row);
    });

    $("#large").click(function() {
        number_of_col = 12;
        number_of_row = 10;
        console.log("Number of Columns: ",number_of_col, "Number of Rows: ",number_of_row);
    });

    // number_of_col = $("#column_input").val();
    // $("#column_input").change(function() {
    //     number_of_col = $("#column_input").val();
    //     console.log("Number of Columns: ",number_of_col);
    // });
    //
    // number_of_row = $("#row_input").val();
    // $("#row_input").change(function() {
    //     number_of_row = $("#row_input").val();
    //     console.log("Number of Rows: ",number_of_row);
    // });

});


function initialize_game() {

    create_board_array(number_of_col,number_of_row);
    create_DOM_board(number_of_col,number_of_row);

}


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


function create_DOM_board(col, row) {
    var $section = $("#board_wrapper");
    $section.empty($("div.row"));
    for(var i = 0; i < row; i++) {
        var $row = $("<div>").addClass("row");

        for(var j = 0; j < col; j++) {
            var $div = $("<div>").addClass("column");
            $row.append($div);
        }
        $section.append($row);
    }
    $section.on("click",".column",function() {
        var click = $(this);
        add_token(click);
    });
}


function add_token(clicked) {
    // which player?

    var open_board_cell_row_index;
    var open_dom_cell;

    // get the index of the column clicked (starts at 0)
    var c = clicked.index();

    console.log(clicked);

    // check to see if the very top is full, if so, exit this add token (it'll stay on the current player)
    if (board[0][c] !== 0) {
        console.log('it be full!!!');
        //break;
    }

    // go down the column, checking each cell for an empty slot
    for (var r = 0; r < board.length; r++) {
        if (board[r][c] === 0) {
            var css_r = r + 1;
            var css_c = c + 1;
            console.log('we are currently checking array index positions ' + r + ',' + c);
            open_board_cell_row_index = r;
            open_dom_cell = $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')');
        }
    }

    // update both the js array and the dom
    board[open_board_cell_row_index][c] = current_player;
    open_dom_cell.addClass('p' + current_player.toString());

    console.log(open_dom_cell);
    display_array(board);

    switch_player();
}


function switch_player() {
    current_player++;
    if (current_player > number_of_players) {
        current_player = 1;
    }
}

// I DON'T THINK WE NEED THIS...WE'RE UPDATING THE DOM IN THE ADD_TOKEN FUNCTION
function update_dom() {

}


function check_for_win(row, col) {

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
