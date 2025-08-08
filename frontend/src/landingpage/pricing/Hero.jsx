import React from "react";
function Hero(){
    return(
        <div className="container fs-5">
            <div className="m-5 p-5 text-center">
                <h1>Charges</h1>
                <p >List of all charges and taxes</p>
            </div>
            <div className="row p-5">
                <div className="col-4 p-3 text-center">
                    <div>
                        <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677090/pricing0_gbymtg.svg" alt="" />
                    </div>
                    <div className="">
                        <h1 >Free equity delivery</h1>
                        <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                </div>
                <div className="col-4 p-3 text-center">
                <div>
                        <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677086/intradayTrades_ueq6m8.svg" alt="" />
                    </div>
                    <div className="">
                        <h1 >Intraday and F&O trades</h1>
                        <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                </div>
                <div className="col-4 p-3 text-center">
                <div>
                      <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677090/pricing0_gbymtg.svg" alt="" />
                    </div>
                    <div >
                        <h1 >Free direct MF</h1>
                        <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero