import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


const Login = () => {
    
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form >
                <div className="form-control">
                    <label htmlFor="emai">Email</label>
                    <input type="email" name='email' placeholder='Your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>create a new account</Link></p>
            
        </div>
    );
};

export default Login;