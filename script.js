var test_array =
        [
        [0, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1]
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
    temp_win_count = 1;

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
    for(var r = row; r < test_array.length; r++){
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
    temp_win_count = 1;

    // diagonal : right - up
    for(var r = row, c = col; r > 0 && c < test_array[row].length; r--, c++){
            if(test_array[r-1][c+1] === class_player1) {
                temp_win_count++;
                if (temp_win_count === 4) {
                    console.log('You won the game!');
                    break;
                }
            } else {
                console.log('right - up : you did not match 4...yet');
            }
    };
    // diagonal : left - down
    for(var r = row, c = col; r < test_array.length && c > 0; r++, c--){
        if(test_array[r+1][c-1] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                break;
            }
        } else {
            console.log('left - down : you did not match 4...yet');
        }
    };
    temp_win_count = 1;

    // diagonal : right - down
    for(var r = row, c = col; r < test_array[row].length && c < test_array[row].length; r++, c++){
        if(test_array[r+1][c+1] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                break;
            }
        } else {
            console.log('right - down : you did not match 4...yet');
        }
    };

    //diagonal : left - up
    for(var r = row, c = col; r > 0 && c > 0; r--, c--){
        if(test_array[r-1][c-1] === class_player1) {
            temp_win_count++;
            if (temp_win_count === 4) {
                console.log('You won the game!');
                break;
            }
        } else {
            console.log('left - up : you did not match 4...yet');
        }
    };
};








