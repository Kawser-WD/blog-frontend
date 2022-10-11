import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { config, URL } from '../../utils/config';

const UserUpdate = (props) => {
const {id} = useParams();
const [user, setUser] = useState({});
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [isAdmin, setIsAdmin] = useState(false);
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}api/v1/user/get_single/${id}`, config)
    .then(data=> 
    {  const result = data.data.data
        console.log(result)
        setUser(result)})
  }, []);

  const handleSubmit = async (e)=>  {
    setLoading(true)
    e.preventDefault();
    const user = { name, email, isAdmin, password };
    await axios.patch(`${URL}api/v1/user/update_single/${id}`, user, config)
    .then(data=>{
      if (data) {
        setLoading(false);
        navigate("/usersmanagement")
      }
    })
  }
    return (
        <div>
             {
                loading ?  <div className="d-flex justify-content-center" style={{marginTop:'25%'}}>
                <FadeLoader color={'#36d7b7'} loading={loading}  size={30} />
              </div>
                :
                <div>
                    <h4>Add User</h4>
              <form onSubmit={handleSubmit}>
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
                 defaultValue={user.name}
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
                  defaultValue={user.email}
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
                  defaultValue={user.password}
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
                  onChange={(e) => setIsAdmin(e.target.value, console.log(e.target.value))}
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
                  style={{ backgroundColor: "#00A1FF", color: "#fff" }}
                >
                  Update
                </button>
              </div>
            </form>
                </div>
             }
        </div>
    );
};

export default UserUpdate;