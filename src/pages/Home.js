import './home.css'
import React from 'react'
import Navbar1 from '../Navbar1'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../userSlice';
import { selectUser } from '../userSlice';
export default function Home1()
 {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    
  <div class="container1">
        <Navbar1/>
        <div class="text-box">
            <h1>HIKE</h1>
        </div>
  </div>
  )
}

