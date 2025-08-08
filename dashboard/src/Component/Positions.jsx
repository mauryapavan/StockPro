import React, { useEffect, useState } from "react";
//mport { positions } from "../data/data";
import axios from "axios";
const Positions = () => {
  let [positions,setpositions]=useState([]);
  useEffect(()=>{
    axios.get("https://stockpro-kre3.onrender.com/allpositions")
    .then((res)=>{
      
      setpositions(res.data)
    })
  },[])
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock, index) => {
                      const currvalue = stock.price * stock.qty;
                      const isProfit = currvalue - stock.avg * stock.qty >= 0;
                      const profClass = isProfit ? "profit" : "loss";
                      const dayClas = stock.isLoss ? "loss" : "profit";
          
                      return (
                        <tr key={index}>
                          <td>{stock.product}</td>
                          <td>{stock.name}</td>
                          <td>{stock.qty}</td>
                          <td>{stock.avg.toFixed(2)}</td>
                          <td>{stock.price.toFixed(2)}</td>
                          
                          <td className={profClass}>{(currvalue-stock.avg*stock.qty).toFixed(2)}</td>
                         
                          <td className={dayClas}>{stock.day}</td>
                        </tr>
                      )
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;
