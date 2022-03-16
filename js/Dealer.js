class Dealer {
    constructor() {
        this.hand = [];
        this.dealerFirstCardFront = document.querySelector('#dealerFirstCardFront');
        this.dealerFirstCardBack = document.querySelector('#dealerFirstCardBack');
        this.dealerSecondCard = document.querySelector('#dealerSecondCard');
        this.front = document.querySelector('.front');
        this.back = document.querySelector('.back');
        this.score = 0;
    }

    cards() {
        setTimeout(() => {
            this.hand.push(deck.getRandomCard());
            this.dealerFirstCardBack.style.display = 'block';
            this.dealerFirstCardBack.setAttribute('src', 'img/backSide.png');
            this.dealerFirstCardFront.setAttribute('src', game.cardImage());
            this.dealerFirstCardFront.style.display = 'block';
            setTimeout(() => {
                this.hand.push(deck.getRandomCard());
                this.dealerSecondCard.setAttribute('src', game.cardImage());
                this.dealerSecondCard.style.display = 'block';
            }, 500);
        }, 1000);
    }

    newCard() {
        this.dealerDiv = document.querySelector('.dealer');
        this.dealerNewCard = document.createElement('img');
        this.dealerNewCard.className = 'newCard';
        this.dealerDiv.appendChild(this.dealerNewCard);
        this.hand.push(deck.getRandomCard());
        this.dealerNewCard.setAttribute('src', game.cardImage());
        this.dealerNewCard.style.display = 'block';
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
        this.scoreView = document.querySelector('#dealerSum');
        dealer.score = dealer.cardValue();
        this.scoreView.innerHTML = dealer.score;
        return this.scoreView.innerHTML;
    }
}

let dealer = new Dealer();