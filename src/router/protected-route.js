import React from 'react'
import { useStore } from '../store'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {userState} = useStore();
    const {isUserLogin} = userState;
   

    if(!isUserLogin) return <Navigate to="/auth"/>
  
    return children;
}

export default ProtectedRoute