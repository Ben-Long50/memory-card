import { useState, useEffect } from 'react';
import Card from './Card';
import './main.css';

export default function Gameboard() {
  const [cardArray, setCardArray] = useState([]);
  const [count, setCount] = useState(12);

  useEffect(() => {
    const initialCardArray = Array.from({ length: count }, (_, index) => (
      <Card key={index} handleClick={handleClick} />
    ));
    setCardArray(initialCardArray);
  }, [count]);

  async function handleClick() {
    console.log(cardArray);
    const cardArrayCopy = await [...cardArray];
    const shuffledArray = [];
    console.log(cardArrayCopy);
    while (cardArrayCopy.length > 0) {
      const index = Math.floor(Math.random() * cardArrayCopy.length);
      shuffledArray.push(cardArrayCopy.splice(index, 1));
    }
    setCardArray(shuffledArray);
  }

  return <div className="gameboard">{cardArray}</div>;
}
