import React from "react"

export default function StartScreen(props) {
    return (
        <main>
            <p className="title-txt">Quizzical</p>
            <p className="title-tag">A game that tests your mind!</p>
            <div className="inputs-section">
                <div className="category-div">
                    <label htmlFor="category">Select Category:</label>
                    <select 
                        id="category" 
                        name="category"
                        value={props.inputs.category}
                        onChange={props.handleInputChange}
                    >
                        <option value="">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                </div>
                
                <div className="difficulty-div">
                    <label htmlFor="difficulty">Select Difficulty:</label>
                    <select 
                        id="difficulty" 
                        name="difficulty"
                        value={props.inputs.difficulty}
                        onChange={props.handleInputChange}
                    >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select> 
                </div>

                <div className="type-div">
                    <label htmlFor="type">Select Type:</label>
                    <select
                        id="type"
                        name="type"
                        value={props.inputs.type}
                        onChange={props.handleInputChange}
                    >
                        <option value="">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>

                    </select>
                </div>
                
            </div>
            <button className="start-btn"onClick={props.handleClick}>Start Quiz</button>
        </main>
       
    )
}