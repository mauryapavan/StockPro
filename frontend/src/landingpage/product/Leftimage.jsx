import React from "react";
function Leftimage({ img, name, description, link1}) {
    return (
        <div className="container p-5">
            <div className="row">

                <div className="col-4 p-3 " style={{marginTop:"10rem"}}>
                    <div className="text-start " >
                        <h1>{name}</h1><br />
                        <p className="fs-5 ">{description}</p>
                    </div>
                    <div className="text-start ">
                        <a href="" style={{ textDecoration: "none" }} className="fs-5">{link1}</a>

                    </div>

                </div>
                
                <div className="col-6 p-3 ms-2"><img src={img} alt="" /></div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}
export default Leftimage;