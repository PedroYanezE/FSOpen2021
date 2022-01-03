import React, {useState} from 'react'

const Heading = (props) => (
  <h1> {props.text} </h1>
)

const Button = (props) => (
  <button onClick={props.handleFunction}> {props.text} </button>
)

const Statistics = (props) => {
  const qty = props.good + props.neutral + props.bad
  if(qty)
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text = "good" value = {props.good}/>
            <StatisticLine text = "neutral" value = {props.neutral}/>
            <StatisticLine text = "bad" value = {props.bad}/>
            <StatisticLine text = "all" value = {qty}/>
            <StatisticLine text = "average" value = {(props.good - props.bad)/qty}/>
            <StatisticLine text = "positive" value = {100*(props.good/qty)}/>
          </tbody>
        </table>
      </div>
    )
  else
    return(
      <p> No feedback given </p>
    )
}

const StatisticLine = (props) => (
  <tr>
    <td>
      {props.text}
    </td>
    <td>
     {props.value}
    </td>
  </tr>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return(
    <div>
      <Heading text = "give feedback"/>

      <Button text = "good" handleFunction = {handleGood}/>
      <Button text = "neutral" handleFunction = {handleNeutral}/>
      <Button text = "bad" handleFunction = {handleBad}/>

      <Heading text = "statistics"/>

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App;