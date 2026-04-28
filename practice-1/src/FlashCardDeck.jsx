import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import './FlashCardDeck.css';

const FlashCardDeck = ({ flashcards, onCorrect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex(prev => (prev + 1) % flashcards.length);
  const currentCard = flashcards[currentIndex];

  return (
    <div className="flashcard-deck">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
        />
      </div>

      <Flashcard
        question={currentCard.question}
        answer={currentCard.answer}
        onCorrect={() => {
          onCorrect();
          handleNext();
        }}
        onNext={handleNext}
      />
    </div>
  );
};

export default FlashCardDeck;