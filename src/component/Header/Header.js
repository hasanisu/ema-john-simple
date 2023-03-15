import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventories">Inventories</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                    <button className='btn-logout' onClick={logOut}>Log out</button>
                    :
                    <>
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                    </>
                
                }
                <span className='user'>{user?.email}</span>
                
            </div>
        </nav>
    );
};

export default Header;