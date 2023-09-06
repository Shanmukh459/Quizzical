import React from "react"
import he from "he"
import { nanoid } from 'nanoid'

export default function DisplayQuestion(props) {
    let options = props.item.incorrect_answers
    const correctOption = props.item.correct_answer
    
    options.length < 4 && options.splice((options.length+1) * Math.random() | 0, 0, correctOption)

    const optionsElements = options.map(option => {

        let classNames = `${props.item.selectedAnswer === option && "option-btn-select"}`
        // if (props.item.showAnswer && props.item.selectedAnswer === option){
        //     if (props.item.incorrect_answers.include(option)){
        //         classNames = classNames.concat(" option-btn-incorrect")
        //     }
        //     else {
        //         classNames = classNames.concat(" option-btn-correct")
        //     }
        // }
         
        //if it is incorrect option give
            //give me classes related to incorrect options
        //else
            //give me classNames related to correct options

        // const incorrectAnsClassNames = props.item.incorrect_answers.map(answer => {
        // return (
        //     `${props.item.selectedAnswer === answer && "option-btn-select"} ${(props.item.showAns && props.item.selectedAns === answer) && "option-btn-incorrect"}`
        //     )
        // })

        // const correctAnsClassNames = `${props.item.selectedAnswer === option && "option-btn-select"} ${(props.item.showAns && props.item.selectedAns === props.item.correct_answer) && "option-btn-correct"}`

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