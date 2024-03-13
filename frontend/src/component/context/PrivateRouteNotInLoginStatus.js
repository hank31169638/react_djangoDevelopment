import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext';

const PrivateRouteNotInLoginStatus = ({children}) => {
    const {authToken} = useAuth();
    console.log(authToken)

    if (!authToken){
        return <Navigate to="login" />
    }

    return children;
};

export default PrivateRouteNotInLoginStatus;
