import React, { useState, useEffect } from 'react';

const Timer = ({ timeLimit, onTimeUp }) => {
const [secondsLeft, setSecondsLeft] = useState(timeLimit);
useEffect(() => {
if (secondsLeft > 0) {
const timerId = setInterval(() => {
setSecondsLeft((prevTime) => prevTime - 1);
}, 1000);
return () => clearInterval(timerId);
} else {
onTimeUp(); // Notify when time is up
}
}, [secondsLeft, onTimeUp]);
return <p>{secondsLeft} seconds left</p>;
};