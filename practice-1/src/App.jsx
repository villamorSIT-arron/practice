import React, { useState } from 'react';
import FlashCardDeck from './FlashCardDeck.jsx';
import UploadFile from './UploadFile.jsx';
import Timer from './Timer.jsx';
import ScoreTracking from './ScoreTracking.jsx';
import './App.css';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [score, setScore] = useState(0);
  const [reviewStarted, setReviewStarted] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleFileUpload = (cards) => {
    setFlashcards(cards);
    setScore(0);
    setReviewStarted(true);
  };

  const handleCorrect = () => setScore(prev => prev + 1);

  const handleRestart = () => {
    setScore(0);
    setReviewStarted(false);
    setResetKey(prev => prev + 1); // triggers re-mount of deck & timer
  };

  return (
    <div className="App">
      <header className="hero">
        <div className="header-bar">
          <h1>RECALL</h1>
          <nav>
            <a href="#">FAQ</a>
          </nav>
        </div>
        <h2>Your knowledge is your edge</h2>
        <p>Upload any file and start reviewing flashcards instantly.</p>
      </header>

      <UploadFile onFlashcardsGenerated={handleFileUpload} />

      {reviewStarted && (
        <div className="controls">
          <Timer key={resetKey} active={reviewStarted} />
          <ScoreTracking score={score} />
          <button className="restart-btn" onClick={handleRestart}>
            Restart Review
          </button>
        </div>
      )}

      {flashcards.length > 0 && reviewStarted && (
        <FlashCardDeck key={resetKey} flashcards={flashcards} onCorrect={handleCorrect} />
      )}

      {flashcards.length === 0 && reviewStarted && (
        <p className="no-cards">Upload a file to generate flashcards.</p>
      )}
    </div>
  );
};

export default App;