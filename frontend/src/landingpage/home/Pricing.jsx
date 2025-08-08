import React from 'react';
function Pricing() {
    return (<div className="container p-3">
        <div className="row p-5">
            <div className="col-5 p-5">
                <h2 className=' mb-5'>Unbeatable pricing</h2>
                <p style={{marginTop:"5px"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <div>
                    <a href="" style={{textDecoration:"none"}}>see pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="col-6 p-5">
                <div className="row">
                    <div className="col text-center border">
                        <h1>₹0</h1>
                       <p>Free equity delivery
                       and direct mutual funds</p>
                    </div>
                    <div className="col text-center border">
                        <h1>₹20</h1>
                        <p> Intraday and
                        F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Pricing;