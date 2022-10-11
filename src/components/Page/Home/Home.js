import { faClock, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBook, faLayerGroup, faMessage, faMinus, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bell from '../../images/bell.png';
import edit from '../../images/edit.png';
import graduationcap from '../../images/graduation-cap.png';
import graph from '../../images/graph.png';
import book from '../../images/homework.png';
import plan from '../../images/plane.png';
import resturant from '../../images/restaurant.png';
import ring from '../../images/rings.png';
import './Home.css';
const Home = () => {
    const [show, setShow] = useState(false)
    const [graficaShow, setGraficaShow] = useState(false)
    const [medaiShow, setMediaShow] = useState(false)
    return (
        <div className='home' >
           <div className='top'>
            <h4 className='top-text'>Ciao Cireneo Jose</h4>
            <div className='container'>
            <div className='d-flex justify-content-end'>
                <div className='notification'>
                <img src={Bell} style={{height:'20px', width:'20px', marginTop:'-5px'}} alt=""/>
                </div>
            </div>
            </div>
           </div>
           <div className='container percorso'>
            <div className='row'>
                <div className='col-md-8'>
                    <h5 className='che'>II Percorso che hai scelto e`:</h5>
                    <div className='d-flex justify-content-end'>
                        <p className='cambia'>Cambia percorso</p>
                        <img src={edit} style={{height:'10px', width:'10px', marginTop:'-20px'}} alt=""/> 
                    </div>
                    <p className='marketing-text'>Digital Marketing</p>
                    <h5  className='che'>I tuoi Settori di interesse:</h5>
                    <div className='d-flex justify-content-end'>
                        <p className='cambia'>Modifica Settori</p>
                        <img src={edit} style={{height:'10px', width:'10px', marginTop:'-22px'}} alt=""/> 
                    </div>
                   <div className='box'>
                   <div className='box1'>
                    <div className='box-inner'>
                    <p className='box1-text'>TRAVEL</p>
                    <img className='box-icon' src={plan} style={{height:'40px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box1 mx-2'>
                    <div className='box-inner'>
                    <p className='box2-text'>EDUCATION</p>
                    <img className='box-icon' src={graduationcap} style={{height:'40px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box1'>
                    <div className='box-inner'>
                    <p className='box3-text'>FODO</p>
                    <img className='box-icon' src={resturant} style={{height:'40px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                   </div>
                </div>
                <div className='col-md-4'>
                <h5>Percorso completo al:</h5>
                <div className='completo'>
                    <p className='completo-text'></p>
                </div>
        <div className='percorso-block'>
        <h5>I tuio obiettivi:</h5>
                <div className='box2'>
                   <div className='box-growth'>
                    <div className='box-inner'>
                   <div className='box-4'>
                   <p className='eight'>8</p>
                    <p className='box4-text'>RECENT WORK AND ECONOMIC GROWTH</p>
                   </div>
                    <img className='box-icon' src={graph} style={{height:'30px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box-partner mx-2'>
                    <div className='box-inner'>
                    <div className='box-4'>
                   <p className='eight'>17</p>
                    <p className='box5-text'>PARTNERSHIPS<br/>FOR THE GOALS</p>
                   </div>
                    <img className='box-icon' src={ring} style={{height:'30px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                    <div className='box-edu'>
                    <div className='box-inner'>
                    <div className='box-4'>
                   <p className='eight'>4</p>
                    <p className='box6-text'>QUALITY<br/>EDUCATION</p>
                   </div>
                    <img className='box-icon' src={book} style={{height:'30px', width:'40px'}} alt=""/>
                    </div>
                    </div>
                   </div>
        </div>
                </div>
            </div>
           </div>
           <div className='wrapper'>
           <div className='accordion'>
           
                    <div className='item'>
                    <div className='title'>
                     <div className='container'>
                        <div className='row'>
                      <div className='col-md-6 copy'>
                      <div className='edit-box'>
                   <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faPenToSquare} style={{height:'25px', width:'25px', marginTop:'10px',color:'#FFFFFF'}} />
                   </div>
                    </div>
                    <div className='copy-main'>
                    <p className='copywriting'>Copywriting</p>
                   <div className='point'>
                   <FontAwesomeIcon icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   <FontAwesomeIcon className='watch' icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   <FontAwesomeIcon className='watch' icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   </div>
                   </div>
                      </div>
                   <div className='col-md-4'>
                   <div className='circle-progress d-flex justify-content-end' >
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }}>
                    <CircularProgressbarWithChildren strokeWidth={10} value={20} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBook} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block"}} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={90} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBars} style={{height:'15px', width:'15px', color:'#7BC240'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faFileLines} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   </div>
                   </div>
                      <div className='col-md-2 mt-3'>
                      <p className='click d-flex justify-content-end' onClick={()=> setShow(!show)}>{show ? <FontAwesomeIcon icon={faMinus} style={{height:'20px', width:'20px', color:'#696F78'}} /> : <FontAwesomeIcon icon={faPlus} style={{height:'20px', width:'20px', color:'#696F78'}} />}</p>
                      </div>
                        </div>
                     </div>
                    </div>
                    <div className={show ? 'content show' : 'content'}>
                     <div className='container'>
                     <p className='content-text'>Impari a scrivere test in grado di toccareil cuore delle persone e farle emozonare. II progetto prevede la creazione di un articolo per il web.</p>
                     <hr/>
                     <p className='skill-text'>Skill Principali</p>
                     <button type="" className='scrittura-button'>Scrittura</button>
                     <button type="" className='skill-button'>creativita</button>
                     <hr/>
                     <div className='row' style={{marginLeft:'10px', marginBottom:'10px'}}>
                        <div className='col-md-4'>
                          <div className='guida'>
                          <div style={{ width: 50, height: 40 }} className='guida-main'>
                    <CircularProgressbarWithChildren strokeWidth={10} value={20} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBook} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Guida completeta al 26%</p>
                          </div>
                          <button type="" className='guida-btn'>Via all Guida</button>
                        </div>
                        <div className='col-md-4'>
                            
                        <div className='guida'>
                        <div style={{ width: 50, height: 40 }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={90} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBars} style={{height:'15px', width:'15px', color:'#7BC240'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Test - 221/300</p>
                          </div>
                          <button type="" className='test-btn'>Via all Test</button>
                        </div>
                        <div className='col-md-4'>
                            
                        <div className='guida'>
                        <div style={{ width: 50, height: 40 }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faFileLines} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Progetto da completare</p>
                          </div>
                          <button type="" className='progetto-btn'>Via all Progetto</button>
                        </div>
                     </div>
                     </div>
                    </div>
                </div>
        
          
           </div>
           </div>
           <div className='wrapper'>
           <div className='accordion'>
           
                    <div className='item'>
                    <div className='title'>
                     <div className='container'>
                        <div className='row'>
                      <div className='col-md-6 copy'>
                      <div className='grafica-box'>
                   <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faLayerGroup} style={{height:'25px', width:'25px', marginTop:'10px',color:'#FFFFFF'}} />
                   </div>
                    </div>
                    <div className='copy-main'>
                    <p className='copywriting'>Grafica</p>
                   <div className='point'>
                   <FontAwesomeIcon icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   <FontAwesomeIcon className='watch' icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   <FontAwesomeIcon className='watch' icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   </div>
                   </div>
                      </div>
                   <div className='col-md-4'>
                   <div className='circle-progress d-flex justify-content-end' >
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }}>
                    <CircularProgressbarWithChildren strokeWidth={10} value={20} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBook} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBars} style={{height:'15px', width:'15px', color:'#7BC240'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faFileLines} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   </div>
                   </div>
                      <div className='col-md-2 mt-3'>
                      <p className='click d-flex justify-content-end' onClick={()=> setGraficaShow(!graficaShow)}>{graficaShow ? <FontAwesomeIcon icon={faMinus} style={{height:'20px', width:'20px', color:'#696F78'}} /> : <FontAwesomeIcon icon={faPlus} style={{height:'20px', width:'20px', color:'#696F78'}} />}</p>
                      </div>
                        </div>
                     </div>
                    </div>
                    <div className={graficaShow ? 'content show' : 'content'}>
                     <div className='container'>
                     <p className='content-text'>Impari a scrivere test in grado di toccareil cuore delle persone e farle emozonare. II progetto prevede la creazione di un articolo per il web.</p>
                     <hr/>
                     <p className='skill-text'>Skill Principali</p>
                     <button type="" className='scrittura-button'>Scrittura</button>
                     <button type="" className='skill-button'>creativita</button>
                     <hr/>
                     <div className='row' style={{marginLeft:'10px', marginBottom:'10px'}}>
                        <div className='col-md-4'>
                          <div className='guida'>
                          <div style={{ width: 50, height: 40 }}>
                    <CircularProgressbarWithChildren strokeWidth={10} value={20} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBook} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Guida completeta al 26%</p>
                          </div>
                          <button type="" className='guida-btn'>Via all Guida</button>
                        </div>
                        <div className='col-md-4'>
                            
                        <div className='guida'>
                        <div style={{ width: 50, height: 40 }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={90} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBars} style={{height:'15px', width:'15px', color:'#7BC240'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Test - 221/300</p>
                          </div>
                          <button type="" className='test-btn'>Via all Test</button>
                        </div>
                        <div className='col-md-4'>
                            
                        <div className='guida'>
                        <div style={{ width: 50, height: 40 }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faFileLines} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Progetto da completare</p>
                          </div>
                          <button type="" className='progetto-btn'>Via all Progetto</button>
                        </div>
                     </div>
                     </div>
                    </div>
                </div>
        
          
           </div>
           </div>
           <div className='wrapper'>
           <div className='accordion'>
           
                    <div className='item'>
                    <div className='title'>
                     <div className='container'>
                        <div className='row'>
                      <div className='col-md-6 copy'>
                      <div className='edit-box'>
                   <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faMessage} style={{height:'25px', width:'25px', marginTop:'10px',color:'#FFFFFF'}} />
                   </div>
                    </div>
                    <div className='copy-main'>
                    <p className='copywriting'>Socail Media</p>
                   <div className='point'>
                   <FontAwesomeIcon icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   <FontAwesomeIcon className='watch' icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   <FontAwesomeIcon className='watch' icon={faClock} style={{height:'15px', width:'15px',color:'#919191'}} />
                   <span className='copy-text'>13 Ore di Teoria</span>
                   </div>
                   </div>
                      </div>
                   <div className='col-md-4'>
                   <div className='circle-progress d-flex justify-content-end' >
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }}>
                    <CircularProgressbarWithChildren strokeWidth={10} value={20} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBook} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBars} style={{height:'15px', width:'15px', color:'#7BC240'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   <div style={{ width: 50, height: 40, display: show ? "none" : "block" }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faFileLines} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                   </div>
                   </div>
                      <div className='col-md-2 mt-3'>
                      <p className='click d-flex justify-content-end' onClick={()=> setMediaShow(!medaiShow)}>{medaiShow ? <FontAwesomeIcon icon={faMinus} style={{height:'20px', width:'20px', color:'#696F78'}} /> : <FontAwesomeIcon icon={faPlus} style={{height:'20px', width:'20px', color:'#696F78'}} />}</p>
                      </div>
                        </div>
                     </div>
                    </div>
                    <div className={medaiShow ? 'content show' : 'content'}>
                     <div className='container'>
                     <p className='content-text'>Impari a scrivere test in grado di toccareil cuore delle persone e farle emozonare. II progetto prevede la creazione di un articolo per il web.</p>
                     <hr/>
                     <p className='skill-text'>Skill Principali</p>
                     <button type="" className='scrittura-button'>Scrittura</button>
                     <button type="" className='skill-button'>creativita</button>
                     <hr/>
                     <div className='row' style={{marginLeft:'10px', marginBottom:'10px'}}>
                        <div className='col-md-4'>
                          <div className='guida'>
                          <div style={{ width: 50, height: 40 }}>
                    <CircularProgressbarWithChildren strokeWidth={10} value={20} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBook} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Guida completeta al 26%</p>
                          </div>
                          <button type="" className='guida-btn'>Via all Guida</button>
                        </div>
                        <div className='col-md-4'>
                            
                        <div className='guida'>
                        <div style={{ width: 50, height: 40 }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={90} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faBars} style={{height:'15px', width:'15px', color:'#7BC240'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Test - 221/300</p>
                          </div>
                          <button type="" className='test-btn'>Via all Test</button>
                        </div>
                        <div className='col-md-4'>
                            
                        <div className='guida'>
                        <div style={{ width: 50, height: 40 }} className="circle">
                    <CircularProgressbarWithChildren strokeWidth={10} value={0} styles={buildStyles({pathColor:'#7BC240'})}>
                    <FontAwesomeIcon icon={faFileLines} style={{height:'15px', width:'15px', color:'#D6D6D6'}} />
                        </CircularProgressbarWithChildren >
                    </div>
                    <p className='guida-text'>Progetto da completare</p>
                          </div>
                          <button type="" className='progetto-btn'>Via all Progetto</button>
                        </div>
                     </div>
                     </div>
                    </div>
                </div>
        
          
           </div>
           </div>
        </div>
    );
};

export default Home;