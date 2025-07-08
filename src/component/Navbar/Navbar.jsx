import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center px-4 xl:px-[160px] py-5 gap-4 xl:gap-0">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex font-medium gap-10">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/appointments"> My-Bookings </NavLink>
          </li>
          <li>
            <NavLink to="/"> Blogs </NavLink>
          </li>
          <li>
            <NavLink to="/"> Contact Us </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn-one">Emergency</button>
      </div>
    </div>
  );
};

export default Navbar;
