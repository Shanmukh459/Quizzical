import React from "react"
import he from "he"
import { nanoid } from 'nanoid'

export default function DisplayQuestion({handleSelectAnswer, incorrect_answers, correct_answer, selectedAnswer, showAnswer, id, question, ...rest}) {
    let options = incorrect_answers
    const correctOption = correct_answer
    
    if (options.includes("True") || options.includes("False")){
        options.length < 2 && options.splice((options.length+1) * Math.random() | 0, 0, correctOption)
        options.sort().reverse()
    } 
    else {
        options.length < 4 && options.splice((options.length+1) * Math.random() | 0, 0, correctOption)
    }

    const optionsElements = options.map(option => {

        let classNames = `${selectedAnswer === option && "option-btn-select"}`
        
        if (showAnswer) {
            if (correctOption === option) {
                classNames = classNames.concat(" option-btn-correct")
            }
            else if (selectedAnswer === option && incorrect_answers.includes(option)) {
                classNames = classNames.concat(" option-btn-incorrect")
            }
            else {
                classNames = classNames.concat(" option-incorrect")
            }
        }

        return(
            <button 
                onClick={() => handleSelectAnswer(id, option)} 
                key={nanoid()}
                className={`option-btn ${classNames}`}
            >
            {he.decode(option)}</button>
        )
        
    })

    return (
        <>
            <h3>{he.decode(question)}</h3>
            {optionsElements}
            <hr></hr>
        </>
        
    )
}