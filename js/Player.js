class Player {
    constructor() {
        this.playerFirstCard = document.querySelector('#firstCard');
        this.playerSecondCard = document.querySelector('#secondCard');
        this.hand = [];
        this.score = 0;
    }

    cards() {
        this.hand.push(deck.getRandomCard());
        this.playerFirstCard.setAttribute('src', game.cardImage());
        this.playerFirstCard.style.display = 'block';
        setTimeout(() => {
            this.hand.push(deck.getRandomCard());
            this.playerSecondCard.setAttribute('src', game.cardImage());
            this.playerSecondCard.style.display = 'block';
            this.sum();
        }, 500);
    }

    newCard() {
        this.playerDiv = document.querySelector('.player');
        this.playerNewCard = document.createElement('img');
        this.playerNewCard.className = 'newCard';
        this.playerDiv.appendChild(this.playerNewCard);
        this.hand.push(deck.getRandomCard());
        this.playerNewCard.setAttribute('src', game.cardImage());
        this.playerNewCard.style.display = 'block';
    }
    cardValue(){
        this.value = 0;
        for (let i = 0; i < this.hand.length; i++) {
            if (this.hand[i].value === 'ace') {
                if (this.score < 11) {
                    this.value += 11;
                } else {
                    this.value += 1;
                }
            } else if (isNaN(this.hand[i].value)) {
                this.value += 10;
            } else {
                this.value +=  this.hand[i].value;
            }
        }
        return this.value;
    }
    sum() {
        this.scoreView = document.querySelector('#playerSum');
        this.score = this.cardValue();
        this.scoreView.innerHTML = this.score;
        return this.scoreView.innerHTML;
    }
}

let player = new Player();