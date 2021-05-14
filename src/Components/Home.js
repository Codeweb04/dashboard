import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './styles/Home.css'
import Register from './Register'
import axios from 'axios'
import {useHistory} from 'react-router-dom'



function Home() {

  const [uname, setUname] = useState();
  const [password, setPassword] = useState();
  const [register, setRegister] = useState(true);
  const [visible, setVisible] = useState(false);
  const history=useHistory()

  const handleUChange = event => {
    setUname(event.target.value)
  }

  const handlePChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.get('/login', {
      params: {
        uname: uname,
        password: password
    }}) 
        .then(res => {
            if (res.status === 202) {
                sessionStorage.setItem('user', res.data.message)
                history.push({
                pathname: '/dashboard',
              })              
            } else {
              setVisible(true)
            }
        })    
  };

  const buttonText = register ? "Register" : "Login"
  
  
    return(
      <div className="Home">
        <Sidebar />
        <div>
        {register ? 
          <form onSubmit={handleSubmit}>
          <label>UserName: 
          <input type="text" onChange={handleUChange}/>
          </label>
          <br /><br />
          <label>PassWord: 
          <input name="password" type="password" onChange={handlePChange}/>
          </label>
          <br /><br />
          <input type="submit" value="Login"/>
      </form>
        : 
          <Register />
          
        }
        OR <br />
        <button onClick={ () => {
          setRegister(!register)
        }}>
          {buttonText}
        </button>
        <p>{visible ? "Not Successful" : ""}</p>
        </div>
        

      </div>
    )
}

export default Home
