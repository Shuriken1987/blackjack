class Player {
    constructor() {
        this.playerFirstCard = document.querySelector('#firstCard');
        this.playerSecondCard = document.querySelector('#secondCard');
        this.hand = [];
    }

    cards() {
        this.hand.push(deck.getRandomCard());
        this.playerFirstCard.setAttribute('src', game.cardImage());
        this.playerFirstCard.style.display = 'block';
        setTimeout(() => {
            this.hand.push(deck.getRandomCard());
            this.playerSecondCard.setAttribute('src', game.cardImage());
            this.playerSecondCard.style.display = 'block';
            game.playerSum();
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
}

let player = new Player();