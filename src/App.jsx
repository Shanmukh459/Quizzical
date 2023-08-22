import { useState } from 'react'
import StartScreen from './StartScreen.jsx'
import QuizScreen from './QuizScreen.jsx'

function App() {
  const [startScreen, setStartScreen] = useState(false)
  return (
    startScreen ? <StartScreen /> : <QuizScreen />
  )
}

export default App
