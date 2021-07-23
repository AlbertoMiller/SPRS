import React, { useEffect } from "react";
import "../../css/main.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <li className="nav-item active">
        <NavLink className="navbar-brand navbar-logos nav-link" to="/" exact>
          <p
            className={"navbar-logos"}
            style={{ color: "#fff", margin: "10px" }}
          >
            Logo
          </p>
        </NavLink>
      </li>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="far fa-address-book"></i>Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/about" exact>
              <i className="far fa-address-book"></i>About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="far fa-copy"></i>Contact Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/service" exact>
              <i class="fas fa-cart-plus"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
