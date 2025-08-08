import { useContext, useState } from "react";
import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import UserContext from "../Context/usercontext";


const Menu = () => {
 let navigate=useNavigate()
  let { user } = useContext(UserContext);

  const [selectedmenu, setselectedmenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);



   const handlemenuclick = (index,url) => {

    setselectedmenu(index);
    navigate(url)

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

            <p className={selectedmenu === 0 ? activeMenuClass : menuClass} onClick={() => handlemenuclick(0, "/")}>Dashboard</p>

          </li>
          <li>
            <p className={selectedmenu === 1 ? activeMenuClass : menuClass} onClick={() => handlemenuclick(1, "/orders")}>Orders</p>


          </li>
          <li>

            <p className={selectedmenu === 2 ? activeMenuClass : menuClass} onClick={() => handlemenuclick(2, "/holdings")}>Holdings</p>


          </li>
          <li>

            <p className={selectedmenu === 3 ? activeMenuClass : menuClass} onClick={() => handlemenuclick(3, "/positions")}>Positions</p>


          </li>
          <li>

            <p className={selectedmenu === 4 ? activeMenuClass : menuClass} onClick={() => handlemenuclick(4, "/funds")}>Funds</p>


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
