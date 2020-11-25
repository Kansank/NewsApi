import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
    
      <nav>
        <div className="nav-l"> 
          <a  href="/">
            Logo
          </a>
        </div>
        <ul className="nav-r">
          <li>  <a  href="/">  Tickets </a> </li>
          <li><a  href="/">  Film List </a></li>
          <li><a  href="/">  News </a></li>
          <li><a  href="/">  Contact </a></li>
        </ul>
      </nav>
    </div>
  );
}
