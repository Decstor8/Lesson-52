import React from "react";


interface Props {
    rank: number | string;
    suit: string;
}
const Card: React.FC<Props> = ({rank, suit}) => {
    let suitResult = '';
        if (suit === 'diams') {
            suitResult = '♦';
        } else if (suit === 'hearts') {
            suitResult = '♥';
        } else if (suit === 'clubs') {
            suitResult = '♣';
        } else if (suit === 'spades') {
            suitResult = '♠';
        }

        return (
            <span className="card rank-k diams">
                <span className="rank">{rank}</span>
                <span className="suit">{suitResult}</span>
            </span>
        );
};

export default Card;