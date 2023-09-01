import React from "react"
import DisplayQuestion from "./DisplayQuestion"
import { nanoid } from "nanoid"

export default function QuizScreen(props) {
    const [isGameOver, setIsGameOver] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const [score, setScore] = React.useState(0)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuizData(data.results.map(question => {
                return {
                    ...question,
                    selectedAnswer: "",
                    id: nanoid()
                }
            })))
    }, [])

    function handleSelectAnswer(id, option) {
        setQuizData(prevQuestions => (
            prevQuestions.map(question => {
                if (question.id === id) {
                    question.correct_answer === option && setScore(prev => prev+1)
                    return {...question, selectedAnswer: option} 
                }
                else {
                    return question
                }
            })
        ));
    }

    function handleSubmission() {
        if (!isGameOver) {
            setIsGameOver(true)

        }
        else {
            setIsGameOver(false)
            setScore(0)
            props.handleNewGame()
        }
        
    }
    
    const questionElements = quizData.map((item) => {
        return (
            <DisplayQuestion 
                key={item.question} 
                item={item} 
                handleSelectAnswer={handleSelectAnswer}
            />
        )
    })

    return (
        <>
        <div>
            {questionElements}
        </div>
        <div>
            {isGameOver && <p>Your score is {score}/5</p> }
        </div>
        <button onClick={handleSubmission}>{isGameOver ? "New Game" : "Check Answers"}</button>

        </>
        
    )
}