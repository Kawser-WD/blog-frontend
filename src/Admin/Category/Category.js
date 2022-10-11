import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from '../../utils/config';

const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`${URL}api/v1/category/dropdown`)
        .then(data=> 
        {  const result = data.data.data;
            console.log(result)
          setCategories(result)})
      }, []);
    return (
        <div className='container mt-3'>
            <table className='table'>
                <thead  className='user-table'>
                <tr>
                    <th scope="col-1">Category Name</th>
                </tr>
                </thead>
                <tbody>
                {
                categories.map((category) =>{ 
                return (
                    <tr>
                        <td>{category.categoryname}</td>
                    </tr>
                 )
                })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Category;