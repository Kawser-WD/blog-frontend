import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './Admin/Chapters/Chapters';
import CourseEdit from './Admin/CourseEdit/CourseEdit';
import Courses from './Admin/Courses/Courses';
import CreateCategory from './Admin/CreateCategory/CreateCategory';
import CreateCourse from './Admin/CreateCourse/CreateCourse';
import Dashboard from './Admin/Dashboard/Dashboard';
import MakeCourse from './Admin/MakeCourse/MakeCourse';
import Users from './Admin/Users/Users';
import UserUpdate from './Admin/UserUpdate/UserUpdate';
import Login from './Authentication/Login/Login';
import Main from './components/Main/Main';
import Sidebar from './components/Share/Sidebar/Sidebar';
import ChapterScreen from './UserScreen/ChapterScreen/ChapterScreen';
import Course from './UserScreen/Course/Course';
function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
   {
    token ?
    <Sidebar>
      <Routes>
       <Route  path="/" element={<Main/>} />
       <Route path="/course" element={<Course/>} />
       <Route path="/course/:id" element={<ChapterScreen/>} />
       <Route path="/chapters" element={<Chapters/>} />
       <Route path="/makecourse" element={<MakeCourse/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/usersmanagement" element={<Users/>} />
       <Route path="/updateuser/:id" element={<UserUpdate/>} />
       <Route path="/coursedetail" element={<Courses/>} />
       <Route path="/courseupdate/:id" element={<CourseEdit/>} />
       <Route path="/createcourse" element={<CreateCourse/>} />
       <Route path="/createcategory" element={<CreateCategory/>} />
       <Route  path="/login" element={<Login/>} />
       </Routes>
      </Sidebar>
      :
    <>
     <Sidebar>
       <Routes>
       <Route  path="/" element={<Main/>} />
       <Route  path="/login" element={<Login/>} />
      </Routes>
   </Sidebar>
    </>
     
   }
      
     <Toaster
      position="top-center"
      reverseOrder={false}
     />
    </BrowserRouter>
  );
}

export default App;
