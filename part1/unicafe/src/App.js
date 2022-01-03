import React, {useState} from 'react'

const Heading = (props) => (
  <h1> {props.text} </h1>
)

const Button = (props) => (
  <button onClick={props.handleFunction}> {props.text} </button>
)

const Statistics = (props) => {
  return(
    <p> {props.text} {props.value}</p>
  )
}

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

      <Button handleFunction = {handleGood} text = "good"/>
      <Button handleFunction = {handleNeutral} text = "neutral"/>
      <Button handleFunction = {handleBad} text = "bad"/>

      <Heading text = "statistics"/>

      <Statistics text = "good" value = {good}/>
      <Statistics text = "neutral" value = {neutral}/>
      <Statistics text = "bad" value = {bad}/>
      <Statistics text = "all" value = {good + neutral + bad}/>
      <Statistics text = "average" value = {(good - bad)/(good + bad + neutral)}/>
      <Statistics text = "positive" value = {((good)/(good + bad + neutral)) * 100}/>
    </div>
  )
}

export default App;