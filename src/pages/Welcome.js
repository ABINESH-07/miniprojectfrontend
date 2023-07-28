import React, { Component } from 'react'
import './welcome.css'
import { logout, selectUser } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Welcome() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
    return (
      <div className='wel'>
      <h2 className='hi'>
      <center>
      Welcome {user.name}
      <br/> 
      </center>
      </h2>
      </div>
    )
  }
      