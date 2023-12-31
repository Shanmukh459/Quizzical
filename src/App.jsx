import { useState } from 'react'
import StartScreen from "./components/StartScreen"
import QuizScreen from "./components/QuizScreen"
import shapeBottom from "./assets/shape-2.png"
import shapeTop from "./assets/shape-1.png"
import "./styles/app.css"

function App() {
  const [startScreen, setStartScreen] = useState(true)
  const [inputs, setInputs] = useState({
    category: "",
    difficulty: "",
    type: ""
  })

  function handleInputChange(event) {
    const {name, value} = event.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  function handleClick(event) {
    setStartScreen(prev => !prev)
  }
  return (
    <section className={!startScreen && 'app-container'}>
      <img className="shape-top" src={shapeTop}></img>
      {startScreen ? 
        <StartScreen handleClick={handleClick} handleInputChange={handleInputChange} inputs={inputs}/> : 
        <QuizScreen handleNewGame={handleClick} inputs={inputs}/>}
      <img className="shape-bottom" src={shapeBottom}></img>
      <footer className={startScreen && "footer-container"}>
        Developed by &nbsp;
        <a href="https://github.com/Shanmukh459/">Shanmukh Krishna</a>
      </footer>
    </section>
    

  )
}

export default App
