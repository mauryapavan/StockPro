import React from "react";
function Ticket() {
    return (
        <div className="container mt-5">
            <h3 className="text-muted ">To create a ticket, select a relevant topic</h3>
            <div className="row mt-5 p-3 text-start">
                <div className="col-4">
                    <h3><i class="fa-solid fa-square-plus"></i> Account Opening</h3>
                    <a href="" style={{ textDecoration: "none" }}>Resident individual</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Minor</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Non Resident Indian (NRI)</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Company, Partnership, HUF and LLP</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Glossary</a><br />
                </div>
                <div className="col-4">
                    <h3><i class="fa-regular fa-user"></i> Your Stock Pro Account</h3>
                    <a href="" style={{ textDecoration: "none" }}>Your Profile</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Account modification</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Nomination</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Transfer and conversion of securities</a><br />
                </div>
                <div className="col-4">
                    <h3><i class="fa-solid fa-arrow-up-right-dots"></i> Kite</h3>
                    <a href="" style={{ textDecoration: "none" }}>IPO</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Trading FAQs</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Margin Trading Facility (MTF) and Margins</a><br />
                    <a href="" style={{ textDecoration: "none" }}>Charts and orders</a><br />
                   <a href="" style={{ textDecoration: "none" }}>Alerts and Nudges</a><br />
                    <a href="" style={{ textDecoration: "none" }}>General</a><br />
                </div><br />

            </div>
        </div>
    )
}
export default Ticket;