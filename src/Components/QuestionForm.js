import axios from 'axios'
import React, { useState } from 'react'

function QuestionForm() {

    const [question, setQuestion] = useState("")
    const [description, setDescription] = useState("") 
    const [tag, setTag] = useState("")   

    const handleSubmit = (e) => {
        e.preventDefault()
        const headers = {
            uname: sessionStorage.getItem("user"),
            question: question,
            description: description,
            tags: tag
        }
        axios.post('/forum/ask', headers)
            .catch(err => {if (err) throw err})
        setQuestion("")
        setDescription("")
        setTag("")
    }

    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <input type="text" name="Question" placeholder="Enter Question" onChange={(e) => {setQuestion(e.target.value)}} value={question}/>
                <textarea placeholder="Give clear and concise description of your question" rows="5" cols="20" onChange={(e) => {setDescription(e.target.value)}} value={description}/>
                <input type="text" placeholder="Add a tag" onChange={(e) => {setTag(e.target.value)}} value={tag}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default QuestionForm
