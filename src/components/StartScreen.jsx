import React from "react"

export default function StartScreen(props) {
    return (
        <main>
            <p className="title-txt">Quizzical</p>
            <p className="title-tag">A game that tests your mind!</p>
            <button className="start-btn"onClick={props.handleClick}>Start Quiz</button>
        </main>
       
    )
}