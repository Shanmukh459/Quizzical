import React from "react"

export default function DisplayQuestion(props) {
    const question = props.item.question
    const answer = props.item.correct_answer
    let options = props.item.incorrect_answers
    // console.log(question, answer, options)

    return (
        <p>displayquestion</p>
    )
}