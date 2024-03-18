import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const RequireAuthRoute = ({children}) => {
    const {authToken} = useAuth();
    // 如果在登入狀態的話
    if (authToken){
        console.log('你已登入，導向首頁')
        return <Navigate to="/"/>
    }

    return children;
};

export default RequireAuthRoute;

// if website don't get token in localstorage, navigate to
// login and alert please login