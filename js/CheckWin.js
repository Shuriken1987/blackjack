class CheckWin {
    constructor() {
        this.messageEl = document.querySelector("#message-el");
    }

    closer() {
        this.blackjack = 21;
        this.numbers = [game.playerSum(), game.dealerSum()];
        this.closest = this.numbers.reduce((prev, curr) => {
            return (Math.abs(curr - this.blackjack) < Math.abs(prev - this.blackjack) ? curr : prev);
        });
        if (this.closest === game.playerSum() && this.closest !== game.dealerSum()) {
             // game.gameOver = true;
             this.messageEl.innerHTML = 'You won';
             bet.whoWonChips();
        } else if (this.closest === game.dealerSum() && this.closest !== game.playerSum()) {
             // game.gameOver = true;
            this.messageEl.innerHTML = 'You lost';
            bet.whoWonChips();
        } else {
             // game.gameOver = true;
            this.messageEl.innerHTML = 'Draw';
            bet.whoWonChips();
        }
        return this.messageEl.innerHTML;
    }

    checkWinn() {
        if (game.playerIsAlive && game.dealerIsAlive) {
            this.closer();
        } else if (game.playerIsAlive && game.dealerIsAlive === false) {
             // game.gameOver = true;
            this.messageEl.innerHTML = 'You won';
            bet.whoWonChips();
        } else if (game.playerIsAlive === false && game.dealerIsAlive) {
            // game.gameOver = true;
          this.messageEl.innerHTML = 'You lost';
          bet.whoWonChips();
        } else {
             // game.gameOver = true;
            this.messageEl.innerHTML = 'Draw';
            bet.whoWonChips();
        }
         return this.messageEl.innerHTML;
    }
}

let checkWin = new CheckWin();