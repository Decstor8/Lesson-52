import { useState } from 'react';
import './App.css';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';

function App() {
  const [cards, setCard] = useState<Card[]>([]);

    const createCards = () => {
        const deckCard = new CardDeck();
        const createCards = deckCard.getCards(5);
        setCard(createCards);
    };

    return (
        <div className='main-block'>
            <button onClick={createCards}>Раздать карты</button>
            <div className="playingCards faceImages">
                {cards.map((card, id) => (
                    <span key={id} className={`card rank-${card.rank} ${card.suit}`}>
            <span className="rank">{card.rank}</span>
            <span className="suit">{card.suit}</span>
          </span>
                ))}
                {!cards.length && <p>Нажмите кнопку "Раздать карты" для начала игры.</p>}
            </div>
        </div>
    );
}

export default App;
