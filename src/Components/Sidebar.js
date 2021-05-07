import React from 'react'
import "./styles/Sidebar.css"
import {SideBarData} from "../helpers/SidebarData"

function Sidebar() {
    return (
        <div className="Sidebar">
            <div id="logoContainer">
                <img id="logo" src="../images/logo.png" alt="logo" />
            </div>
            <div className="menu">
                <ul className="SidebarList">
                    {SideBarData.map((val, key) => {
                        return (
                            <li 
                                key={key}
                                id={window.location.pathname === val.link ? "active" : ""}                
                                className="row"
                                onClick= {() => {
                                    window.location.pathname = val.link;
                                }}
                            >
                                <div>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>    
    )
}

export default Sidebar
