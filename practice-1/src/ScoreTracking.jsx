import React from 'react';
import './ScoreTracking.css';

const ScoreTracking = ({ score }) => (
  <div className="score-tracking">
    Score: <strong>{score}</strong>
  </div>
);

export default ScoreTracking;