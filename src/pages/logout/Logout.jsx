import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { logoutCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext';


export default function Logout() {
    const {   dispatch } = useContext(AuthContext);
    logoutCall(dispatch);
    // localStorage.setItem("user", null)
  return (
    <div><Redirect to="/login" /></div>
  )
}
