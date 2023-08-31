import React from "react"
import DisplayQuestion from "./DisplayQuestion"
import { nanoid } from "nanoid"

export default function QuizScreen() {
    const [isGameOver, setIsGameOver] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuizData(data.results.map(question => {
                return {
                    ...question,
                    id: nanoid(),
                    selectedAnswer: " "
                }
            })))
        console.log(`before select: ${quizData.selectedAnswer}`)
    }, [])

    function handleSelectAnswer(id, option) {
        console.log(typeof(option))
        setQuizData(prevQuestions => (
            prevQuestions.map(question => {
                return id === question.id ? {...question, selectedAnswer: option} : question
            })
        ))
        console.log("After select " + quizData)
    }

    const questionElements = quizData.map((item) => {
        return (
            <DisplayQuestion key={item.question} item={item} handleClick={handleSelectAnswer}/>
        )
    })

    return (
        <>
        <div>
            {questionElements}
        </div>
        <button>Check Answers</button>
        </>
        
    )
}