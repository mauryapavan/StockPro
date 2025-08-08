import React from "react";
function Hero(){
    return(
        <div className="containr p-5" style={{backgroundColor:"#1e5feb"}}>
            <div className="row p-3 m-5">
                <div className="col-6 text-start " style={{color:"white"}}>
                    <h3>Support Portal</h3>
                    <h3 className="mt-3">Search for an answer or browse help topics to create a ticket</h3>
                    <input type="text" className="mt-4" placeholder="What are the official social media handles of Stock pro?" style={{width:"60%", height:"30%"}}/>
                </div>
                <div className="col-6 text-start" style={{color:"white"}}>
                    <h3 className="text-center"><a href="" style={{textDecorationColor:"white",color:"white"}}>Track tickets</a></h3>
                    <h3 className="mt-3">featured</h3>
                    <ul className="ms-2">
                        <li><a href="" style={{textDecorationColor:"white",color:"white"}}><h5>MCX Crude option contract expiry - March 2025</h5></a></li>
                        <li> <a href="" style={{textDecorationColor:"white",color:"white"}}><h5>Current Takeovers and Delisting – March 2025</h5></a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Hero