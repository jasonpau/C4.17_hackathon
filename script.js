var test_array =
        [
        [0, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0, 1]
        ];

var temp_win_count = 0;
var class_player1 = 1;  // check player1

function check_for_win(row, col){

    // row : to right
    for(var c = col; c < test_array[row].length; c++){
        if(test_array[row][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                return;
            }
        } else {
            console.log('to right: not match 4');
            break;
        }
    }   temp_win_count -=1;
    // row : to left end
    for(var c = col; c >= 0; c--){
        if(test_array[row][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                return;
            }
        }  else {
            console.log('to left: not match 4');
            break;
        }
    }
    temp_win_count = 1;


    // col : upward
    for(var r = row; r >= 0; r--){
        if(test_array[r][col] === class_player1){
            temp_win_count++;
            if(temp_win_count === 4){
                console.log('You won the game!');
                return;
            }
        } else {
            console.log('upward: not match 4');
            break;
        }
    }
    temp_win_count -=1;
    // col : downward
    for(var r = row +1; r < test_array.length; r++){
        if(test_array[r][col] === class_player1){
            temp_win_count++;
            if(temp_win_count === 4){
                console.log('You won the game!');
                return;
            }
        } else {
            console.log('downward: not match 4');
            break;
        }
    }
    temp_win_count = 1;

    // diagonal : right-up
    for(var r = row, c = col; r > 0 && c < test_array[row].length; r--, c++){
            if(test_array[r][c] === class_player1) {
                temp_win_count++;
                if (temp_win_count === 4) {
                    console.log('You won the game!');
                    return;
                }
            } else {
                console.log('right-up : not match 4');
                break;
            }
    }
    temp_win_count -=1;
    // diagonal : left - down
    for(var r = row, c = col; r < test_array.length && c < test_array[row].length; r++, c--){
        if(test_array[r][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                return;
            }
        } else {
            console.log('left-down : not match 4');
            break;
        }
    }

    temp_win_count =1;
    //diagonal : left - up
    for(var r = row, c = col; r > 0 && c > 0; r--, c--){
        if(test_array[r][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                return;
            }
        } else {
            console.log('left - up : you did not match 4...yet');
        }
    };
    temp_win_count -=1;
    // diagonal : right - down
    for(var r = row, c = col; r < test_array.length && c < test_array[row].length; r++, c++){
        if(test_array[r][c] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                return;
            }
        } else {
            console.log('right - down : you did not match 4...yet');
        }
    }
    temp_win_count = 1;
};
