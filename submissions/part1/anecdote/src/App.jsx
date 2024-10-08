import { useState } from 'react'

const MostVotes = ({ votes, anecdotes }) => {
  const sortedEntries = Object.entries(votes).sort(([, a], [, b]) => b - a);
  const [firstKey, firstValue] = sortedEntries[0] || ["", 0];
  return (
    <>
      <h2>Most Votes</h2>
      <p>{anecdotes[firstKey]}</p> 
      <p>has {firstValue} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const startingPoints = Array.from({ length: anecdotes.length }).reduce((acc, _, index) => {
    acc[index] = 0;
    return acc;
  }, {});

  const [selected, setSelected] = useState(0)
  const [pointsArr, setPointsArr] = useState(startingPoints)

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const newPointsArr = {...pointsArr}
    newPointsArr[selected]+=1
    setPointsArr(newPointsArr)
  }

  return (
    <>
      <p>"{anecdotes[selected]}"</p>
      <p>has {pointsArr[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <MostVotes votes={pointsArr} anecdotes={anecdotes} />
    </>
  )
}

export default App