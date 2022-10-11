import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { config, URL } from '../../utils/config';

const Chapters = () => {
    const [chapters, setChapters] = useState([])

    useEffect(() => {
        axios.get(`${URL}api/v1/chapter`, config)
        .then(data=> 
        {  const result = data.data.data;
            setChapters(result)
        })
      }, []);
      const deleteChapter = (id)=> {
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
                axios.delete(`${URL}api/v1/chapter/delete/${id}`, config)
                .then((data) => {
                const remainingChapter = chapters.filter(chapter => chapter._id !== id)
                setChapters(remainingChapter)
                data.status === 200 ? toast.success("Delete Successful") : toast.warning("Activity not deleted");
                });
            }
          });
        }
    return (
        <div className='container mt-3'>
            <h3>All Chapters</h3>
            <table className='table'>
                <thead  className='user-table'>
                <tr>
                    <th scope="col-1">Chapter Name</th>
                    <th scope="col-1">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                chapters.map((chapter) =>{ 
                return (
                    <tr>
                        <td>{chapter.title}</td>
                        <td><button  style={{border:'none',backgroundColor:'#ffffff'}}  onClick={()=> deleteChapter(chapter._id)}><FontAwesomeIcon icon={faTrashAlt}  style={{color:'#0A3B76'}}  /></button></td>
                    </tr>
                 )
                })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Chapters;