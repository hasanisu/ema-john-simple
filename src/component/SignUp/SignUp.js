import React, { useState } from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password.length < 6 ){
            setError('password should be 6 character or more')
            return;
        }
        if(password !== confirm){
            setError('Your Password did not match')
            return;
        }
    
        console.log(email, password, confirm)
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="emai">Email</label>
                    <input type="email" name='email' placeholder='Your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Already have an account <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;