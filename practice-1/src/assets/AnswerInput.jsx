import React, { useState } from 'react';
const Flashcard = ({ question, answer }) => {
const [showAnswer, setShowAnswer] = useState(false);
const [userAnswer, setUserAnswer] = useState('');
const [isCorrect, setIsCorrect] = useState(null);
const handleAnswerChange = (e) => {
setUserAnswer(e.target.value);
};
const handleCheckAnswer = () => {
if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
setIsCorrect(true);
} else {
setIsCorrect(false);
}
};

return (
<div className="flashcard">
<h3>{question}</h3>
<input
type="text"
value={userAnswer}
onChange={handleAnswerChange}
placeholder="Type your answer"
/>
<button onClick={handleCheckAnswer}>Check Answer</button>
{isCorrect !== null && (
<p>{isCorrect ? 'Correct!' : `Incorrect! The answer is: ${answer}`}</p>
)}
{showAnswer && <p>Answer: {answer}</p>}
{!showAnswer && <p>Click to reveal answer</p>}
</div>
);
};
export default Flashcard;