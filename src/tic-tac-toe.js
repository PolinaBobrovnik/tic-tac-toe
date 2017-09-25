class TicTacToe {
    constructor() {
        var currSym = 'x';
        var fieldValue = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currSym;
    }

    nextTurn(rowIndex, columnIndex) {
        this.fieldValue[rowIndex][columnIndex] = this.currSym;
        (this.currSym == 'x')?(this.currSym = 'o'):(this.currSym = 'x');        
    }

    isFinished() {
       return ((this.getWinner() !== null) || (this.isDraw() == true));
    }

    getWinner() {
        var winner = null;
        for (var i = 0; i<3; i++){
            if(this.fieldValue[i][0] !== null) &&
              (this.fieldValue[i][0] == this.fieldValue[i][1]) &&
              (this.fieldValue[i][0] == this.fieldValue[i][2]) {
                winner = this.fieldValue[i][0];
            }  
        }
        
        for (var j = 0; j<3; j++){
            if(this.fieldValue[0][j] !== null) &&
              (this.fieldValue[0][j] == this.fieldValue[0][j]) &&
              (this.fieldValue[0][j] == this.fieldValue[0][j]) {
                winner = this.fieldValue[0][j];
            }
        }
        return winner;
    }

    noMoreTurns() {
        var ans = true;
        for (var i = 0; i<3; i++){
	        for (var j = 0; j<3; j++){
	            if(this.fieldValue[i][j] == null) {
	                ans = false;
                }
            }
        }
        return ans;
    }

    isDraw() {
     return ((this.noMoreTurns() == true) && (this.getWinner() == null));
    }

    getFieldValue(rowIndex, colIndex) {
        return (this.fieldValue[rowIndex][colIndex]);
    }
}

module.exports = TicTacToe;
