import React, { useState } from 'react'
import logo_1 from '../assets/logo_1.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import apple from '../assets/apple.png'
import { Link } from "react-router-dom";




function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div>
            <div className="form bg-blue-100 py-12 font-outfit">

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <div className='flex flex-col items-center justify-center gap-y-6'>

                    <img src={logo_1} alt="mobile" className='' />

                    <h2 className='lg:text-4xl text-3xl text-center font-poppins font-semibold text-white-100 mb-8'>
                        Login To your Account
                    </h2>

                </div>

                <form className='p-12 bg-white-100 rounded-2xl lg:w-1/2 flex flex-col justify-center mx-auto'>
                    {/* Labels and inputs for form data */}

                    <div className='flex flex-col gap-y-6 items-center justify-center'>

                        <input onChange={handleEmail} className="border-2 border-blue-50 rounded-xl p-5 w-full"
                            value={email} type="email" placeholder='Enter Your Email' />

                        <input onChange={handlePassword} className="border-2 border-blue-50 rounded-xl p-5 w-full"
                            value={password} type="password" placeholder='Enter Your Password' />

                        <p>Forgot Password?</p>

                    </div>

                    <button onClick={handleSubmit} className="text-white-100 bg-blue-50 border-2 border-blue-50 font-semibold hover:text-blue-50 hover:border-2 hpver:border-blue-50 hover:bg-white-100 rounded-2xl py-3 lg:px-10 px-4 mt-5 uppercase w-36 mb-5 flex mx-auto">
                        Sign In
                    </button>

                    <p className='text-center'>
                        Don’t Have An Account? <Link to='/signup' className='hover:text-blue-50'> Sign Up</Link>
                    </p>
                </form>

                <div className='py-6'>
                    <p className='text-white-100 pb-5 text-center'>
                        Or sign in using
                    </p>

                    <div className='flex items-center justify-center gap-8'>
                        <img src={google} alt="mobile" className='w-16' />
                        <img src={facebook} alt="mobile" className='w-16' />
                        <img src={apple} alt="mobile" className='w-16' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn