import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { config, URL } from '../../utils/config';

const ChapterScreen = () => {
    const {id} = useParams();
    const [courses, setCourses] = useState({});
    const [show, setShow] = useState(false)
    const [chapters, setChapters] = useState([])
    const [chapterTitle, setChapterTitle] = useState("")
    const [selectChapter, setSelectChapter] = useState("");
    useEffect(() => {
        axios.get(`${URL}api/v1/course/getbycourse/${id}`, config)
        .then(data=> 
        {  
            const result = data.data.data;
           
            setCourses(result)
        })
        },[]);
        
        useEffect(() => {
            axios.get(`${URL}api/v1/chapter/${id}`, config)
            .then(data=>{
              const result = data.data.data
              console.log(data)
              setChapters(result)
            })
            }, []);

const chapterContent = chapters.filter(chapter=> chapter._id === selectChapter)

  const handleChapter = (e) => {
    setSelectChapter(e.target.value);
    e.preventDefault();
  };
    return (
        <div>
            <p>Chapter</p>
            <div className='category mb-3'>
            <div className='container'>
                <div className='row mt-3'>
                        <div className='col-md-6'>
                        <p>{courses.coursename}</p>
                    </div>
                    <div className='col-md-6'>
                    <p className='click d-flex justify-content-end' onClick={()=> setShow(!show)}>{show ? <FontAwesomeIcon icon={faMinus} style={{height:'20px', width:'20px', color:'#696F78'}} /> : <FontAwesomeIcon icon={faPlus} style={{height:'20px', width:'20px', color:'#696F78'}} />}</p>
                    </div>
                </div>
            </div>
            <div  className={show ? 'content show' : 'content'}>
            <div className='container'>
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
            </div>
            </div>
          </div>
          <div class="mb-3">
              <div style={{ backgroundColor: "#fff" }}>
              {chapterContent.map((chapter) => (
              
              <>
              <div className='container'>
                <div className='d-flex justify-content-center'>
                <img src={chapter.image} style={{height:'300px', width:'300px'}} />
                </div>
                <p className='mt-3'>{parse(chapter.content)}</p>
              </div>
              </>
              ))}
              </div>
            </div>
        </div>
    );
};

export default ChapterScreen;