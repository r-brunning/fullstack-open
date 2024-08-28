import { useState } from 'react'
import { Statistics } from './Statistics';
import { Button } from './Button';

export const GOOD = "good";
export const NEUTRAL = "neutral";
export const BAD = "bad";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0, all: 0, average: 0, positive: 0 });

  const handleClick = (type) => {
    const newFeedback = { ...feedback, [type]: feedback[type] + 1, all: feedback.all + 1 };
    newFeedback.average = (newFeedback.good - newFeedback.bad) / newFeedback.all;
    newFeedback.positive = (newFeedback.good / newFeedback.all) * 100;

    setFeedback(newFeedback);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button type={GOOD} onClick={() => handleClick(GOOD)} />
      <Button type={NEUTRAL} onClick={() => handleClick(NEUTRAL)} />
      <Button type={BAD} onClick={() => handleClick(BAD)} />

      <h2>statistics</h2>
      <Statistics 
        good={feedback.good} 
        neutral={feedback.neutral} 
        bad={feedback.bad} 
        all={feedback.all} 
        average={feedback.average} 
        positive={feedback.positive} 
      />
    </div>
  )
}

export default App;
