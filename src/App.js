import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Products from "./route/Products"
import Reports from "./route/Reports"
import Orders from './pag/Orders/index';
import Team from "./route/Team";
import Chat from "./route/chat";
import Welcome from "./pages/Welcome";
import './App.css';
import Navbar2 from './component/Navbar';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Home1 from "./pages/Home"

import Loginfrist from './login/Loginfrist';
import Loginsadmin from './Loginsadmin';
import Loginsleader from './Loginsleader';
import Loginsmember from './Loginsmember';
import Register from './Register';
import Feedback from './Feedback';
function App() {
  
  return (
    <div>
    <BrowserRouter>
   <Routes>
   <Route path="/" element={
     <>
     <Home1/>
     </>
  
 } />
    <Route path="/pricing" element={<Loginfrist/>}></Route>
    <Route path="/Feedback" element={<Feedback/>}></Route>
    <Route path="/loginadmin" element={<Loginsadmin/>}></Route>
    <Route path="/loginleader" element={<Loginsleader/>}></Route>
    <Route path="/loginmember" element={<Loginsmember/>}></Route>
    <Route path="/Sign" element={<Register />} />
    <Route path="/abc" element={
      <>
      < Navbar/>
      <Welcome />
      </>
    } />
    <Route path="/orders" element=
          {
            <>
            <Navbar/>
            <Orders/>
            </>
          }/>
          <Route path="/chat" element=
          {
            <>
            <Navbar/>
            <Chat/>
            </>
          }/>
          <Route path="/products" element={
            <>
            <Navbar/>
            <Products/>
            </>
           }/>
          <Route path="/team" element={
            <>
            <Navbar/>
            <Team/>
            </>
           }/>
           <Route path="/HARISH" element={<Home1/>} />
          <Route path="/reports" element={
            <>
            <Navbar/>
            <Reports/>
            </>
          } />

          <Route path='/assign' element={
            <>
            <Navbar2/>
            <Home />
            </>
          }></Route>
        <Route path='/addProduct' element={
          <>
          <Navbar2/>
          <AddProduct />
          </>
        }></Route>
        <Route path='/h' element={
          <>
          <Navbar2/>
          <Home />
          </>
        }></Route>
        <Route path='/return' element={<Home />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
        
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;