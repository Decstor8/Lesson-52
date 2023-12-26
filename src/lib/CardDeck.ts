import Card from './Card';

class CardDeck {
    private deckCard: Card[];

    constructor() {
        this.deckCard = [];

        const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suit = ['diams', 'hearts', 'clubs', 'spades'];

        for (const oneSuit of suit) {
            for (const oneRank of rank) {
                const newCard = new Card(oneRank, oneSuit);
                this.deckCard.push(newCard);
            }
        }
    }

    public getCard(): Card {
        const randomOneCard = Math.floor(Math.random() * this.deckCard.length);
        return this.deckCard.splice(randomOneCard, 1)[0];
    }

    public getCards(howMany: number) {
        const cards = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;