import { useContext, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/usercontext";


const Menu = () => {

  let { user } = useContext(UserContext);

  const [selectedmenu, setselectedmenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);



  const handlemenuclick = (index) => {

    setselectedmenu(index);

  };
  const handleProfileClick = (index) => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* <img src="logo.png" style={{ width: "30px" }} /> */}
      <p style={{ color: "blue", width: "30px" }} className="logo" ><i className="fa-solid fa-money-bill-trend-up" style={{ width: "" }}></i><span>Stockpro</span> </p>


      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handlemenuclick(0)}>
              <p className={selectedmenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li><Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handlemenuclick(1)}>
            <p className={selectedmenu === 1 ? activeMenuClass : menuClass}>Orders</p>
          </Link>

          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handlemenuclick(2)}>
              <p className={selectedmenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>

          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handlemenuclick(3)}>
              <p className={selectedmenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>

          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handlemenuclick(4)}>
              <p className={selectedmenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>

          </li>

        </ul>
        <hr />

        <div className="profile" onClick={handleProfileClick} >
          <div className="avatar">ZU</div>
          <p className="username">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
