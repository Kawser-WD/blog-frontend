import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { FadeLoader } from "react-spinners";
import { config, URL } from '../../utils/config';
import './CreateCourse.css';
const CreateCourse = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}api/v1/category/dropdown`)
        .then(data=> 
        {  const result = data.data.data;
          setCategories(result)})
      }, []);

// image
      const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

      const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const base64Data = await toBase64(image);
        const payload = {
          category_id: category_id,
          coursename: name, 
          course_description: description,
          image: base64Data
        };
         await axios.post(`${URL}api/v1/course/create`, payload, config)
        .then(data=>{
            setLoading(false)
            if(data){
                data.status === 200 ? toast.success("Course created successfully") : toast.warning("Something went wrong");
                navigate('/coursedetail')
            }
        })
      
      };
    return (
        <div>
             <h3>Make Course</h3>
            {
                loading ? 
                <div className='d-flex justify-content-center' style={{marginTop:'25%'}}> <FadeLoader color={'#36d7b7'} loading={loading}  size={30} />
                 </div>
                :
              <div className=''>
                  <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Category
                </label>
                <select
                  class="form-select"
                  value={category_id}
                  onChange={(e)=> setCategory_id(e.target.value)}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  {categories.map((category) => (
                    <option value={category._id}>
                      {category.categoryname}
                    </option>
                  ))}
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Course Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  class="form-control input"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Course Description
                </label>
                <textarea 
                 class="form-control input"
                 type="text"
                 onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Upload Image
                </label>
                <input
                  class="form-control"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0], false)}
                  id="formFile"
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
              </div>
            }
        </div>
    );
};

export default CreateCourse;