import React from 'react';
import {useNavigate} from 'react-router-dom'
function Navbar() {
     let navigate=useNavigate()
    return (<nav className="navbar navbar-expand-lg border  p-3" style={{backgroundColor:"#97abcc"}} >
        <div className="container-fluid" >
            <a class="navbar-brand" href="/" style={{color:"Blue",fontSize:"2rem"}}><i class="fa-solid fa-money-bill-trend-up"></i> Stockpro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse fs-5 " id="navbarNav" style={{marginLeft:"40%"}}>
                <ul class="navbar-nav ">
                    <li class="nav-item  p-3 text-center" >
                        <a class="nav-link " onClick={()=>{navigate("/signup")}} >Signup</a>
                    </li>
                    <li class="nav-item  p-3 ">
                        <a class="nav-link ms-3" onClick={()=>{navigate("/pricing")}}>Pricing</a>
                    </li>
                    <li class="nav-item  p-3">
                        <a class="nav-link " onClick={()=>{navigate("/product")}}>Products</a>
                    </li>
                    <li class="nav-item p-3">
                        <a class="nav-link ms-3" onClick={()=>{navigate("/about")}}>About</a>
                    </li>
                    <li class="nav-item  p-3">
                        <a class="nav-link ms-3 " onClick={()=>{navigate("/support")}}>supports</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}

export default Navbar;
