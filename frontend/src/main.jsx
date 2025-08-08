import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './landingpage/home/Homepage'
import Signup from './landingpage/signup/Hero'
import Product from './landingpage/product/Product'
import Pricing from './landingpage/pricing/Pricing'
import Support from './landingpage/supports/Support'
import Aboutpage from './landingpage/about/Aboutpage'
import Navbar from './landingpage/Navbar'
import Footer from './landingpage/footer'
import Notpage from './landingpage/Notpage'


createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/pricing' element={<Pricing />}></Route>
      <Route path='/support' element={<Support />}></Route>
      <Route path='/about' element={<Aboutpage />}></Route>
      <Route path='*' element={<Notpage/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>)