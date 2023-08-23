import React from "react"
import DisplayQuestion from "./DisplayQuestion"

export default function QuizScreen() {
    const [quizData, setQuizData] = React.useState(getData())
    function getData() {
        React.useEffect(() => {
            fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuizData(data))
        }, [])
    }
    
    // let questionsElements = quizData.results.map(item => {
    //     return (
    //         <>
    //             <p>{item.question}</p>
    //             <p>{item.incorrect_answers}</p>
    //         </>
            
    //     )
    // })
    console.log(quizData)
    return (
        // <p>hello</p>
        <p>{JSON.stringify(quizData, null, 2)}</p>
    )
}