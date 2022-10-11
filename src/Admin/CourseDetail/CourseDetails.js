import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseDetail.css';
const CourseDetails = ({course, deleteCourse}) => {
    const { _id, coursename, course_description, image } = course;
    const text = course_description;
    const [isShow, setIsShow] = useState(true);
    const description = isShow ? text?.slice(0, 50) : text
    const toggleIsShow = () =>{
        setIsShow(!isShow)
    }
    return (
        <div className='col-md-4'>
            <div class="card mb-1">
            <img src={image} class="card-img-top chapter-image" alt="..."/>
            <div class="card-body">
            <h4 className='card-title'>{coursename}</h4>
                <p class="card-text">{description}<a className='card-text read-more' onClick={toggleIsShow}>{isShow? 'Read More' : 'Read Less'}</a> </p>
                <Link to={"/courseupdate/"+ _id}><button type='btn' className='edit-btn'>Edit</button></Link>
                <button type='btn' className='delete-btn' onClick={()=> deleteCourse(_id)} >Delete</button>
            </div>
            </div>
        </div>
    );
};

export default CourseDetails;