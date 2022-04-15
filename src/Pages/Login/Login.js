import React, { useState } from 'react';
import logo from '../../Images/logo2.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <img style={{ width: '250px' }} src={logo} alt="" />
            </div>
            <div className='d-flex justify-content-center inputs mt-5'>
                <form onClick={handleSubmit}>
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input className='SignUp' type="submit" value="Sign Up" />
                </form>
            </div>
            <p className='d-flex justify-content-center'>New in Red Onion? <Link className='mx-2' to="/signup">Create a new account</Link></p>
        </div>
    );
};

export default Login;