import { useState } from 'react'
import StartScreen from "./components/StartScreen"
import QuizScreen from "./components/QuizScreen"

function App() {
  const [startScreen, setStartScreen] = useState(true)
  const [inputs, setInputs] = useState({
    category: "",
    difficulty: ""
  })

  function handleInputChange(event) {
    const {name, value} = event.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  function handleClick(event) {
    setStartScreen(prev => !prev)
  }
  return startScreen ? 
    <StartScreen handleClick={handleClick} handleInputChange={handleInputChange} inputs={inputs}/> : 
    <QuizScreen handleNewGame={handleClick} inputs={inputs}/>
}

export default App
