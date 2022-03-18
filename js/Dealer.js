class Dealer {
    constructor() {
        this.hand = [];
        this.dealerFirstCardFront = document.querySelector('#dealerFirstCardFront');
        this.dealerFirstCardBack = document.querySelector('#dealerFirstCardBack');
        this.dealerSecondCard = document.querySelector('#dealerSecondCard');
        this.front = document.querySelector('.front');
        this.back = document.querySelector('.back');
        this.score = 0;
        this.isAlive = false;
    }

    cards() {
        setTimeout(() => {
            // this.hand.push(deck.getRandomCard());   // old
            this.hiden = deck.getRandomCard();
            this.dealerFirstCardBack.style.display = 'block';
            this.dealerFirstCardBack.setAttribute('src', 'img/backSide.png');
            this.dealerFirstCardFront.setAttribute('src', deck.cardImage());
            // this.dealerFirstCardFront.style.display = 'block';
            setTimeout(() => {
                this.hand.push(deck.getRandomCard());
                this.dealerSecondCard.setAttribute('src', deck.cardImage());
                this.dealerSecondCard.style.display = 'block';
                this.sum();       // erase this if u uncomment first line
            }, 500);
        }, 1000);
    }

    newCard() {
        this.dealerDiv = document.querySelector('.dealer');
        this.dealerNewCard = document.createElement('img');
        this.dealerNewCard.className = 'newCard animate__fadeInTopRight';
        this.dealerDiv.appendChild(this.dealerNewCard);
        this.hand.push(deck.getRandomCard());
        this.dealerNewCard.setAttribute('src', deck.cardImage());
        this.dealerNewCard.style.display = 'block';
        this.sum();
    }
       cardValue(){
         // let ace = this.hand.includes('ace');
         this.value = [];
         for (let i = 0; i < this.hand.length; i++) {
             this.value.push(this.hand[i].value);
             if (this.value[i] === 'ace') {
                 (this.score > 21) ? this.value[i] = 1 : this.value[i] = 11;
            } else if (isNaN(this.value[i])) {
                this.value[i] = 10;
            } else {
                this.value[i] =  this.hand[i].value;
            }
         }
                return this.value.reduce((partialSum, a) => partialSum + a, 0);
    }

    sum() {
        this.scoreView = document.querySelector('#dealerSum');
        dealer.score = dealer.cardValue();
        this.scoreView.innerHTML = dealer.score;
        return this.scoreView.innerHTML;
    }
}

let dealer = new Dealer();