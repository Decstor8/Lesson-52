class Cards {
    public rank: string | number;
    public suit: string;

    constructor(rank: string | number, suit: string) {
        this.rank = rank;
        this.suit = suit;
    }
}

export default Cards;