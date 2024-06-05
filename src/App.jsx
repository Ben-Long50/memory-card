import { useState } from 'react';
import Header from './Header';
import Gameboard from './Gameboard';
import Footer from './Footer';
import './styles/main.css';

export default function App() {
  const [cardCount, setCardCount] = useState(16);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function editCount(value) {
    setCardCount(value);
  }

  function updateScore(value) {
    setScore(value);
  }

  function updateHighScore(value) {
    setHighScore(value);
  }

  return (
    <div className="main-layout">
      <Header
        count={cardCount}
        score={score}
        highScore={highScore}
        editCount={editCount}
      />
      <Gameboard
        count={cardCount}
        score={score}
        updateScore={updateScore}
        highScore={highScore}
        updateHighScore={updateHighScore}
      />
      <Footer />
    </div>
  );
}
