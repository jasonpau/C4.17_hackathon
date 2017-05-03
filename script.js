var test_array =
        [
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
        ];

var temp_win_count = 0;
var class_player1 = 1;  // check player1

function check_for_win(row, col){

    // row : to right
    for(var c = col; c < test_array[row].length; c++){
        if(test_array[row][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                win_check = true;
                console.log('to right: You won the game!');
                return;
            }
        } else {
            console.log('to right: not match 4');
            break;
        }
    };

    // row : to left
    for(var c = col -1; c >= 0; c--){
        if(test_array[row][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('to left: You won the game!');
                return;
            }
        }  else {
            console.log('to left: not match 4');
            break;
        }
    };
    temp_win_count = 0;

    // col : upward
    for(var r = row; r >= 0; r--){
        if(test_array[r][col] === class_player1){
            temp_win_count++;
            if(temp_win_count === 4){
                console.log('upward: You won the game!');
                return;
            }
        } else {
            console.log('upward: not match 4');
            break;
        }
    };

    // col : downward
    for(var r = row +1; r < test_array.length; r++){
        if(test_array[r][col] === class_player1){
            temp_win_count++;
            if(temp_win_count === 4){
                console.log('downward: You won the game!');
                return;
            }
        } else {
            console.log('downward: not match 4');
            break;
        }
    };
    temp_win_count = 0;

    // diagonal : right-up
    for(var r = row, c = col; r > 0 && c < test_array[row].length; r--, c++){
            if(test_array[r][c] === class_player1) {
                temp_win_count++;
                if (temp_win_count === 4) {
                    console.log('right-up : You won the game!');
                    return;
                }
            } else {
                console.log('right-up : not match 4');
                break;
            }
    };
    // diagonal : left-down
    for(var r = row +1, c = col-1; r < test_array.length && c > 0; r++, c--){
        if(test_array[r][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('left-down : You won the game!');
                return;
            }
        } else {
            console.log('left-down : not match 4');
            break;
        }
    };
    temp_win_count = 0;

    // diagonal : right-down
    for(var r = row, c = col; r < test_array.length && c < test_array[row].length; r++, c++){
        if(test_array[r][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('right-down : You won the game!');
                return;
            }
        } else {
            console.log('right-down : not match 4');
            break;
        }
    };

    //diagonal : left-up
    for(var r = row-1, c = col-1; r > 0 && c > 0; r--, c--){
        if(test_array[r][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('left-up : You won the game!');
                return;
            }
        } else {
            console.log('left-up : not match 4');
            break;
        }
    };
};