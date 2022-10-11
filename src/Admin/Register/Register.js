import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { config, URL } from '../../utils/config';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e)=>  {
    e.preventDefault();
    const user = { name, email, isAdmin, password };
    try {
      setLoading(true);
      const { data } = await axios.post(`${URL}api/v1/user/register`, user, config);
      if (data) {
        setLoading(false);
        navigate('/usersmanagement');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }
    return (
        <div>
          <h4 className='d-flex justify-content-center'>Add User</h4>
        <div className="d-flex justify-content-center">
        {
                loading ? 
                <div className='d-flex justify-content-center' style={{marginTop:'25%'}}> <FadeLoader color={'#282A36'} loading={loading}  size={30} />
                 </div>
                : 
              <form onSubmit={handleSubmit} style={{width:'50%'}}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  class="form-control input"
                  id="exampleFormControlInput1"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control input"
                  id="exampleFormControlInput1"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control input"
                  id="exampleFormControlInput1"
                  required
                />
              </div>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Role
                </label>
              <select
                  class="form-select"
                  aria-label="Default select example"
                  required
                  onChange={(e) => setIsAdmin(e.target.value)}
                  value={isAdmin}
                >
                <option value={true}>Admin</option>
                <option value={false}>General User</option>
                </select>
                </div>
                <br/>
              <div className="d-flex justify-content-center">
                <button
                  className="btn"
                  style={{ backgroundColor: "#0F172A", color: "#fff" }}
                >
                  Submit
                </button>
              </div>
            </form>
            }
     </div>
     <Outlet/>
        </div>
    );
};

export default Register;