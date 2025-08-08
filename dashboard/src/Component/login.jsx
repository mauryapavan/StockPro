import React, { useContext, useState } from "react";
import Loginpage from "../Context/Loginpage";
import axios from "axios";

import Cookies from 'js-cookie';
import {  useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";



function Login() {
 

  const navigate = useNavigate();
  let { login, setlogin } = useContext(Loginpage);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",

  });
  function handleonchange(e) {
    let { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });

  }

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  async function formsubmit(e) {

    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3333/login",
        {
          ...inputValue,
        },

      );
      
      const { status, message, token } = data;
      if (status) {
        handleSuccess(message);
        if (token) {
          Cookies.set("token", JSON.stringify(token), { expires: 1 }); // 7 days
        }

        setTimeout(() => {
          navigate("/")
        }, 2000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
    })


  }


  return (

    <div className="text-center " style={{}}>
      <div className="row ">

        <div className="col"></div>
        <div className=" col border p-5 mb-5  " style={{ textAlign: "center", backgroundColor: "white" }}>
          <div className="mb-4"><h2 style={{ color: "blue", fontSize: "5rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>StockPro</h2></div>
          <div className="mb-4">



          </div>
          <form className=" mb-5 mt-2   needs-validation" novalidate onSubmit={formsubmit}>
            <h3 className="">Welcome Back!</h3>



            <div className="mb-3 ms-5  me-5" >

              <input name="email" type="text" placeholder="enter your email" className="form-control" required onChange={handleonchange} value={inputValue.email} />
              <div className="invalid-feedback">
                pleas enter your email
              </div>
            </div>
            <div className="mb-3 ms-5  me-5" >

              <input name="password" type="password" placeholder="Enter your password" className="form-control" required onChange={handleonchange} value={inputValue.password} />
              <div className="invalid-feedback">
                pleas Enter your password
              </div>
            </div>

            <div className=" ms-5 me-5">
              <button className="btn btn-primary" type="submit">Log in</button>
            </div>
          </form>
          
        </div>
        <div className="col"></div>

      </div>
      <ToastContainer />
    </div>

  )
}
export default Login;