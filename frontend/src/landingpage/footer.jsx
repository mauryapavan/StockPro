import React from 'react';
function Footer() {
    return (
        <div className="cotainer ps-5 pe-5 pt-3 border-top" style={{ backgroundColor: "#e4e9f2" }}>
            <div className="row ps-5 pe-5 pt-3">
                <div className="col-3">
                    <a class="navbar-brand" href="#" style={{ color: "Blue", fontSize: "2rem" }}><i class="fa-solid fa-money-bill-trend-up"></i> Stockpro</a>
                </div>
                <div className="col-3">
                    <h5>compony</h5>
                    <a style={{ textDecoration: "none" }} href="">About</a><br />
                    <a style={{ textDecoration: "none" }} href="">Products</a><br />
                    <a style={{ textDecoration: "none" }} href="">Pricing</a><br />
                    <a style={{ textDecoration: "none" }} href="">Referral programme</a><br />
                    <a style={{ textDecoration: "none" }} href="">Careers</a><br />
                    <a style={{ textDecoration: "none" }} href="">Open source</a><br />
                    <a style={{ textDecoration: "none" }} href="">Press & media</a><br />



                </div>
                <div className="col-3">
                    <h5>support</h5>
                    <a href="" style={{ textDecoration: "none" }}>Contact us</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Support portal</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Z-Connect blog</a><br />
                    <a href="" style={{ textDecoration: "none" }}>List of charges</a><br />
                    <a href="" style={{ textDecoration: "none" }}> Downloads & resources</a><br />
                    <a href="" style={{ textDecoration: "none" }}> Videos</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Market overview</a><br />
                    <a href="" style={{ textDecoration: "none" }}>How to file a complaint?</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Status of your complaints</a><br />
                </div>
                <div className="col-3"><h5>Acount</h5>
                    <a style={{ textDecoration: "none" }} href="">open an acount </a><br />
                    <a style={{ textDecoration: "none" }} href="">Funds transfer</a><br />
                </div>
            </div>
            <div className='mt-5 text-small text-muted'>
                <p>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
                     SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – 
                     SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                      J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com,
                       for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p>
                Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2.  Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>
            
            </div>
        </div>
    );
}

export default Footer;