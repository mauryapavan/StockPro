import React, { useEffect, useState } from "react";
//import { holdings } from "../data/data"
import axios from "axios";
import { Verticalchart } from "./Verticalchart";

const Holdings = () => {
  let [holdings,setholdings]=useState([]);
  useEffect(()=>{
    axios.get("https://stockpro-kre3.onrender.com/allholdings")
    .then((res)=>{
      
      setholdings(res.data)
    })
  },[])
  const labels=holdings.map((subArray)=>subArray["name"]);
  const data={
    labels,
    datasets:[
      {
        label:"Stock name",
        data: holdings.map((stock) =>stock.price ),
        backgroundColor: 'rgba(86, 104, 187, 0.8)',
      }
    ]
  }
 
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdings.map((stock, index) => {
            const currvalue = stock.price * stock.qty;
            const isProfit = currvalue - stock.avg * stock.qty >= 0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClas = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currvalue.toFixed(2)}</td>
                <td className={profClass}>{(currvalue-stock.avg*stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClas}>{stock.day}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <Verticalchart data={data}/>
    </>
  );
};

export default Holdings;
