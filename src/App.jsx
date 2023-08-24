import { useState } from 'react'
import StartScreen from "./StartScreen"
import QuizScreen from "./QuizScreen"

function App() {
  const [startScreen, setStartScreen] = useState(true)

    function handleClick() {
        setStartScreen(prev => !prev)
    }
    return startScreen ? <StartScreen handleClick={handleClick}/> : <QuizScreen />
}

export default App
