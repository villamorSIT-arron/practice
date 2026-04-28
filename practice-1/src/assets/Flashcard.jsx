import React from 'react';
import './Flashcard.css';
const Flashcard = ({ question, answer }) => {
return (
<div className="flashcard">
<h3>Question: {question}</h3>
<p>Answer: {answer}</p>
</div>
);
};
export default Flashcard;