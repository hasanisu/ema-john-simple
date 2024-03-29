import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import {Navigate, useLocation} from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()
    if(user && user.uid){
        return children;
    }
    return<Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;