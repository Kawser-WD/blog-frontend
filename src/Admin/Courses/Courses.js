import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetail/CourseDetails';
import { FadeLoader } from "react-spinners";
import axios from 'axios';
import { URL } from '../../utils/config';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
const Courses = () => {
const [courses, setCourses] = useState([])
const [loading, setLoading] = useState(true)
      useEffect(() => {
        axios.get(`${URL}api/v1/course/dropdown`)
        .then(data=>
        {setCourses(data.data.data)
        setLoading(false)}
        )
        }, []);
    const deleteCourse = (id)=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${URL}api/v1/course/delete/${id}`)
                .then((data) => {
                const remainingChapter = courses.filter(chapter => chapter._id !== id)
                setCourses(remainingChapter)
                data.status === 200 ? toast.success("Delete Successful") : toast.warning("Activity not deleted");
                });
            }
          });
        }
    return (
        <div>
            {
                courses?.length === 0 &&  <div className='d-flex justify-content-center' style={{marginTop:'25%'}}> <FadeLoader color={'#0F172A'} loading={loading}  size={30} />
                 </div>
            }
           
            <div className='container'>
                <div className='row'>
                {
                    courses.map(course => <CourseDetails
                        key={course._id}
                        course={course}
                        deleteCourse={deleteCourse}
                    >
                    </CourseDetails>)
                }
                </div>
            </div>
        </div>
    );
};

export default Courses;