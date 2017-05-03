/**
 * Created by JTM on 5/2/17.
 */

var temp_win_count = null;
var number_of_players = 2;
var current_player = 1;
var number_of_col = null;
var number_of_row = null;
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
        [
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ];

    var temp_win_count = 1;
    var class_player1 = 1;  // check player1

    function check_for_win(row, col){
        // row : to right end
        for(var c = col; c < test_array[row].length; c++){
            if(test_array[row][c+1] === class_player1) {
                temp_win_count++;
                if (temp_win_count === 4) {
                    console.log('You won the game!');
                    break;
                }
            } else {
                console.log('to right: you did not match 4...yet');
            }
        };
        // row : to left end
        for(var c = col; c >= 0; c--){
            if(test_array[row][c-1] === class_player1) {
                temp_win_count++;
                if (temp_win_count === 4) {
                    console.log('You won the game!');
                    break;
                }
            }  else {
                console.log('to left: you did not match 4');
            }
        };
        // col : upward
        for(var r = row; r >= 0; r--){
            if(test_array[r][col] === class_player1){
                temp_win_count++;
                if(temp_win_count === 4){
                    console.log('You won the game!');
                    break;
                }
            } else {
                console.log('upward: you did not match 4');
            }
        };
        // col : downward
        for(var r = row; r < test_array[row].length; r++){
            if(test_array[r][col] === class_player1){
                temp_win_count++;
                if(temp_win_count === 4){
                    console.log('You won the game!');
                    break;
                }
            } else {
                console.log('downward: you did not match 4');
            }
        };
    };

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
