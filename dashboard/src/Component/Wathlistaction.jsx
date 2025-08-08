import React from "react";
import Buywindow from "../Context/Buywindow";
import { useContext } from "react";
//import GeneralContext from "./GeneralContext";

const Watchlistaction = ({ uid }) => {
     
  const {buywindowfunction}=useContext(Buywindow);

      const handleBuyClick = () => {
        buywindowfunction(uid);
      };
    return (
        <span className="actions">
            <span>
           
                <button className="buy"    onClick={handleBuyClick}>Buy</button>
                <button className="sell">Sell</button>
                <button className="chart"><i class="fa-solid fa-chart-simple"></i></button>
                <button className="btn"><i class="fa-solid fa-bars"></i></button>
            </span>
        </span>
    )

}
export default Watchlistaction;
