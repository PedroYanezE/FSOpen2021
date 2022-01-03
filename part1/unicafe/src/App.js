import React, {useState} from 'react'

const Heading = (props) => (
  <h1> {props.text} </h1>
)

const Button = (props) => (
  <button onClick={props.handleFunction}> {props.text} </button>
)

const Stat = (props) => {
  return(
    <p> {props.text} {props.value}</p>
  )
}

const Average = (props) => {
  const qty = props.good + props.bad + props.neutral

  if (qty)
    return(<p> average {(props.good - props.bad)/(props.good + props.neutral + props.bad)} </p>)
  else
    return(<p> give feedback by clicking the buttons </p> )
}

const Positive = (props) => {
  const qty = props.good + props.bad + props.neutral

  if (qty)
    return <p> positive {(props.good/(props.good + props.neutral + props.bad)) * 100} %</p>
  else
    return <p> give feedback by clicking the buttons </p>
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

      <Stat value = {good} text = "good"/>
      <Stat value = {neutral} text = "neutral"/>
      <Stat value = {bad} text = "bad"/>
      <Stat value = {good + neutral + bad} text = "all"/>

      <Average good = {good} neutral = {neutral} bad = {bad} />

      <Positive good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App;