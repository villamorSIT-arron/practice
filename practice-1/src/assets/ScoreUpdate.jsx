const handleCheckAnswer = () => {
    if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
    setIsCorrect(true);
    onScoreUpdate(true); // Increment score
    } else {
    setIsCorrect(false);
    onScoreUpdate(false); // Keep score as is
    }
    };