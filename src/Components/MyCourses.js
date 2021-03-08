import React from 'react'
import {MyCoursesData} from '../helpers/MyCoursesData'
import './styles/MyCourses.css'

function MyCourses() {
    return (
        <div className="Courses">
            <h4>MY COURSES</h4>
            <div >
            <ul className="CourseList">
                    {MyCoursesData.map((val, key) => {
                        return (
                            <li 
                                key={key}
                                className="CourseRow"
                            >
                                <div><img className="CourseImage" src={val.src} alt="Course"/></div>
                                <div>{val.title}</div>
                                <div>{val.lessons + ' lessons'} </div>
                                <progress className="progress" value= {(val.completed/val.lessons) * 100} max="100"></progress>
                            </li>
                        )
                    })} 
                </ul> 
            </div>
        </div>
    )
}

export default MyCourses
