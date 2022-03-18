(function () {
    class Game {
        constructor() {
            this.newCardBtn = document.querySelector('.newCardBtn');
            this.standBtn = document.querySelector('.stand');
            this.newGameBtn = document.querySelector('.newGameBtn');
        }

        init() {
            this.newGameListener = () => this.newGame();
            this.newGameBtn.addEventListener('click', this.newGameListener);
            this.newCardListener = () => this.hit();
            this.newCardBtn.addEventListener('click', this.newCardListener);
            this.standBtn.addEventListener('click', () => this.stand());
        }

        newGame() {
            this.removeTable();
            bet.clicks();
            this.newRound();
        }

        drawCard() {
            player.isAlive = true;
            player.cards();
            dealer.isAlive = true;
            dealer.cards();
            this.standBtn.style.display = 'block';
            this.newCardBtn.style.display = 'block';
        }

        hit() {
            player.isAlive = true;
            player.newCard();
            if (player.sum() > 21) {
                this.standBtn.style.display = 'none';
                this.newCardBtn.style.display = 'none';
                player.isAlive = false;
                setTimeout(() => {
                    this.stand();
                }, 1000);
            }
        }

        stand() {
            dealer.hand.push(dealer.hiden);
            dealer.sum();
            dealer.isAlive = true;
            this.standBtn.style.display = 'none';
            this.newCardBtn.style.display = 'none';
            dealer.front.style.transform = 'perspective(900px) rotateY(0)';
            dealer.back.style.transform = 'perspective(900px) rotateY(180deg)';
            let loop = setInterval(() => {
                if (dealer.sum() < 17 && player.isAlive === true) {
                    dealer.isAlive = true;
                    dealer.newCard();
                    // dealer.sum();
                } else if (dealer.sum() < 22 && dealer.sum() >= 17 ) {
                    dealer.isAlive = true;
                    checkWin.checkWinn();
                    clearInterval(loop);
                    setTimeout(() => this.newGameBtn.style.display = 'block', 1000);
                } else if (dealer.sum() < 17 && player.isAlive === false) {
                    dealer.isAlive = true;
                    clearInterval(loop);
                    checkWin.checkWinn();
                    setTimeout(() => this.newGameBtn.style.display = 'block', 1000);
                } else {
                    dealer.isAlive = false;
                    clearInterval(loop);
                    checkWin.checkWinn();
                    setTimeout(() => this.newGameBtn.style.display = 'block', 1000);
                }
            }, 2000);
        }

        removeTable() {
            this.newGameBtn.style.display = 'none';
            player.isAlive = false;
            dealer.isAlive = false;
            player.hand = [];
            dealer.hand = [];
            deck.drawnCards = [];
            dealer.front.style.transform = 'perspective(900px) rotateY(180)';
            dealer.back.style.transform = 'perspective(900px) rotateY(0deg)';
            checkWin.messageEl.innerHTML = '';
            player.scoreView = document.querySelector('#playerSum');
            dealer.scoreView = document.querySelector('#dealerSum');
            player.score = 0;
            dealer.score = 0;
            player.scoreView.innerHTML = player.score;
            dealer.scoreView.innerHTML = dealer.score;
            player.playerFirstCard.style.display = 'none';
            player.playerSecondCard.style.display = 'none';
            dealer.dealerFirstCardFront.style.display = 'none';
            dealer.dealerFirstCardBack.style.display = 'none';
            dealer.dealerSecondCard.style.display = 'none';
            this.newCards = document.querySelectorAll('.newCard');
            for (let i = 0; i < this.newCards.length; i++) {
                this.newCards[i].remove();
            }
            let betPlaced = document.querySelector('.betPlaced');
            betPlaced.setAttribute('src', '');
            betPlaced.style.visibility = 'hidden';
            bet.value = 0;

        }

        newRound() {
            this.counter = 5;
            let loop = setInterval(() => {
                this.counter--;
                checkWin.messageEl.innerHTML = 'Place your bets: ' + ' ' + this.counter;
                if (this.counter <= 0) {
                    clearInterval(loop);
                    checkWin.messageEl.innerHTML = '';
                    bet.removeClicks();
                    this.drawCard();
                }
            }, 1000);
            // console.log(bet.gameOver)
            // if (parseInt(bet.playerCredit.innerHTML) <= 0) {
            //     this.newGameBtn.removeEventListener('click', this.newGameListener);  // need to fix
            // }
        }
    }

    let game = new Game();
    game.init();
})();

