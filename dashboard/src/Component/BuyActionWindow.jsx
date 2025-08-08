import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Buywindow from "../Context/Buywindow";
import axios from "axios";
import UserContext from "../Context/usercontext";
import Cookies from 'js-cookie';


import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
 
  const {buywindowfunction}=useContext(Buywindow);
    
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
     let {token}=Cookies.get();

  const handleBuyClick = async() => {
    
    await axios.post("http://localhost:3333/neworder",[{ name:uid, qty:stockQuantity,price:stockPrice,mode:"yes"},token])

    buywindowfunction(uid);
  };

  const handleCancelClick = () => {
    buywindowfunction(uid);
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;