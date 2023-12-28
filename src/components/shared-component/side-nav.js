import React, { useState } from "react";
// import Link from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();
  const logout = () => {
    console.log('logout');
    localStorage.clear();
    navigate("/");
  };

  const [menu, setMenu] = useState("Dashboard");

  return (
    <div>
      <div class="menu-wrap">
        <span class="material-symbols-outlined nav-close">close</span>
        <a className="logo">
          <img class="short-logo" src="images/login/logo.svg" />
          <img class="actual-logo" src="images/logo-large.svg" />
        </a>

        <nav>
          <a
            onClick={() => {
              setMenu("dashboard");
            }}
          >
            <img src="images/dashboard.svg" />
            <span>
              <Link to="/dashboard">Dashboard</Link>
            </span>
          </a>
          <a
            onClick={() => {
              setMenu("message");
            }}
          >
            <img src="images/messeges.svg" />
            <span>
              <Link to="/message">Messages</Link>
            </span>
          </a>
          <a
            onClick={() => {
              setMenu("message");
            }}
          >
            <img src="images/messeges.svg" />
            <span>
              <Link to="/result">Result</Link>
            </span>
          </a>
          <a
            onClick={() => {
              setMenu("message");
            }}
          >
            <img src="images/messeges.svg" />
            <span>
              <Link to="/barcode">Barcode</Link>
            </span>
          </a>
          <a
            onClick={() => {
              setMenu("message");
            }}
          >
            <img src="images/messeges.svg" />
            <span>
              <Link to="/message">Messages</Link>
            </span>
          </a>
          <a
            onClick={() => {
              setMenu("timetable");
            }}
          >
            <img src="images/timetable.svg" />

            <span>
              <Link to="/timetable">Timetable</Link>
            </span>
          </a>
          <a
            onClick={() => {
              setMenu("payment");
            }}
          >
            <img src="images/payment.svg" />
            <span>
              <Link to="payment">Payment</Link>
            </span>
          </a>
        </nav>
        <div class="log-out">
          <a
            onClick={logout}
          >
            <img src="images/logout.svg" />
            <span>Logout</span>
          </a>
        </div>
      </div>
      <div class="overlay"></div>
      <div class="main-wrapper">
        <header class="container-fluid">
          <a class="mob-logo">
            <img src="assets/img/logo.svg" />
          </a>
          <h1 class="heading-1-medium page-title">Page title</h1>
          <div class="info-box">
            <a class="notification active">
              <span>5</span>
            </a>
            <a class="Profile-head">
              <span>
                <img src="images/Asia Woman 1.png" alt="user" />
                M.Ajnas kp
              </span>
            </a>
            <div class="head-more"></div>
            <a class="mob-block menu-btn">
              <img src="images/menu.svg" />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
export default SideNav;
