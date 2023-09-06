import React from "react"
import he from "he"
import { nanoid } from 'nanoid'

export default function DisplayQuestion(props) {
    let options = props.item.incorrect_answers
    const correctOption = props.item.correct_answer
    
    options.length < 4 && options.splice((options.length+1) * Math.random() | 0, 0, correctOption)

    const optionsElements = options.map(option => {

        let classNames = `${props.item.selectedAnswer === option && "option-btn-select"}`
        
        if (props.item.showAnswer) {
            if (correctOption === option) {
                classNames = classNames.concat(" option-btn-correct")
            }
            else if (props.item.selectedAnswer === option && props.item.incorrect_answers.includes(option)) {
                classNames = classNames.concat(" option-btn-incorrect")
            }
        }

        return(
            <button 
                onClick={() => props.handleSelectAnswer(props.item.id, option)} 
                key={nanoid()}
                className={`option-btn ${classNames}`}
            >
            {he.decode(option)}</button>
        )
        
    })

    return (
        <>
            <p>{he.decode(props.item.question)}</p>
            {optionsElements}
        </>
        
    )
}