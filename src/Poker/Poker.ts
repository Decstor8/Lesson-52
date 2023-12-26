import { Card } from './Card';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        if (this.RoyalFlush()) {
            return "Роял-флэш";

        }
    }

    private RoyalFlush() {
        const royal = [10, 11, 12, 13, 14];
    }

}

export default PokerHand;
