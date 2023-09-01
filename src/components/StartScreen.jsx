import React from "react"

export default function StartScreen(props) {
    return (
        <>
            <h3>Quizzical</h3>
            <p>Test your mind!</p>
            <button onClick={props.handleClick}>Start Quiz</button>
        </>
       
    )
}