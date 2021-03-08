import React from 'react'
import {UplessonsData} from "../helpers/UplessonsData"
import './styles/Uplessons.css'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Uplessons() {
    return (
        <div className="lessons">
            <h4>UPCOMING LESSONS</h4>
            <ul className="">
                    {UplessonsData.map((val, key) => {
                        return(
                            <li 
                                key={key}                
                                className="lessonRow"
                            >
                                <div>
                                    <div>
                                        {monthNames[val.Date.getMonth()]}
                                        {val.Date.getDate()}
                                    </div>
                                    <div>
                                        {val.Date.getHours() % 12 || 12}:
                                        {('0'+val.Date.getMinutes()).slice(-2)}
                                        {val.Date.getHours>12? 'PM' : 'AM'}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    {val.Subject}
                                    </div>
                                    <div>
                                        {val.Category}
                                    </div>
                                </div>
                                <div className="square">
                                    {val.Square}
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default Uplessons
