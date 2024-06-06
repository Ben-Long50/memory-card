import { useState } from 'react';

export default function Header({ count, score, highScore, editCount }) {
  const [input, setInput] = useState(count);

  return (
    <header className="header font">
      <div className="header-title-container">
        <h1 className="header-title">MTG Memorization Challenge</h1>
      </div>
      <div className="header-info-container">
        <div className="header-input-container">
          <label
            className="header-label"
            htmlFor="count"
            style={{ marginLeft: 'auto' }}
          >
            Card Count:
          </label>
          <input
            type="text"
            id="count"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                editCount(input);
              }
            }}
          />
        </div>
        <h2 className="header-label">Current Score: {score}</h2>
        <h2 className="header-label">High Score: {highScore}</h2>
      </div>
    </header>
  );
}
