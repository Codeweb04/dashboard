import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

function QuestionFetching() {

    const [questions, setQuestions] = useState([])
    const history=useHistory()

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
                    questions.map(question => <li onClick = {() => {history.push({
                        pathname: '/answer',
                        question: question
                      })}} key={question._id}>{question.question}</li>)
                }
            </ul>
        </div>
    )
}

export default QuestionFetching