import React from "react";

export default function Navbar() {
  return (
    <div>
      {/*  <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                Logo
              </a>
            </div>

            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">Tickets</a>
              </li>
              <li>
                <a href="#">Film List</a>
              </li>

              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav> */}
      <nav>
        <div className="nav-l"> 
          <a  href="#">
            Logo
          </a>
        </div>
        <ul className="nav-r">
          <li>  <a  href="#">  Tickets </a> </li>
          <li><a  href="#">  Film List </a></li>
          <li><a  href="#">  News </a></li>
          <li><a  href="#">  Contact </a></li>
        </ul>
      </nav>
    </div>
  );
}
