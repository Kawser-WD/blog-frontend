import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { config, URL } from '../../utils/config';
import { FadeLoader } from "react-spinners";
import RichTextEditior from '../RichTextEditior/RichTextEditior';

const CourseEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [chapters, setChapters] = useState([])
    const [chaptersId, setChaptersId] = useState({})
    const [content, setContent] = useState("")
    const [chapterTitle, setChapterTitle] = useState("")
    const [categories, setCategories] = useState({});
    const [courses, setCourses] = useState({});
    const [selectChapter, setSelectChapter] = useState("");
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      axios.get(`${URL}api/v1/chapter/${id}`, config)
      .then(data=>{
        const result = data.data.data
        setChapters(result)
      })
      }, []);

    useEffect(() => {
      axios.get(`${URL}api/v1/course/getbycourse/${id}`, config)
      .then(data=>{
        const result = data.data.data
        setChaptersId(result)
      })
      }, []);

     
// category
  useEffect(() => {
    try {
      async function fetchProductData() {
        const { data } = await axios.get(`${URL}api/v1/category/getbycategory/${courses.
          category_id
          }`, config);
        const result = data.data
        setCategories(result)
      }
      fetchProductData();
    } catch (error) {
      console.log(error);
    }
  }, [courses.category_id]);

// course
  useEffect(() => {
    try {
      async function fetchCourseData() {
        const { data } = await axios.get(`${URL}api/v1/course/getbycourse/${id}`, config);
        setCourses(data.data)
      }
      fetchCourseData();
    } catch (error) {
      console.log(error);
    }
  }, []);

const chapterContent = chapters.filter(chapter=> chapter._id === selectChapter)
const chapterid = chapterContent.map(id=> id._id)
const editId = chapterid.find(id=> id)
// console.log(editId)
  const handleChapter = (e) => {
    setSelectChapter(e.target.value);
    e.preventDefault();
  };


  const handleImage = (e) => {
    e.preventDefault();
      setImage(e.target.files[0],false)
  };

    //making image as base64 buffer for uploading to server
    const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    // update chapter
      const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        let base64Data
        if(image){
          base64Data = await toBase64(image);
        }
        const payload = {
          title: chapterTitle,
          content: content,
          image: base64Data
        };
        const { data } = await axios.patch(`${URL}api/v1/chapter/editbychapter/${editId}`, payload, config);
      
          if (data) {
            setIsLoading(false);
            navigate("/coursedetail")
          }
     
      
      };
    return (
        <div>
        <h3>Update Chapter</h3>
           {
            isLoading ?
            <div className="d-flex justify-content-center" style={{marginTop:'25%'}}>
            <FadeLoader color={'#36d7b7'} loading={isLoading}  size={30} />
          </div>
            :
            <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center"></div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Category
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
              >
              <option selected >{categories?.categoryname}</option>     
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Course
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
              >
              <option selected>{courses?.coursename}</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
               Chapter Title
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={selectChapter}
                onChange={handleChapter}
              >
              <option>Select Chapter</option>
              {chapters.map((chapter) => (
                <option value={chapter._id}  setChapterTitle={setChapterTitle}>
                  {chapter.title}
                 
                </option>
              ))}
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Content
              </label>
              <div style={{ backgroundColor: "#fff" }}>
              {chapterContent.map((chapter) => (
               <RichTextEditior
               setContent={setContent}
               chapter={chapter}
               />
              ))}
              </div>
            </div>
            <div class="mb-3">
            <label for="formFile" class="form-label">
              Upload Image
            </label>
            <input
              class="form-control"
              type="file"
              onChange={handleImage}
              id="formFile"
            />
          </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn"
                style={{ backgroundColor: "#00A1FF", color: "#fff" }}
              >
                Update
              </button>
            </div>
          </form>
           }
           
      </div>
    );
};

export default CourseEdit;