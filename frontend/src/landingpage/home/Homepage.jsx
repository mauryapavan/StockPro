import React from 'react';
import State from './State';
import Hero from './Hero';
import Navbar from '../Navbar';
import Pricing from './Pricing';
import Education from './Education';
import Footer from '../footer';
import Openacount from '../Openacount';
import Award from './award';
function Homepage() {
    return ( <>
        
         <Hero/>
         <Award/>
         <State />
         <Pricing />
         <Education />
         <Openacount />
    </> );
}

export default Homepage;