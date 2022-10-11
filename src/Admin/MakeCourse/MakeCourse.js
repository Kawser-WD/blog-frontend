import React, { useEffect, useState } from "react";
import RichTextEditior from "../RichTextEditior/RichTextEditior";
import { config, URL } from "../../utils/config";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import './MakeCourse.css';

const MakeCourse = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [course_id, setCourse_id] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
   // category
   useEffect(() => {
    axios.get(`${URL}api/v1/category/dropdown`)
    .then(data=> 
    {  const result = data.data.data;
      setCategories(result)})
  }, []);

  // course
  useEffect(() => {
    axios.get(`${URL}api/v1/course/dropdown`)
    .then(data=> 
    {  const result = data.data.data;
      setCourses(result)})
  }, []);

  const categorySelect = (e) => {
    e.preventDefault();
    setCategory_id(e.target.value);
    // console.log(e)
    // console.log(e.target.value)
  };
  const courseSelect = (e) => {
    e.preventDefault();
    setCourse_id(e.target.value);
    // console.log(e)
    // console.log(e.target.value)
  };

  //making image as base64 buffer for uploading to server
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
    let base64Data
    if(image){
    base64Data = await toBase64(image);
    }
    const payload = {
      category_id: category_id,
      course_id: course_id,
      title: title,
      content: content,
      image: base64Data,
    };
    const { data } = await axios.post(`${URL}api/v1/chapter/create`, payload, config);
    if (data) {
      setLoading(false);
      navigate("/coursedetail");
      data.status === 200 ? toast.success("Chapter create successfully") : toast.warning("Activity not created");
    
    }
  
  };

  return (
    <>
      {loading ? 
        <div className="d-flex justify-content-center" style={{marginTop:'25%'}}>
          <FadeLoader color={'#282A36'} loading={loading}  size={30} />
        </div>
       : (
        <>
          <div>
            <h3>Create Chapter</h3>
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center"></div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Category
                </label>
                <select
                  class="form-select"
                  value={category_id}
                  onChange={categorySelect}
                  aria-label="Default select example"
                >
                  <option selected >Open this select menu</option>
                  {categories.map((category) => (
                    <option value={category._id}>
                      {category.categoryname}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Course
                </label>
                <select
                  class="form-select"
                  value={course_id}
                  onChange={courseSelect}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  {courses.map((course) => (
                    <option value={course._id}>{course.coursename}</option>
                  ))}
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Chapter Title
                </label>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  class="form-control input"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Content
                </label>
                <div style={{ backgroundColor: "#fff" }}>
                  <RichTextEditior setContent={setContent} />
                </div>
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
                  Publish
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default MakeCourse;
