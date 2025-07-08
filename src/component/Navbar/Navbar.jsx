import React from "react";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="hidden xl:flex justify-between items-center px-[160px] py-5 ">
      <div>
        <img src={logo} alt="" />
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
