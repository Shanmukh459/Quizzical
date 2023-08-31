import React from "react"
import he from "he"
import { nanoid } from 'nanoid'

export default function DisplayQuestion(props) {
    //const [item, setItem] = React.useState(props.item)
    let options = props.item.incorrect_answers
    const correctOption = props.item.correct_answer
    
    options.length < 4 && options.splice((options.length+1) * Math.random() | 0, 0, correctOption)


    const optionsElements = options.map(option => {
        const incorrectAnswerClassName = `
        ${props.item.selectedAnswer === option ? "option-btn-selected" : "option-btn"}`
        return(
            <button 
                onClick={() => props.handleClick(props.item.id, option)} 
                key={nanoid()}
                className={incorrectAnswerClassName}
            >{he.decode(option)}</button>
        )
        
    })

    return (
        <>
            <p>{he.decode(props.item.question)}</p>
            {optionsElements}
        </>
        
    )
}