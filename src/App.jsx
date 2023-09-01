import { useState } from 'react'
import StartScreen from "./components/StartScreen"
import QuizScreen from "./components/QuizScreen"

function App() {
  const [startScreen, setStartScreen] = useState(true)

    function handleClick() {
        setStartScreen(prev => !prev)
    }
    return startScreen ? <StartScreen handleClick={handleClick}/> : <QuizScreen handleNewGame={handleClick}/>
}

export default App
