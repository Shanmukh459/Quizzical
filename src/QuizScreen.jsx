import React from "react"
import DisplayQuestion from "./DisplayQuestion"

export default function QuizScreen() {
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])
    console.log(quizData)
    const questionElements = quizData.map((item) => {
        return (
            <>
                <p>{item.question}</p>
                <p>{item.incorrect_answers}</p>
            </>
        )
    })
    console.log(questionElements)
    return (
        <div>
            {questionElements}
        </div>
    )
}