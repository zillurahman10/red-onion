import React, { useState } from 'react';
import './SignUp.css'
import logo from '../../Images/logo2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorElement, setErrorElement] = useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    if (loading) {
        return <h1 className='d-flex justify-content-center align-items-center h-100'>Loading...</h1>
    }
    if (error) {
        setErrorElement(error.message)
    }
    if (user) {
        navigate('/login')
    }

    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <img style={{ width: '250px' }} src={logo} alt="" />
            </div>
            <div className='d-flex justify-content-center inputs mt-5'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' />
                    <br />
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input onBlur={handleConfirmPassword} type="password" name="password" id="" placeholder='Confirm Password' required />
                    <br />
                    <input className='SignUp' type="submit" value="Sign Up" />
                </form>
            </div>
            <p className='d-flex justify-content-center'>Already Have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;