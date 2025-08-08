import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "../Context/usercontext";
import Cookies from 'js-cookie';

const Home = () => {
  const navigate = useNavigate();
 
  const [user, setUser] = useState({ emial: "email", username: "user" });
  useEffect(() => {
    const verifyCookie = async () => {
      //!cookies.token
      let {token}=Cookies.get();
     
      if (!token) {
        navigate("/login");
      }
      
      const { data } = await axios.post("http://localhost:3333",{token});


      const { status, users } = data;
       
      setUser({ ...user, emial: users.email, username: users.username });

      return status
        ? toast(`Hello ${users.username}`, {
          position: "top-right",
        })
        : (removeCookie("token"), navigate("/signup"));
    };
    verifyCookie();
  }, []);
 
  return (
    <UserContext.Provider value={{user}}>
      <div style={{ backgroundColor: "white" }}>


        <TopBar />
        <Dashboard />
        <ToastContainer />
      </div>
    </UserContext.Provider>
  );
};

export default Home;
