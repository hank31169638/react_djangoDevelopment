import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const RedirectIfNotLoggedInRoute = ({children}) => {

    const {authToken} = useAuth();

    if (!authToken) {
        return <Navigate to="/login"/>
    }

    return children;
};

export default RedirectIfNotLoggedInRoute;
