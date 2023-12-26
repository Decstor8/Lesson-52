import React from "react";


interface Props {
    rank: number | string;
    suit: string;
}
const Card: React.FC<Props> = ({rank, suit}) => {
        if (suit === 'diams') {
            return ('♦');
        } else if (suit === 'hearts') {
            return ('♥');
        } else if (suit === 'clubs') {
            return ('♣');
        } else if (suit === 'spades') {
            return ('♠');
        }

        return (
            <span className="card rank-k diams">
                <span className="rank">{rank}</span>
                <span className="suit">{suit}</span>
            </span>
        );
};

export default Card;