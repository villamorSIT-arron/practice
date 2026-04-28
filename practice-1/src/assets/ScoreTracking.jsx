import React, { useState } from 'react';
import UploadFile from './components/UploadFile/UploadFile';
import Flashcard from './components/Flashcard/Flashcard';
import './App.css';
const App = () => {
const [flashcards, setFlashcards] = useState([]);
const [score, setScore] = useState(0);
const [totalQuestions, setTotalQuestions] = useState(0);
const handleFlashcardsGenerated = (cards) => {
setFlashcards(cards);
setTotalQuestions(cards.length);
};
const handleScoreUpdate = (isCorrect) => {
if (isCorrect) {
setScore((prevScore) => prevScore + 1);
}
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
onScoreUpdate={handleScoreUpdate}
/>
))
) : (
<p>No flashcards generated. Please upload a file.</p>
)}
</div>
{score > 0 && (
<div className="score">
<p>
Score: {score} / {totalQuestions}
</p>
</div>
)}
</div>
);
};
export default App;