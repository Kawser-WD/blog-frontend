import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { config, URL } from '../../utils/config';
import './Login.css';

const Login = () => {
  console.log("login page actuall called ")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const  userData = JSON.parse(localStorage.getItem('user'));
    const isAdmin = userData?.isAdmin;
    const handleLogin = async (e) => {
      e.preventDefault();
      const loginData = {};
      loginData.email = email;
      loginData.password = password;
  
      try {
        setLoading(true);
        const { data } = await axios.post(`${URL}api/v1/user/login`, loginData, config);
        if (data) {
          setLoading(false);
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('token', data.token);
          window.location.href = isAdmin? '/dashboard' : '/';
        }
      } catch (error) {
        setLoading(false);
        setErrormsg(error.response.data);
      }
    };
    return (
     <>
    
        {
                loading ? 
                <div className='d-flex justify-content-center' style={{marginTop:'15%'}}> <FadeLoader color={'#282A36'} loading={loading}  size={30} />
                 </div>
                : 

                <div className="container d-flex justify-content-center" style={{marginTop:'100px'}}>
                <div className="card login-card">
                <div className="card-body">
                <div className="d-flex justify-content-center">
                <h5 class="card-title login-text">Login</h5>
                </div>
                <form onSubmit={handleLogin}>
                <div class="form-group">
                    <label class="form-label login-text">Email</label>
                    <input type="email" class="form-control input" name="email"  onChange={(e)=> setEmail(e.target.value)}   placeholder="Enter email"/>
                </div>
                <br />
                <div class="form-group">
                    <label class="form-label login-text">Password</label>
                    <input type="password" class="form-control input" name="password" onChange={(e)=> setPassword(e.target.value)}  placeholder="Password"/>
                </div>
                <br />
               <div className="d-grid">
               <button type="submit" class="btn" style={{backgroundColor:'#282A36', color:'#ffffff'}}>Login</button>
               </div>
                </form>
                </div>
            </div>
            </div>
            }

     </>
    );
};

export default Login;