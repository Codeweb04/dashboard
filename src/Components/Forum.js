import React, { useState } from 'react'
import Sidebar from './Sidebar'
import QuestionFetching from './QuestionFetching'
import QuestionForm from './QuestionForm'
import './styles/Forum.css'

function Forum() {
  
    const [ask, setAsk] = useState(false)
    const buttonText = ask ? "Collapse" : "Ask A Question"

    return (
        <div className="Forum">
        <Sidebar />

        <div>
            <button onClick={() => {setAsk(!ask)}}>{buttonText}</button>
            {ask ? <QuestionForm /> : ""}
            Questions:
            <QuestionFetching />
        </div>
        </div>
    )
}

export default Forum
