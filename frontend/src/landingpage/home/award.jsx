import React from 'react';
function Award() {
    return ( 
        <div className='container p-5'>
           <div className="row">
            <div className="col-6">
                <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677089/largestBroker_mtjse0.svg" alt="" />
            </div>
            <div className="col-6">
                <h1 className='mt-5'>Largest stock broker in india</h1>
                <p className='mt-3 mb-5'>2+ million Stockpro clients contribute to over 15% of all retail order volumes in india daily by tradin and investing in:</p>
                 <div className="row">
                    <div className="col-5">
                        <ul>
                            <li>Future and options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <ul>
                            <li>Stock and IPOs</li>
                            <li>Diract mutual funds</li>
                            <li>Bonds and GOVT. securities</li>
                        </ul>
                    </div>
                 </div>
                 <img src="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677086/pressLogos_l9ynvg.png" alt="" />
            </div>
           </div>
        </div>
     );
}

export default Award;

