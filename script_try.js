var test_array =
    [[0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 1]];

var temp_win_count = 1;
var class_player1 = 1;  // check player1

function check_for_win(row, col){
    // row : to right end
    for(var c = col; c < test_array[row].length; c++){
        if(test_array[row][c+1] === class_player1){
            temp_win_count++;
            if(temp_win_count === 4){
                console.log('You won the game!');
                break;
            } else {
                console.log('to right: you did not match 4');
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
            }
        }
        for(var r = row; r < test_array[col].length; r++){
            if(test_array[col][r+1] === class_player1){
                temp_win_count++;
                if(temp_win_count === 4){
                    console.log('You won the game');
                    break;
                }else{
                    console.log('you did not match 4');
                }
            }
        }
    }
}
// check_for_win(4, 0);

// col : upward

// col : downward

// diagonal : right - up

// diagonal : right - down

// diagonal : left - up

// diagonal : left - down