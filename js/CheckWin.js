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
            return this.messageEl.innerHTML = 'You won';
        } else if (this.closest === game.dealerSum() && this.closest !== game.playerSum()) {
            return this.messageEl.innerHTML = 'You lost';
        } else {
            return this.messageEl.innerHTML = 'Draw';
        }
    }

    checkWinn() {
        if (game.playerIsAlive && game.dealerIsAlive) {
            this.closer();
        } else if (game.playerIsAlive && game.dealerIsAlive === false) {
            return this.messageEl.innerHTML = 'You won';
        } else if (game.playerIsAlive === false && game.dealerIsAlive) {
            return this.messageEl.innerHTML = 'You lost';
        } else {
            return this.messageEl.innerHTML = 'Draw';
        }
    }
}

let checkWin = new CheckWin();