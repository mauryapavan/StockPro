import React from "react";
function Brokerage() {
    return (
        <div className="continer">
            <h1 className="text-center">Charges for account opening</h1>
            <div className="container border mb-5 mt-2">


                <div className="row p-3 border">
                    <div className="col-4 text-start"><h5>Type of account</h5></div>
                    <div className="col-4"></div>
                    <div className="col-4 text-center"> <h5>	Charges</h5></div>
                </div>
                <div className="row p-3">
                    <div className="col-4 text-start"><p>Online account</p></div>
                    <div className="col-4"></div>
                    <div className="col-4 text-center"><p>Free</p></div>
                </div>
                <div className="row p-3" style={{ backgroundColor: "#e4e9f2" }}>
                    <div className="col-4 text-start"><p>Ofline account</p></div>
                    <div className="col-4"></div>
                    <div className="col-4 text-center"><p>Free</p></div>
                </div>
                <div className="row p-3">
                    <div className="col-4 text-start"><p>NRI account (offline only)</p></div>
                    <div className="col-4"></div>
                    <div className="col-4 text-center"><p>	₹ 500</p></div>
                </div>
                <div className="row p-3" style={{ backgroundColor: "#e4e9f2" }}>
                    <div className="col-4 text-start"><p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p></div>
                    <div className="col-4"></div>
                    <div className="col-4 text-center"><p>	₹ 500</p></div>
                </div>
            </div>


            
        </div>
    )
}
export default Brokerage;