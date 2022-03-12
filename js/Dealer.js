class Dealer {
    constructor() {
        this.hand = [];
        this.dealerFirstCardFront = document.querySelector('#dealerFirstCardFront');
        this.dealerFirstCardBack = document.querySelector('#dealerFirstCardBack');
        this.dealerSecondCard = document.querySelector('#dealerSecondCard');
        this.front = document.querySelector('.front');
        this.back = document.querySelector('.back');
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
}

let dealer = new Dealer();