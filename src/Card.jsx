import { useState, useEffect } from 'react';
import './main.css';

export default function Card({ handleClick }) {
  const [cardImgUrl, setCardImgUrl] = useState(undefined);
  const [cardName, setCardName] = useState(undefined);

  async function fetchData() {
    const response = await fetch('https://api.scryfall.com/cards/random', {
      mode: 'cors',
    });
    const cardData = await response.json();
    const newCardImgUrl = cardData.image_uris.small;
    const newCardName = cardData.name;
    setCardImgUrl(newCardImgUrl);
    setCardName(newCardName);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <img
      className="img-card"
      src={cardImgUrl}
      alt={cardName}
      onClick={handleClick}
    />
  );
}
