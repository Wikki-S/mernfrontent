import React from "react";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
        setName(e.target.value);
    }
    const passHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let datavalue = JSON.parse(localStorage.getItem('data'));
        let username = datavalue.email;
        let passwords = datavalue.password;
        if (username === name && passwords === password) {
            alert("Login Successful");
            navigate('/');
        }
        else if (name ==='admin@gmail.com' && password === 'admin') {
            alert("Login Successful");
            navigate('/dashboard');
        }
         else {
            alert("Login Failed");
        }
    }
    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <label>Email:</label>
            <input onChange={emailHandler} type="text" name="email" />
            <label>Password:</label>
            <input onChange={passHandler} type="password" name="password" />
            <button type="submit">Login</button>
        </form>
        </div>
    );
}


export default Login;