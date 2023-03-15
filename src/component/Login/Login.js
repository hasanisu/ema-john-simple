import React from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';


const Login = () => {
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset();
            navigate('/')
        })
        .catch(error=>console.error(error))
    }
    
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
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