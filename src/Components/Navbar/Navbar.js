import React, { useState } from "react";
import { Logo } from "./NavBar.jsx";
import { Link } from "react-router-dom";
import SlideBar from "../Slidebar/SlideBar";
import { useItemsState } from "../../Providers/Providers";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const itemsState=useItemsState()
  const basketCount=itemsState.filter(i=>i.count>0).length
  return (
    <>
      <div className="navbar logoNavbar">
        <Link to="/" className="MenuLinks">
          <Logo className="noSelect">Logo</Logo>
        </Link>
        <Link to="#" className="menuLinks">
          {basketCount}
          <i
            className={"fas fa-cart-plus navMenuShopIcon"}
            onClick={showSidebar}
          />
        </Link>
      </div>

      <nav className={sidebar ? "navMenu active" : " navMenu"}>
        <ul className="navMenuItems">
          <li className="navbarToggle">
            <Link to="#" className="menubars">
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={showSidebar}
              ></i>
              
            </Link>
          </li>
          <SlideBar />
        </ul>
      </nav>
      <div
        className={sidebar ? " outOfMenu active" : " outOfMenu"}
        onClick={showSidebar}
      />  
    </>
  );
};
export default Navbar;
