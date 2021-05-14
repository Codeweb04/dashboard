import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

function QuestionFetching() {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const fetch = async () => { 
        await axios.get('/forum')
            .then(res => {
                setQuestions(res.data)
            })
            .catch(err =>{ if(err) throw err })
    }
    fetch()
    const timer = setTimeout(() => {
        fetch()
      }, 5000)

      return () => clearTimeout(timer);
    });

    return (
        <div>
            <ul>
                {
                    questions.map(question => <li onClick={() => <Redirect to='/answer' />} key={question._id}>{question.question}</li>)
                }
            </ul>
        </div>
    )
}

export default QuestionFetching