import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Register() {
    const [uname, setUname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [visible, setVisible] = useState(false);
    const [registered, setRegistered] = useState(false);
    const history=useHistory()

    const RedirectNow = (uname) => {
      if (registered) {
        sessionStorage.setItem('user', uname)
        history.push({
          pathname: '/dashboard', 
        })
      }
    }

      const handleUChange = event => {
        setUname(event.target.value)
      }

      const handleEChange = event => {
        setEmail(event.target.value)
      }

      const handlePChange = event => {
        setPassword(event.target.value)
      }

      const handleSubmit = event => {
        event.preventDefault();
        const headers = {
            uname: uname,
            email: email,
            password: password
        }
        axios.post('/register', headers) 
            .then(res => {
                if (res.status === 500) {
                  setVisible(true)
                } else {
                  setRegistered(true);
                  RedirectNow(res.uname)

                }
            })    
      };
    

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label>UserName: 
                <input type="text" onChange={handleUChange}/>
                </label>
                <br /><br />
                <label>Email: 
                <input name="email" type="email" onChange={handleEChange}/>
                </label>
                <br /><br />
                <label>PassWord: 
                <input name="password" type="password" onChange={handlePChange}/>
                </label>
                <br /><br />
                <input type="submit" value="Register"/>
            </form>
            <p>{visible ? "Not Successful" : ""}</p>
            
        </div>
    )
}


export default Register