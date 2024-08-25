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
      {type}{"  "}{result}{type == "positive" && "%"}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const newGood  = good + 1
    const newAll = all + 1
    const newAverage = (newGood - bad) / newAll
    const newPositive = (newGood / newAll)*100

    setGood(newGood)
    setAll(newAll)
    setAverage(newAverage)
    setPositive(newPositive)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1
    const newAverage = (good - bad) / newAll
    const newPositive = (good / newAll)*100

    setNeutral(newNeutral)
    setAll(newAll)
    setAverage(newAverage)
    setPositive(newPositive)
  }

  const handleBadClick = () => {
    const newBad  = bad + 1
    const newAll = all + 1
    const newAverage = (good - newBad) / newAll
    const newPositive = (good / newAll)*100

    setBad(bad + 1)
    setAll(all + 1)
    setAverage(newAverage)
    setPositive(newPositive)
  }


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
      <Result type="all" result={all} />
      <Result type="average" result={average} />
      <Result type="positive" result={positive} />

    </div>
  )
}

export default App