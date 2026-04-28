import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer, onCorrect, onNext }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">
        <p>{question}</p>
      </div>
      <div className="back">
        <p>{answer}</p>
        <div className="buttons">
          <button className="correct-btn" onClick={onCorrect}>Correct</button>
          <button className="next-btn" onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;