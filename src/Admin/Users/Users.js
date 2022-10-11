import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import './Users.css'
import Register from '../Register/Register';
import axios from 'axios';
import { config, URL } from '../../utils/config';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`${URL}api/v1/user/get_all`, config)
        .then(data=> 
        {  const result = data.data.data;
            console.log(result)
            setUsers(result)})
      }, []);

      const deleteUser = (id)=> {
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
                axios.delete(`${URL}api/v1/user/delete_single/${id}`, config)
                .then((data) => {
                const remainingChapter = users.filter(user => user._id !== id)
                setUsers(remainingChapter)
                data.status === 200 ? toast.success("Delete Successful") : toast.warning("Activity not deleted");
                });
            }
          });
        }
    return (
        <div>
            {/* <div className='user'>
            <div className='user-box'>
            <div className='user-icon'>
            <FontAwesomeIcon icon={faUser} />
            </div>
            <div className='user-count'>
            <CountUp end={100} />
            </div>
            </div>
        </div> */}
        <Register/>
       <div className='container mt-3'>
        <h3 >User Data</h3>
       <table className='table'>
                <thead className='user-table'>
                <tr>
                    <th scope="col-1">Name</th>
                    <th scope="col-1">Email</th>
                    <th scope="col-1">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                users.map((user) =>{ 
                return (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button  style={{border:'none',backgroundColor:'#ffffff'}}> <Link to={"/updateuser/"+user._id}> <FontAwesomeIcon icon={faPencilAlt} style={{color:'#0A3B76'}}/></Link></button> <button  style={{border:'none',backgroundColor:'#ffffff'}} onClick={()=> deleteUser(user._id)}><FontAwesomeIcon icon={faTrashAlt} style={{color:'#0D386F'}} /></button></td>
                    </tr>
                 )
                })
                }
                </tbody>
            </table>
       </div>
        </div>
    );
};

export default Users;