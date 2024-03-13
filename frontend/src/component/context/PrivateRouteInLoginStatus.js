import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext';

const PrivateRouteInLoginStatus = ({children}) => {
    const {authToken} = useAuth();
    console.log(authToken)

    // 如果在登入狀態的話
    if (authToken){
        console.log('success')
        return <Navigate to="/" />
    }

    return children;
};

export default PrivateRouteInLoginStatus;

// if website don't get token in localstorage, navigate to
// login and alert please login