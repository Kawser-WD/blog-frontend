import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Bell from '../../components/images/bell.png';
import edit from '../../components/images/edit.png';
import graduationcap from '../../components/images/graduation-cap.png';
import graph from '../../components/images/graph.png';
import book from '../../components/images/homework.png';
import plan from '../../components/images/plane.png';
import resturant from '../../components/images/restaurant.png';
import ring from '../../components/images/rings.png';
import { URL } from '../../utils/config';
import CourseScreen from "../CourseScreen/CourseScreen";
import './Course.css';
const Course = () => {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false)


   useEffect(() => {
    axios.get(`${URL}api/v1/category/dropdown`)
    .then(data=> 
    {  const result = data.data.data;
      setCategories(result)})
  }, []);
    return (
        <div>
            <div className='top'>
            <h4 className='top-text'>Ciao Cireneo Jose</h4>
            <div className='container'>
            <div className='d-flex justify-content-end'>
                <div className='notification'>
                <img src={Bell} style={{height:'20px', width:'20px', marginTop:'-5px'}} alt=""/>
                </div>
            </div>
            </div>
           </div>
           <div className='container percorso'>
            <div className='row'>
                <div className='col-md-8'>
                    <h5 className='che'>II Percorso che hai scelto e`:</h5>
                    <div className='d-flex justify-content-end'>
                        <p className='cambia'>Cambia percorso</p>
                        <img src={edit} style={{height:'10px', width:'10px', marginTop:'-20px'}} alt=""/> 
                    </div>
                    <p className='marketing-text'>Digital Marketing</p>
                    <h5  className='che'>I tuoi Settori di interesse:</h5>
                    <div className='d-flex justify-content-end'>
                        <p className='cambia'>Modifica Settori</p>
                        <img src={edit} style={{height:'10px', width:'10px', marginTop:'-22px'}} alt=""/> 
                    </div>
                   <div className='box'>
                   <div className='box1'>
                    <div className='box-inner'>
                    <p className='box1-text'>TRAVEL</p>
                    <img className='box-icon' src={plan} style={{height:'40px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box1 mx-2'>
                    <div className='box-inner'>
                    <p className='box2-text'>EDUCATION</p>
                    <img className='box-icon' src={graduationcap} style={{height:'40px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box1'>
                    <div className='box-inner'>
                    <p className='box3-text'>FODO</p>
                    <img className='box-icon' src={resturant} style={{height:'40px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                   </div>
                </div>
                <div className='col-md-4'>
                <h5>Percorso completo al:</h5>
                <div className='completo'>
                    <p className='completo-text'></p>
                </div>
        <div className='percorso-block'>
        <h5>I tuio obiettivi:</h5>
                <div className='box2'>
                   <div className='box-growth'>
                    <div className='box-inner'>
                   <div className='box-4'>
                   <p className='eight'>8</p>
                    <p className='box4-text'>RECENT WORK AND ECONOMIC GROWTH</p>
                   </div>
                    <img className='box-icon' src={graph} style={{height:'30px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box-partner mx-2'>
                    <div className='box-inner'>
                    <div className='box-4'>
                   <p className='eight'>17</p>
                    <p className='box5-text'>PARTNERSHIPS<br/>FOR THE GOALS</p>
                   </div>
                    <img className='box-icon' src={ring} style={{height:'30px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box-edu'>
                    <div className='box-inner'>
                    <div className='box-4'>
                   <p className='eight'>4</p>
                    <p className='box6-text'>QUALITY<br/>EDUCATION</p>
                   </div>
                    <img className='box-icon' src={book} style={{height:'30px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                   </div>
                </div>
                </div>
            </div>
           </div>
         <div>
         {categories.map((category) => 
           <CourseScreen category={category} />
                   
                  )}
         </div>
           
        </div>
    );
};

export default Course;