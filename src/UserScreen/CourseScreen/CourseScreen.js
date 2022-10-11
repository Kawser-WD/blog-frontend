import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { URL } from '../../utils/config';
import './CourseScree.css';
const CourseScreen = ({category}) => {
    const { _id, categoryname } = category;
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [show, setShow] = useState(false)

    // category
   useEffect(() => {
    axios.get(`${URL}api/v1/category/dropdown`)
    .then(data=> 
    {  const result = data.data.data;
      setCategories(result)})
  }, []);


   useEffect(() => {
    axios.get(`${URL}api/v1/course/categorywise/${_id}`)
    .then(data=> 
    {  const result = data.data.data;
        setCourses(result)})
  }, []);
    return (
        <div>
           <div className='category mb-3'>
                    <div className='container'>
                        <div className='row mt-3'>
                            <div className='col-md-6'>
                                <p>{categoryname}</p>
                            </div>
                            <div className='col-md-6'>
                            <p className='click d-flex justify-content-end' onClick={()=> setShow(!show)}>{show ? <FontAwesomeIcon icon={faMinus} style={{height:'20px', width:'20px', color:'#696F78'}} /> : <FontAwesomeIcon icon={faPlus} style={{height:'20px', width:'20px', color:'#696F78'}} />}</p>
                            </div>
                        </div>
                    </div>
                    <div className={show ? 'content show' : 'content'}>
                        <div className="container">
                            <div className="row">
                           {
                            courses.map((course)=>(
                                <div className='col-md-4'>
                                <div class="card mb-1">
                                <img src={course.image} class="card-img-top chapter-image" alt="..."/>
                                <div class="card-body">
                                <h4 className='card-title'>{course.coursename}</h4>
                                    <Link to={"/course/"+course._id}><button type='btn' className='continue-course'>Continue Course</button></Link>
                                </div>
                                </div>
                            </div> 
                            ))
                           }
                            </div>
                        </div>
                    </div>
                   </div> 
           </div> 
    );
};

export default CourseScreen;