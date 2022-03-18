class Player {
    constructor() {
        this.playerFirstCard = document.querySelector('#firstCard');
        this.playerSecondCard = document.querySelector('#secondCard');
        this.hand = [];
        this.score = 0;
        this.isAlive = false;
    }

    cards() {
        this.hand.push(deck.getRandomCard());
        this.playerFirstCard.setAttribute('src', deck.cardImage());
        this.playerFirstCard.style.display = 'block';
        this.sum();
        setTimeout(() => {
            this.hand.push(deck.getRandomCard());
            this.playerSecondCard.setAttribute('src', deck.cardImage());
            this.playerSecondCard.style.display = 'block';
            this.sum();
        }, 500);
    }

    newCard() {
        this.playerDiv = document.querySelector('.player');
        this.playerNewCard = document.createElement('img');
        this.playerNewCard.className = 'newCard animate__fadeInTopRight';
        this.playerDiv.appendChild(this.playerNewCard);
        this.hand.push(deck.getRandomCard());
        this.playerNewCard.setAttribute('src', deck.cardImage());
        this.playerNewCard.style.display = 'block';
        this.sum();
    }

    cardValue() {
        this.value = [];
        // let ace = this.value.includes('ace');
        for (let i = 0; i < this.hand.length; i++) {
            this.value.push(this.hand[i].value);
            if (this.value[i] === 'ace') {
                (this.score > 21) ? this.value[i] = 1 : this.value[i] = 11;
            } else if (isNaN(this.value[i])) {
                this.value[i] = 10;
            } else {
                this.value[i] = this.hand[i].value;
            }
        }
        return this.value.reduce((partialSum, a) => partialSum + a, 0);
    }

    sum() {
        this.scoreView = document.querySelector('#playerSum');
        this.score = this.cardValue();
        this.scoreView.innerHTML = this.score;
        return this.scoreView.innerHTML;
    }
}

let player = new Player();