class Deck {
    cards;
    cardsCopy;
    constructor(cards) {
        this.cards = cards;
        this.cardsCopy = [].concat(this.cards);
        this.drawnCards = [];
    }

    getRandomCard() {
        this.card = '';
        if (this.cards.length < 10) {
            this.cards = [].concat(this.cardsCopy);
            this.drawnCards = [];
        }
        let rand = Math.floor(Math.random() * this.cards.length);
        this.card = this.cards[rand];
        this.drawnCards.push(this.card);
        this.cards.splice(rand, 1);
        return this.card;
    }
}

let deck = new Deck(allCards);

