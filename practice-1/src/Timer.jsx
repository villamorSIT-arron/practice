import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ active }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [active]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return <div className="timer">Time: {minutes}:{secs < 10 ? `0${secs}` : secs}</div>;
};

export default Timer;