class CheckWin {
    constructor() {
        this.messageEl = document.querySelector("#message-el");
    }
    closer() {
        this.blackjack = 21;
        this.numbers = [player.sum(), dealer.sum()];
        this.closest = this.numbers.reduce((prev, curr) => {
            return (Math.abs(curr - this.blackjack) < Math.abs(prev - this.blackjack) ? curr : prev);
        });
        if (this.closest === player.sum() && this.closest !== dealer.sum()) {
             this.messageEl.innerHTML = 'You won';
             bet.whoWonChips();
        } else if (this.closest === dealer.sum() && this.closest !== player.sum()) {
            this.messageEl.innerHTML = 'You lost';
            bet.whoWonChips();
        } else {
            this.messageEl.innerHTML = 'Draw';
            bet.whoWonChips();
        }
        return this.messageEl.innerHTML;
    }

    checkWinn() {
        if (player.isAlive && dealer.isAlive) {
            this.closer();
        } else if (player.isAlive && dealer.isAlive === false) {
            this.messageEl.innerHTML = 'You won';
            bet.whoWonChips();
        } else if (player.isAlive === false && dealer.isAlive) {
          this.messageEl.innerHTML = 'You lost';
          bet.whoWonChips();
        } else {
            this.messageEl.innerHTML = 'Draw';
            bet.whoWonChips();
        }
         return this.messageEl.innerHTML;
    }
}

let checkWin = new CheckWin();