import React from "react"
import DisplayQuestion from "./DisplayQuestion"

export default function QuizScreen() {
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])

    const questionElements = quizData.map((item) => {
        return (
            <DisplayQuestion key={item.question} item={item}/>
        )
    })
    
    return (
        <div>
            {questionElements}
        </div>
    )
}