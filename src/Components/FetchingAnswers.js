import React from 'react'

function FetchingAnswers(props) {
    const keys = props.q.answers.keys()

    return (
        <div>
            <ul>
                {
                    props.q.answers.map(ans => <li key={keys[ans.answers]}>{ans.answer}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ans.uname}</li>)
                }
                
           </ul>
        </div>
    )
}

export default FetchingAnswers
