import React, { useState } from 'react'
import FetchingAnswers from './FetchingAnswers'
import axios from 'axios'

function Answer(props) {

    const [answer, setAnswer] = useState("")

    const headers = {
        uname: sessionStorage.getItem("user"),
        answer: answer
    } 

    const Answer = (e) => {
        e.preventDefault()
        axios.patch(`/forum/answer/${props.location.question._id}`, headers)
            .then(res => {})
            .catch(err => {if(err) throw err})
    }

    return (
        <div>
            <h5>question</h5><strong>{props.location.question.question}</strong>
            <h5>description:</h5> <strong>{props.location.question.description}</strong>
            <h5>tags:</h5> <strong>{props.location.question.tags}</strong>
            <form onSubmit={Answer}>
                <textarea placeholder="Answer here" cols="30" row="10" onChange={(e) => {setAnswer(e.target.value)}} value={answer}/>
                <input type="submit" />
            </form>
            <FetchingAnswers q={props.location.question} />
        </div>
    )
}

export default Answer