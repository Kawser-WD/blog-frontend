import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FadeLoader } from "react-spinners";
import { URL } from '../../utils/config';
import Category from '../Category/Category';

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)

      const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const payload = {
          categoryname: name
        };
         await axios.post(`${URL}api/v1/category/create`, payload)
        .then(data=>{
            setLoading(false)
            if(data){
                data.status === 200 ? toast.success("Category created successfully") : toast.warning("Something went wrong");
            }
        })
      
      };
    return (
        <div>
           <h3 className='d-flex justify-content-center mt-3'>Create Category</h3>
           <div className='d-flex justify-content-center'>
            {
                loading ? 
                <div className='d-flex justify-content-center' style={{marginTop:'15%'}}> <FadeLoader color={'#36d7b7'} loading={loading}  size={30} />
                 </div>
                :
                <form onSubmit={handleSubmit} style={{width:'50%'}}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Category Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  class="form-control input"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn"
                  style={{ backgroundColor: "#00A1FF", color: "#fff" }}
                >
                  Create
                </button>
              </div>
            </form>
            }
                  </div>
            <Category/>
        </div>
    );
};

export default CreateCategory;