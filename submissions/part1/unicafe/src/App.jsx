import { useState } from 'react'

const GOOD = "good";
const NEUTRAL = "neutral";
const BAD = "bad";

const Button = ({type, onClick}) => {
  return (
    <button onClick={onClick}>{type}</button>
  )
}

const Result = ({type, result}) => {
  return (
    <div>
      {type}{"  "}{result}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>

      <Button type={GOOD} onClick={handleGoodClick} />
      <Button type={NEUTRAL} onClick={handleNeutralClick} />
      <Button type={BAD} onClick={handleBadClick} />

      <h2>statistics</h2>
      <Result type={GOOD} result={good} />
      <Result type={NEUTRAL} result={neutral} />
      <Result type={BAD} result={bad} />

    </div>
  )
}

export default App