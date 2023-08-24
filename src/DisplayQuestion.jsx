import React from "react"
import he from "he"

export default function DisplayQuestion(props) {
    const [item, setItem] = React.useState(props.item)
    let options = props.item.incorrect_answers
    const correctOption = props.item.correct_answer
    
    options.length < 4 && options.splice((options.length+1) * Math.random() | 0, 0, correctOption)

    function handleClick(event) {
        setItem(prevItem => {
            return {
                ...prevItem,
                selected_answer: event.target.innerText
            }
        })
        console.log(event.target.innerText)
    }

    const optionsElements = options.map(option => <button onClick={handleClick} key={option}>{option}</button>)

    return (
        <>
            <p>{he.decode(props.item.question)}</p>
            <div>{optionsElements}</div>
        </>
        
    )
}