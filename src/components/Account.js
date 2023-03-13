import React from 'react';
import {Button} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from 'react-router-dom'

const Account = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/')
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <div>Hi {currentUser && currentUser.email}</div>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </>
  )
}

export default Account;