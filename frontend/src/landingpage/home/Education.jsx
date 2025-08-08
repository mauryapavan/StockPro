import React from "react";
function Education() {
    return (  
        <div className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677088/education_tjyt1u.svg" alt="" />
                </div>
                <div className="col-6">
                    <h2 className="mb-5">Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <div className="mb-5"><a className="" style={{textDecoration:"none"}} href="">Versity <i class="fa-solid fa-arrow-right"></i></a></div>
                    
                    
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries. </p>
                    <a style={{textDecoration:"none"}} href="">Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;