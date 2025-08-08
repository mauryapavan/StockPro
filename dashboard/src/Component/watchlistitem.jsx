import React, { useState } from "react";
import Watchlistaction from "./Wathlistaction";

const Watchlistitem=({stock})=>{
   const [show,setshow]=useState(false);
   const handlemouseenter=()=>{
    setshow(true);
   }
   const handlemouseexit=()=>{
    setshow(false);
   }
  return(
    <li onMouseEnter={handlemouseenter} onMouseLeave={handlemouseexit}>
         <div className="item">
          <p className={stock.isDown ? "down":"up"}>{stock.name}</p>
          <div className="itwmInfo">
            <span className="percent">{stock.percent}</span>&nbsp;
            {stock.isDown ? (<i className="fa-solid fa-chevron-down down"></i>):(<i className="fa-solid fa-chevron-up up"></i>)}
            &nbsp;
            <span className="price">{stock.price}</span>
          </div>
         </div>
         {show && <Watchlistaction uid={stock.name}/>}
    </li>
  )

}



export default Watchlistitem;