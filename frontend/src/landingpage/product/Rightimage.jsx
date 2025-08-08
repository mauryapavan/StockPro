import React from "react";
function Rightimage({img,name,description,link1,link2,google,playstore}){
    return(
        <div className="container p-5">
            <div className="row">
                <div className="col-6 p-3"><img src={img} alt="" /></div>
                <div className="col-2"></div>
                <div className="col-4 p-3">
                   <div className="text-start">
                     <h1>{name}</h1><br />
                     <p className="fs-5 ">{description}</p>
                    </div> 
                    <div className="text-start">
                        <a href="" style={{textDecoration:"none"}} className="fs-5">{link1}</a>
                        <a href="" style={{textDecoration:"none"}} className="ms-5 fs-5">{link2}</a>
                    </div>
                    <div className="mt-4 text-start">
                    <a href="" style={{textDecoration:"none"}}> <img src={google} alt="" /></a>
                    <a href="" style={{textDecoration:"none"}} className="ms-5"> <img src={playstore} alt="" /></a>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rightimage;