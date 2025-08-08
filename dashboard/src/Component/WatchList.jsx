import React, { useState } from "react";

import { watchlist } from "../data/data";
import Watchlistitem from "./watchlistitem";
import { DoughnutChart } from "./Doughnut";


const WatchList = () => {
  const data={
    labels: watchlist.map((subArray)=>subArray["name"]),
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock) =>stock.price ),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(147, 56, 177, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(45, 187, 190, 0.2)',
        'rgba(225, 240, 12, 0.2)',
        'rgb(209, 47, 136)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgb(115, 28, 132)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      
      <ul className="list">
        {
          watchlist.map((list,index)=>{
            return <Watchlistitem stock={list} key={index}/>
          })
        }
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
};



export default WatchList;
