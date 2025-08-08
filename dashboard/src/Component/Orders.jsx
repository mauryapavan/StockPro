import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/usercontext";
import axios from "axios";
import Cookies from 'js-cookie';


const Orders = () => {
  const { cookies } = useContext(UserContext);
  let [order, setorder] = useState([]);
     let {token}=Cookies.get();
  
  useEffect(() => {

    axios.post("https://stockpro-kre3.onrender.com", {token})
      .then((res) => {
        setorder(res.data)
      })


  }, [])
  return (
    <div className="orders">
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>

          </tr>
          {order.map((stock, index) => {


            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>

                <td>{stock.price}</td>

              </tr>
            )
          })}
        </table>
      </div>
      <div className="no-orders">

        {order.length == 0 && <p>You haven't placed any orders today</p>}

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
