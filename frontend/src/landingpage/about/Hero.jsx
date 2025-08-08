import React from "react";
function Hero(){
    return(
     <div className="container p-5 ">
        <div className="text-center mb-5 p-5">
            <h3 className="">
            We pioneered the discount broking model in India.
            Now, we are breaking ground with our technology.
            </h3>
        </div> 
        <hr />
        <div className="row p-5">
            <div className="col-5 fs-5">
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.
                     We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                 </p>
                 <p>
                 Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                 </p>
            </div>
            <div className="col-2"></div>
            <div className="col-5 fs-5">
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets</p>
                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
            </div>

        </div>

       <div className="row text-center">
        <h1>owner</h1>
        <div className="col-6 mt-5 mb-5">
            <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1753532469/Edusphere/rnyognn68qnpnx9rh7b2.jpg" style={{height:"30rem", width:"30rem", borderRadius:"50%"}} alt="" />
            <h5><i> Maurya Pawan</i></h5>
            <p>ownner of stockpro</p>
        </div>
        <div className="col-6 fs-5 text-start p-5 mt-5">
            <p>
            Pawan bootstrapped and founded stockpro to overcome the hurdles he faced during his decade long stint as a trader. 
         
            </p>
            <br />
            <p>i am a computer scienc engineering student</p>
            <p>
            Playing basketball,cricket , vollyball is his zen.
            </p>
            
        </div>

       </div>
     </div>
    )
}
export default Hero;