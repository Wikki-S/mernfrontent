import React from 'react';
import {useState} from 'react';
import {useNavigate} from  'react-router-dom';

function Register() {
    const navigate = useNavigate();

const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
});
const changeHandler = (e) => {
   setData({
    ...data, 
    [e.target.name]: e.target.value
   
});
}
const formSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('data',JSON.stringify(data));
    
        alert('Registered Successfully');
        navigate('/login');

   console.log(data);
    }
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={formSubmit}>
            <label>First Name:</label>
            <input onChange={changeHandler} type="text" name="firstName" />
            <label>Last Name:</label>
            <input onChange={changeHandler} type="text" name="lastName" />
            <label>Email:</label>
            <input onChange={changeHandler} type="text" name="email" />
            <label>Password:</label>
            <input onChange={changeHandler} type="password" name="password" />
            <button  type="submit">Register</button>
            </form>
    </div>
  )
}

export default Register