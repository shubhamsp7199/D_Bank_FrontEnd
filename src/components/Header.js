import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {
  let [loginStatus, setLoginStatus] = useState(false);
  let [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    setLoginStatus(sessionStorage.getItem("isUserLoggedIn"));
    setLoggedInUser(sessionStorage.getItem("loggedInUser"));
  }, []);

  if (loggedInUser === "ADMIN") {
    return (
      /**----------------------------------------new header-------------------------------- */
      <header id="header" class="header fixed-top header sticky-top">
        <div
          class="container-fluid container-xl d-flex align-items-center
          justify-content-between"
        >
          <a href="/" class="logo d-flex align-items-center">
            <img src="https://img.icons8.com/cotton/64/000000/electricity.png" />
            <span>D-Bank</span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="/home">
                  Home
                </a>
              </li>                                         
              <li class="dropdown">
                <a href="#">
                  <span>Services</span>{" "}
                  <i
                    class="bi
                    bi-chevron-down"
                  ></i>
                </a>
                <ul>
                  <li class="dropdown">
                    <a href="#">
                      <span>Customer</span>
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/customerprofile">Add Customer Profile</a>
                      </li>
                      <li>
                        <a href="/customerData">Check Customer Profiles</a>
                      </li>
                    </ul>
                  </li>                                                                      
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  } else if (loggedInUser === "CUSTOMER") {
    return (
      <header id="header" class="header fixed-top header sticky-top">
        <div
          class="container-fluid container-xl d-flex align-items-center
        justify-content-between"
        >
          <a href="/" class="logo d-flex align-items-center">
            <img src="https://img.icons8.com/cotton/64/000000/electricity.png" />
            <span>E-Pay</span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="/home">
                  Home
                </a>
              </li>                            
              <li class="dropdown">
                <a href="blog.html">
                  <span>Services</span>{" "}
                  <i
                    class="bi
                  bi-chevron-down"
                  ></i>
                </a>
                <ul>
                  <li class="dropdown">
                    <a href="#">
                      <span>Customer</span>
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/customerprofile">Add Customer Profile</a>
                      </li>                      
                    </ul>
                  </li>                                                                        
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header id="header" class="header fixed-top header sticky-top">
        <div
          class="container-fluid container-xl d-flex align-items-center
        justify-content-between"
        >
          <a href="/" class="logo d-flex align-items-center">
            <img src="https://img.icons8.com/cotton/64/000000/electricity.png" />
            <span>D-Bank</span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="/home">
                  Home
                </a>
              </li>              
              <li>
                <a class="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/register">
                  Register
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/login">
                  Login
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  }
};

export default Header;
