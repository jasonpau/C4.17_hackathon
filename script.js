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


    // diagonal : right - up

    // diagonal : right - down

    // diagonal : left - up

    // diagonal : left - down


