import React from "react";
import Cookies from 'js-cookie';
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  let navigate=useNavigate()

 function Logout(){
  Cookies.remove('token');
  navigate("/login")

 }

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index" >NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
      <div >
        <button className="btn btn-outline-danger" onClick={Logout}>Log out</button>
      </div>
    </div>
  );
};

export default TopBar;
