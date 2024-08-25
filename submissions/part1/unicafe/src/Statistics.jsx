import { GOOD, NEUTRAL, BAD } from "./App";
import { StatisticLine } from './StatisticLine';

export const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all == 0) return <p>No feedback given</p>
  return (
    <>
      <StatisticLine type={GOOD} result={good} />
      <StatisticLine type={NEUTRAL} result={neutral} />
      <StatisticLine type={BAD} result={bad} />
      <StatisticLine type="all" result={all} />
      <StatisticLine type="average" result={average} />
      <StatisticLine type="positive" result={positive} />
    </>
  );
};
