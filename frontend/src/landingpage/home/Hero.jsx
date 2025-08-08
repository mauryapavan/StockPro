import React from 'react';
function Hero() {
    return ( <>
    <div className="container p-5">
        <div className='row text-center' >
            <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677089/homeHero_dbzyqu.png" alt="" className='mb-5'/>
            <h1 className='mt-5'>Invest in everything</h1>
            <p className='mt-2 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
            <button className='mt-5 btn btn-primary fs-5' style={{width:"20%",margin:"auto"}}>signup now</button>
        </div>
    </div>
    </> );
}

export default Hero;