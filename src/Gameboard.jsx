import { useState, useEffect } from 'react';
import Card from './Card';
import './styles/main.css';

export default function Gameboard({
  count,
  score,
  updateScore,
  highScore,
  updateHighScore,
}) {
  const [cardArray, setCardArray] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch('https://api.scryfall.com/cards/random', {
        mode: 'cors',
      });

      const cardData = await response.json();
      return {
        id: cardData.id,
        name: cardData.name,
        image: cardData.image_uris.normal,
      };
    } catch {
      return null;
    }
  }

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    async function fetchCards() {
      const fetchedArray = [];
      while (fetchedArray.length < count) {
        let cardInfo = await fetchData();
        fetchedArray.forEach((item) => {
          if (item.id === cardInfo.id) {
            cardInfo = null;
          }
        });
        if (cardInfo !== null) {
          fetchedArray.push(cardInfo);
          setLoadedCount(fetchedArray.length);
        }
      }
      console.log(fetchedArray);
      setLoading(false);
      setCardArray(fetchedArray);
    }
    fetchCards();
    updateScore(0);
  }, [count]);

  function storeKey(id) {
    setClickedCards([...clickedCards, id]);
  }

  function checkScore(id) {
    if (!clickedCards.includes(id)) {
      const newScore = score + 1;
      updateScore(newScore);
      if (newScore > highScore) {
        updateHighScore(newScore);
      }
    } else {
      updateScore(0);
      setClickedCards([]);
    }
  }

  function handleClick() {
    const cardArrayCopy = JSON.parse(JSON.stringify(cardArray));
    const shuffledArray = [];
    while (cardArrayCopy.length > 0) {
      const index = Math.floor(Math.random() * cardArrayCopy.length);
      shuffledArray.push(cardArrayCopy.splice(index, 1)[0]);
    }
    setCardArray(shuffledArray);
  }
  return (
    <div className="gameboard-container">
      <div
        className="loading font"
        style={loading ? { display: 'block' } : { display: 'none' }}
      >
        Loading {loadedCount + ' / ' + count}
      </div>
      <div
        className="gameboard"
        style={loading ? { display: 'none' } : { display: 'grid' }}
      >
        {cardArray.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            imageUrl={card.image}
            handleClick={handleClick}
            storeKey={storeKey}
            checkScore={checkScore}
          />
        ))}
      </div>
    </div>
  );
}
