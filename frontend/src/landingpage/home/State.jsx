import React from 'react';
function State() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5 ">
                    <h2 className='fs-10'>Trust with confidence</h2>
                    <h5 className='mt-5 '>No spam or gimmicks</h5>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h5 className=' mt-5'>The Zerodha universe</h5>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5 className='mt-5'>Do better with money</h5>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677088/ecosystem_dvlbob.png"  style={{width:"85%"}} alt="" />
                    <div className='text-center'>
                        <a href="" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                         <a href="" className='mx-5' style={{textDecoration:"none"}}>try kit demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default State;