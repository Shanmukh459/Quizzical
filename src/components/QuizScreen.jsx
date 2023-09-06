import React from "react"
import DisplayQuestion from "./DisplayQuestion"
import { nanoid } from "nanoid"
import "../styles/quizScreen.css"

export default function QuizScreen(props) {
    const [isGameOver, setIsGameOver] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const [score, setScore] = React.useState(0)

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${props.inputs.category}&difficulty=${props.inputs.difficulty}&type=multiple`)
            .then(res => res.json())
            .then(data => setQuizData(data.results.map(question => {
                return {
                    ...question,
                    selectedAnswer: "",
                    showAnswer: false,
                    id: nanoid(),
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
            setQuizData(prevData => prevData.map(question => ({...question, showAnswer: true})))
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
        <section>
            <div>
                {questionElements}
            </div>
            <div className="score-submit-sec">
                {isGameOver && <h3>Your scored {score}/5 correct answers</h3> }
                <button className="submission-btn" onClick={handleSubmission}>{isGameOver ? "Play again" : "Check Answers"}</button>
            </div>
            

        </section>
        
    )
}