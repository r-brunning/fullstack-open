import { Result, GOOD, NEUTRAL, BAD } from "./App";

export const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all == 0) return <p>No feedback given</p>
  return (
    <>
      <Result type={GOOD} result={good} />
      <Result type={NEUTRAL} result={neutral} />
      <Result type={BAD} result={bad} />
      <Result type="all" result={all} />
      <Result type="average" result={average} />
      <Result type="positive" result={positive} />
    </>
  );
};
