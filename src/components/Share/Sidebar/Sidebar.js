import { faAddressBook, faCalendarAlt, faFileArchive, faObjectGroup, faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faBarsStaggered, faBook, faBookAtlas, faGift, faGripHorizontal, faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import {
    FaHome
} from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import Fire from '../../images/fire.png';
import Profile from '../../images/profile.jpg';
import './Sidebar.css';
const Sidebar = ({children}) => {
    const[admin ,setAdmin] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const[isOpen ,setIsOpen] = useState(true);
    const navigate = useNavigate();

    const  userData = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    const isAdmin = userData?.isAdmin;

    console.log("Admin is ",isAdmin)

    useEffect ( ( )=>{
        if(window.innerWidth < 768){
            setIsOpen(false)
        }
        },[]);


        const logOut = () => {
            localStorage.clear();
            navigate('/')
          }
          
    const menuItem=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        icon:  <FontAwesomeIcon icon={faGripHorizontal} />
    },
    {
        path:"/makecourse",
        name:"Create Chapter",
        icon:  <FontAwesomeIcon icon={faFileArchive} />
    },
    {
        path:"/chapters",
        name:"Chapters",
        icon:  <FontAwesomeIcon icon={faBook} />
    },
    {
        path:"/usersmanagement",
        name:"Users Management",
        icon:  <FontAwesomeIcon icon={faUser} />
    },
    {
        path:"/coursedetail",
        name:"Course Detail",
        icon:  <FontAwesomeIcon icon={faAddressBook} />
    },
    {
        path:"/createcourse",
        name:"Create Course",
        icon:  <FontAwesomeIcon icon={faObjectGroup} />
    },
    {
        path:"/createcategory",
        name:"Create Category",
        icon:  <FontAwesomeIcon icon={faCalendarAlt} />
    },
    {
        path:"/login",
        name: <span onClick={logOut}>Logout</span>,
        icon:  <FontAwesomeIcon icon={faArrowRightFromBracket} />
    }
    ]
    const generalMenuWithToken = [
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        
        {
            path:"/course",
            name:"Course",
            icon:<FontAwesomeIcon icon={faBookAtlas} />
        },
        {
            path:"/login",
            name: <span onClick={logOut}>Logout</span>,
        icon:  <FontAwesomeIcon icon={faArrowRightFromBracket} />
        }
    ]
    const generalMenuWithOutToken = [
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/login",
            name:"Login",
            icon:  <FontAwesomeIcon icon={faArrowRightFromBracket} />
        }
    ]
    return (
        <div className="main">
             <div style={{width: isOpen ? "240px" : "50px", backgroundColor: admin ? "#0F172A" : "#fff"}} className="sidebar">
               <div className="top_section">
                   <h2 style={{display: isOpen ? "block" : "none"}} className="logo">start2impact</h2>
                   <div style={{marginLeft: isOpen ? "16px" : "0px"}} className="bars">
                       <FontAwesomeIcon onClick={toggle} icon={faBarsStaggered} />
                   </div>
               </div>
              
                 <div>
                 <div className='container profile'  style={{display: isOpen ? "block" : "none"}} >
                  <img className="rounded-circle" style={{height:'100px',width:'100px'}} src={Profile} data-holder-rendered="true"/>
                  <p className='profile-name'>Cireneo Jose Antenio</p>
                  </div>
                 <div style={{display: admin ? 'none' : 'block'}}>
                 <div  className='d-flex justify-content-center profile-text'>
                  <FontAwesomeIcon style={{display: isOpen ? "block" : "none"}} className='victory-icon' icon={faHandPeace} /> <span style={{display: isOpen ? "block" : "none"}} className='victory'>2059 pt</span>
                  </div>
                  <div className='fire'>
                    <img src={Fire} style={{display: isOpen ? "block" : "none",height:'20px', width:'20px', marginTop:'13px'}} alt=""/>
                    <p className='fire-text' style={{display: isOpen ? "block" : "none"}}>2 giorni consecutivi<br/>su start2impact</p>
                  </div>
                <div className='d-flex justify-content-center'>
                <button className='invita-button' style={{display: isOpen ? "block" : "none"}} ><FontAwesomeIcon icon={faGift} style={{color:'#352D26', height:'15px', width:'15px'}} /> Invita un amico</button>
                </div>
                 </div>
                 </div>
               {
                  isAdmin &&
                  <>
                  {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                  }
                   </>
                }
                {
                    !token &&
                   <>
                   {
                    generalMenuWithOutToken.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                   }
                   </>
                }
                {
                   !isAdmin && token &&
                   <>
                   {
                    generalMenuWithToken.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                   }
                   </>
                }
           </div>
           <main style={{backgroundColor: admin ? "#FFFFFF" : "#E5E5E5"}}>{children}</main>
    </div>
    );
};

export default Sidebar;