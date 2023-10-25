import React from "react"
import DisplayQuestion from "./DisplayQuestion"
import { nanoid } from "nanoid"
import "../styles/quizScreen.css"
import useMediaQuery from "../hooks/useMediaQuery"

export default function QuizScreen(props) {
    const [isGameOver, setIsGameOver] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [index, setIndex] = React.useState(0)
    const mobileScreen = useMediaQuery('(max-width: 450px');

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${props.inputs.category}&difficulty=${props.inputs.difficulty}&type=${props.inputs.type}`)
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

    function prevQuestion() {
        setIndex(prevIndex => {
            return prevIndex > 0 ? prevIndex -= 1 : prevIndex
        })    
    }

    function nextQuestion() {
        setIndex(prevIndex => {
            return prevIndex < 4 ? prevIndex += 1 : prevIndex
        })
    }
    const questionElements = quizData.map((item) => {
        return (
            <DisplayQuestion 
                key={item.question} 
                handleSelectAnswer={handleSelectAnswer}
                incorrect_answers = {item.incorrect_answers}
                correct_answer = {item.correct_answer}
                selectedAnswer = {item.selectedAnswer}
                showAnswer = {item.showAnswer}
                id = {item.id}
                question = {item.question}
            />
        )
    })
    console.log(index)
    if (mobileScreen) {
        return (
            <section>
            {questionElements[index]}
            <button onClick={prevQuestion}>Previous</button>
            <button onClick={nextQuestion}>Next</button>
            <div className="score-submit-sec">
                 {isGameOver && <h3>Your scored {score}/5 correct answers</h3>}
                 <button className="submission-btn" onClick={handleSubmission}>{isGameOver ? "Play again" : "Check Answers"}</button>
             </div>
         </section>
        )
    }
    else {
        return (
            <section>
                <div className="question-container">
                    {questionElements}
                </div>
                <div className="score-submit-sec">
                    {isGameOver && <h3>Your scored {score}/5 correct answers</h3>}
                    <button className="submission-btn" onClick={handleSubmission}>{isGameOver ? "Play again" : "Check Answers"}</button>
                </div>
            </section> 
        )
    }
    
}