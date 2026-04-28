import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import UploadFile from './UploadFile.jsx';
import './App.css';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);

  const handleFlashcardsGenerated = (cards) => {
    setFlashcards(cards);
  };

  return (
    <div className="App">
      <h1>Flashcards Generator</h1>
      <UploadFile onFlashcardsGenerated={handleFlashcardsGenerated} />
      <div className="flashcards-container">
        {flashcards.length > 0 ? (
          flashcards.map((flashcard, index) => (
            <Flashcard
              key={index}
              question={flashcard.question}
              answer={flashcard.answer}
            />
          ))
        ) : (
          <p>No flashcards generated. Please upload a file.</p>
        )}
      </div>
    </div>
  );
};

export default App;