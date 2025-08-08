import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./Component/Home"


import Login from './Component/login';
import Signin from './Component/signin';


createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
      
       
        
        <Route path="/login" element={<Login/>}></Route>
      
    </Routes>

  </BrowserRouter> 

) 
