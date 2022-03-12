class Game {
    constructor() {
        this.newCardBtn = document.querySelector('.newCardBtn');
        this.standBtn = document.querySelector('.stand');
        this.newGameBtn = document.querySelector('.newGameBtn');
        this.sumPlayer = 0;
        this.sumDealer = 0;
        this.playerIsAlive = false;
        this.dealerIsAlive = false;
    }

    init() {
        this.newGameListener = () => this.newGame();
        this.newGameBtn.addEventListener('click', this.newGameListener);
        this.listener = () => this.hit();
        this.standBtn.addEventListener('click', () => this.stand());
    }

    cardImage() {
        this.path = '';
        for (let i = 0; i < deck.drawnCards.length; i++) {
            this.path = 'img/' + deck.drawnCards[i].sign + '_' + deck.drawnCards[i].value + '.png';
        }
        return this.path;
    }

    newGame() {
        this.newCardBtn.addEventListener('click', this.listener);
        this.removeTable();
        this.drawCard();
    }

    drawCard() {
        this.playerIsAlive = true;
        player.cards();
        this.dealerIsAlive = true;
        dealer.cards();
        this.newGameBtn.style.display = 'none';
        this.standBtn.style.display = 'block';
        this.newCardBtn.style.display = 'block';
    }

    hit() {
        this.playerIsAlive = true;
        player.newCard();
        this.playerSum();
        if (this.playerSum() > 21) {
            this.newCardBtn.removeEventListener('click', this.listener);
            this.playerIsAlive = false;
            setTimeout(() => {
                this.stand();
                this.newGameBtn.style.display = 'block';
                this.standBtn.style.display = 'none';
                this.newCardBtn.style.display = 'none';
            }, 1000);
        }
    }

    stand() {
        this.dealerIsAlive = true;
        this.newGameBtn.style.display = 'none';
        this.standBtn.style.display = 'none';
        this.newCardBtn.style.display = 'none';
        dealer.front.style.transform = 'perspective(900px) rotateY(0)';
        dealer.back.style.transform = 'perspective(900px) rotateY(180deg)';
        this.dealerSum();
        let loop = setInterval(() => {
            if (this.dealerSum() < 17 && this.playerIsAlive === true) {
                this.dealerIsAlive = true;
                dealer.newCard();
                this.dealerSum();
            } else if (this.dealerSum() < 22 && this.dealerSum() >= 17) {
                this.dealerIsAlive = true;
                clearInterval(loop);
                if (this.playerIsAlive === false) {
                    checkWin.checkWinn();
                    checkWin.messageEl.innerHTML = 'Dealer won';
                } else {
                    checkWin.checkWinn();
                }
            } else if (this.dealerSum() < 17 && this.playerIsAlive === false) {
                this.dealerIsAlive = true;
                clearInterval(loop);
                checkWin.checkWinn();
            } else {
                this.dealerIsAlive = false;
                clearInterval(loop);
                checkWin.checkWinn();
            }
            this.standBtn.style.display = 'none';
            this.newCardBtn.style.display = 'none';
            this.newGameBtn.style.display = 'block';
        }, 2000);
    }

    playerSum() {
        this.playerSumView = document.querySelector('#playerSum');
        let value = '';
        player.hand.forEach((element) => {
            if (element.value === 'ace') {
                if (this.sumPlayer < 11) {
                    value = 11;
                    this.sumPlayer += value;
                } else {
                    value = 1;
                    this.sumPlayer += value
                }
            } else if (isNaN(element.value)) {
                value = 10;
                this.sumPlayer += value
            } else {
                value = element.value;
                this.sumPlayer += value
            }
        });
        player.hand.splice(0, 2);
        this.playerSumView.innerHTML = this.sumPlayer;
        return this.playerSumView.innerHTML;
    }

    dealerSum() {
        this.dealerSumView = document.querySelector('#dealerSum');
        let value = '';
        dealer.hand.forEach((element) => {
            if (element.value === 'ace') {
                if (this.sumDealer < 11) {
                    value = 11;
                    this.sumDealer += value;
                } else {
                    value = 1;
                    this.sumDealer += value
                }
            } else if (isNaN(element.value)) {
                value = 10;
                this.sumDealer += value
            } else {
                value = element.value;
                this.sumDealer += value
            }
        });
        dealer.hand.splice(0, 2);
        this.dealerSumView.innerHTML = this.sumDealer;
        return this.dealerSumView.innerHTML;
    }

    removeTable() {
        this.playerIsAlive = false;
        this.dealerIsAlive = false;
        player.hand = [];
        dealer.hand = [];
        deck.drawnCards = [];
        dealer.front.style.transform = 'perspective(900px) rotateY(180)';
        dealer.back.style.transform = 'perspective(900px) rotateY(0deg)';
        checkWin.messageEl.innerHTML = '';
        this.playerSumView = document.querySelector('#playerSum');
        this.dealerSumView = document.querySelector('#dealerSum');
        this.sumPlayer = 0;
        this.playerSumView.innerHTML = this.sumPlayer;
        this.sumDealer = 0;
        this.dealerSumView.innerHTML = this.sumDealer;
        player.playerFirstCard.style.display = 'none';
        player.playerSecondCard.style.display = 'none';
        dealer.dealerFirstCardFront.style.display = 'none';
        dealer.dealerFirstCardBack.style.display = 'none';
        dealer.dealerSecondCard.style.display = 'none';
        this.newCards = document.querySelectorAll('.newCard');
        for (let i = 0; i < this.newCards.length; i++) {
            this.newCards[i].remove();
        }
    }
}

let game = new Game();
game.init();

