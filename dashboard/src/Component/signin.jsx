import react, { useContext, useState } from "react";

import axios from "axios";
// 

// import { ToastContainer, toast } from "react-toastify";

function Signin() {

    
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    function handleonchange(e) {
        let { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });

    }
/// handle sucdes error
// const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });
//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-right",
//     });



    async function formsubmit(e) {
        e.preventDefault();
       
        try {
          const { data } = await axios.post(
            "https://stockpro-kre3.onrender.com/signin",
            {
              ...inputValue,
            }
          );
          const { success, message } = data;
          console.log(data)
          // if (success) {
          //   handleSuccess(message);
          //   setTimeout(() => {
          //     window.location="/";
          //   }, 1000);
          // } else {
          //   handleError(message);
          // }
        } catch (error) {
          console.log(error);
        }
        setInputValue({
            email: "",
            password: "",
            username: "",
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
                    <form className=" mb-5 mt-2   needs-validation" onSubmit={formsubmit}>
                        <h3 className="">create acount </h3>


                        <div className="mb-3 ms-5  me-5" >

                            <input name="username" type="text" placeholder="your name" className="form-control" required onChange={handleonchange} value={inputValue.username} />
                            <div className="invalid-feedback">
                                pleas enter your name
                            </div>
                        </div>
                        <div className="mb-3 ms-5  me-5" >

                            <input name="email" type="text" placeholder="enter your email" className="form-control" required onChange={handleonchange} value={inputValue.email} />
                            <div class="invalid-feedback">
                                pleas enter your email
                            </div>
                        </div>
                        <div className="mb-3 ms-5  me-5" >

                            <input name="password" type="password" placeholder="Set password" className="form-control" required onChange={handleonchange} value={inputValue.password} />
                            <div className="invalid-feedback">
                                pleas Set a password
                            </div>
                        </div>

                        <div className=" ms-5 me-5">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                    <div  >
                        <p style={{ fontSize: "1.5rem", color: "black" }} >do have an acount  <Link to={"/login"}>Login</Link></p>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}
export default Signin;
