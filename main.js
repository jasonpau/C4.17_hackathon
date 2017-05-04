/**
 * Created by JTM on 5/2/17.
 */

//var temp_win_count = null;
var number_of_gems_to_win = 4;
var number_of_players = 2;
var current_player = 1;
var number_of_col = 6;
var number_of_row = 5;
var board = [];


$(document).ready(function(){

//Event Listener
    $("#play_game").on("click",initialize_game);

    $("#new_game").on("click",reset_game);

    $("#how_many").change(function() {
        number_of_gems_to_win = $("#how_many").val();
        console.log("Number of Gems to Win: ",number_of_gems_to_win);
    });

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

    $('#setup_background').css('visibility','hidden');
    create_board_array(number_of_col,number_of_row);
    create_DOM_board(number_of_col,number_of_row);

}

function reset_game() {
    current_player = 1;
    $('#won_background').css('visibility','hidden');
    $("#setup_background").css("visibility","visible");

    $("#board_wrapper").off("click",".column");
}

function create_board_array(col, row) {
    board = [];
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
    $("#game_header").text("Connect " + number_of_gems_to_win);
    $("#current-player").text("Player " + current_player + " you're up~!");
    $("#player_gem_color").addClass('p' + current_player);
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
    var r;

    console.log(clicked);

    // check to see if the very top is full, if so, exit this add token (it'll stay on the current player)
    // if (board[0][c] !== 0) {
    //     console.log('it be full!!!');
    //     //break;
    // }

    // go down the column, checking each cell for an empty slot
    for (r = 0; r < board.length; r++) {
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

    check_for_win(open_board_cell_row_index,c);

    check_for_three_diff(open_board_cell_row_index,c);

    console.log(open_dom_cell);
    display_array(board);

    switch_player();
    console.log('it is now player ' + current_player + 's turn');
}


function switch_player() {
    current_player++;
    if (current_player > number_of_players) {
        current_player = 1;
    }
    $("#current-player").text("Player " + current_player + " you're up~!");
    $("#player_gem_color").removeClass();
    $("#player_gem_color").addClass('p' + current_player);
}

// I DON'T THINK WE NEED THIS...WE'RE UPDATING THE DOM IN THE ADD_TOKEN FUNCTION
function update_dom() {

}


// var test_array =
//     [
//         [0, 0, 0, 0, 0, 1],
//         [0, 0, 1, 0, 1, 0],
//         [0, 0, 1, 1, 0, 0],
//         [0, 0, 1, 0, 1, 0],
//         [0, 0, 1, 0, 0, 1]
//     ];



function check_for_win(row, col){
    console.log('beginning the check win function...');
    var temp_win_count = 0;
    // row : to right end
    for(var c = col; c < board[row].length; c++){
        if(board[row][c] === current_player) {
            temp_win_count++;
            if (temp_win_count === parseInt(number_of_gems_to_win)) {
                console.log('You won the game!');
                game_won();
                return;
            }
        } else {
            console.log('to right: you did not match 4...yet');
            break;
        }
    }   temp_win_count -=1;
    // row : to left end
    for(var c = col; c >= 0; c--){
        if(board[row][c] === current_player) {
            temp_win_count++;
            if (temp_win_count === parseInt(number_of_gems_to_win)) {
                console.log('You won the game!');
                game_won();
                return;
            }
        }  else {
            console.log('to left: you did not match 4');
            break;
        }
    }
    temp_win_count = 0;


    // col : upward
    for(var r = row; r >= 0; r--){
        if(board[r][col] === current_player){
            temp_win_count++;
            if(temp_win_count === parseInt(number_of_gems_to_win)){
                console.log('You won the game!');
                game_won();
                return;
            }
        } else {
            console.log('upward: you did not match 4');
            break;
        }
    }
    temp_win_count -=1;
    // col : downward
    for(var r = row; r < board.length; r++){
        if(board[r][col] === current_player){
            temp_win_count++;
            console.log("numberof gems: ",number_of_gems_to_win);
            if(temp_win_count === parseInt(number_of_gems_to_win)){
                console.log('You won the game!');
                game_won();
                return;
            }
        } else {
            console.log('downward: you did not match 4');
            break;
        }
    }
    temp_win_count = 0;

    // diagonal : right - up
    for(var r = row, c = col; r > 0 && c < board[row].length; r--, c++){
        if(board[r][c] === current_player) {
            temp_win_count++;
            if (temp_win_count === parseInt(number_of_gems_to_win)) {
                console.log('You won the game!');
                game_won();
                return;
            }
        } else {
            console.log('right - up : you did not match 4...yet');
            break;
        }
    }
    temp_win_count -=1;
    // diagonal : left - down
    for(var r = row, c = col; r < board.length && c < board[row].length; r++, c--){
        if(board[r][c] === current_player) {
            temp_win_count++;
            if (temp_win_count === parseInt(number_of_gems_to_win)) {
                console.log('You won the game!');
                game_won();
                return;
            }
        } else {
            console.log('left - down : you did not match 4...yet');
            break;
        }
    }

    temp_win_count =0;
    //diagonal : left - up
    for(var r = row, c = col; r > 0 && c > 0; r--, c--){
        if(board[r][c] === current_player) {
            temp_win_count++;
            if (temp_win_count === parseInt(number_of_gems_to_win)) {
                console.log('You won the game!');
                game_won();
                return;
            }
        } else {
            console.log('left - up : you did not match 4...yet');
            break;
        }
    }
    temp_win_count -=1;
    // diagonal : right - down
    for(var r = row, c = col; r < board.length && c < board[row].length; r++, c++){
        if(board[r][c] === current_player) {
            temp_win_count++;
            if (temp_win_count === parseInt(number_of_gems_to_win)) {
                console.log('You won the game!');
                game_won();
                return;
            }
        } else {
            console.log('right - down : you did not match 4...yet');
            break;
        }
    }
    temp_win_count = 0;
    console.log('...and we finished the check win and found nothing!')
}

function check_for_diff_colors() {

}


function game_won() {

    $('#won_message').text('Player ' + current_player + ' won the game!');
    $('#won_background').css('visibility','visible');

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

function check_for_three_diff(row, col){
    // check left / right - o -
    var check1 = '';
    check1 += board[row][col];
    check1 += board[row][col-1];
    check1 += board[row][col+1];
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        // for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
            console.log('THE ROCK!!');
        // }
    }

    // check diagonal up left / down right - o -
    check1 = '';
    check1 += board[row][col];
    if (board[row-1]) {
        check1 += board[row-1][col-1];
    }
    if (board[row+1]) {
        check1 += board[row+1][col+1];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');

        }
    }

    // check diagonal up right / down left - o -
    check1 = '';
    check1 += board[row][col];
    if (board[row-1]) {
        check1 += board[row-1][col+1];
    }
    if (board[row+1]) {
        check1 += board[row+1][col-1];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');

        }
    }

    // check right o - -
    check1 = '';
    check1 += board[row][col];
    if (board[row]) {
        check1 += board[row][col+1];
    }
    if (board[row]) {
        check1 += board[row][col+2];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row+ 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
            console.log('cell destroyed!');
        }
    }

    // check left - - o
    check1 = '';
    check1 += board[row][col];
    if (board[row]) {
        check1 += board[row][col-1];
    }
    if (board[row]) {
        check1 += board[row][col-2];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
            console.log('cell destroyed!');
        }
    }

    // check diagonal up right o - -
    check1 = '';
    check1 += board[row][col];
    if (board[row-1]) {
        check1 += board[row-1][col+1];
    }
    if (board[row-2]) {
        check1 += board[row-2][col+2];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
        }
    }

    // check diagonal up left - - o
    check1 = '';
    check1 += board[row][col];
    if (board[row-1]) {
        check1 += board[row-1][col-1];
    }
    if (board[row-2]) {
        check1 += board[row-2][col-2];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++) {
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
        }
    }

    // check diagonal down right o - -
    check1 = '';
    check1 += board[row][col];
    if (board[row+1]) {
        check1 += board[row+1][col+1];
    }
    if (board[row+2]) {
        check1 += board[row+2][col+2];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
        }
    }

    // check diagonal down left - - o
    check1 = '';
    check1 += board[row][col];
    if (board[row+1]) {
        check1 += board[row+1][col-1];
    }
    if (board[row+2]) {
        check1 += board[row+2][col-2];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
        }
    }

    // check down o - -
    check1 = '';
    check1 += board[row][col];
    if (board[row+1]) {
        check1 += board[row+1][col];
    }
    if (board[row+2]) {
        check1 += board[row+2][col];
    }
    if(check1.indexOf(1)+check1.indexOf(2)+check1.indexOf(3) === 3){
        console.log('we got 3 pieces');
        for(var r = 0; r<board.length; r++){
            var css_r = row + 1;
            var css_c = col + 1;
            board[row][col] = 4;
            $('.row:nth-child(' + css_r + ') .column:nth-child(' + css_c + ')').addClass('black');
        }
    }
}