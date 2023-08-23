import React from "react"
import { useState } from 'react'
import StartScreen from "./StartScreen"
import QuizScreen from "./QuizScreen"

export default function ShowScreen() {
    const [startScreen, setStartScreen] = useState(true)

    function handleClick() {
        setStartScreen(prev => !prev)
    }
    return startScreen ? <StartScreen handleClick={handleClick}/> : <QuizScreen />
}