import react, { useState } from "react";
import Signin from "./signin";
import Login from "./login";
import Loginpage from "../Context/Loginpage";
function Signup() {
    let [login, setlogin] = useState(true)

    return (
        <Loginpage.Provider value={{login,setlogin}}>


            <div className=""  >
                {!login && <Signin />}
                {login && <Login />}
            </div>
        </Loginpage.Provider>
    )
}
export default Signup;