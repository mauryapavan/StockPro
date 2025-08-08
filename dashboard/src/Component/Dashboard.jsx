import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";


import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import BuyActionWindow from "./BuyActionWindow";
import Buywindow from "../Context/Buywindow";
import Signup from "./signupage";
//import { GeneralContextProvider } from "./GeneralContext";


const Dashboard = () => { 
   
   let[ buyWindowopen,setbuyWindowopen]=useState(false);
   let [uid,setuid]=useState(0)
   function buywindowfunction(uuid){
    console.log(uuid)
    setuid(uuid);
    setbuyWindowopen(!buyWindowopen);
   }

  return (
    <div className="dashboard-container">
      <Buywindow.Provider value={{buywindowfunction}}>
      <WatchList/>  
      {buyWindowopen && <BuyActionWindow uid={uid}/>}
      </Buywindow.Provider>

        
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
