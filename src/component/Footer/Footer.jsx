import React from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.svg";
import Facebook from "/icon/facebook.svg";
import Linkend from "/icon/linkend.svg";
import twitter from "/icon/twitter.svg";
import youtube from "/icon/youtube.svg";

const Footer = () => {
  return (
    <div className="text-center bg-white py-24 ">
      <img className="mx-auto" src={logo} alt="" />
      <div className="my-8">
        <ul className="flex font-medium gap-10 justify-center">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/"> My-Bookings </NavLink>
          </li>
          <li>
            <NavLink to="/"> Blogs </NavLink>
          </li>
          <li>
            <NavLink to="/"> Contact Us </NavLink>
          </li>
        </ul>
      </div>
      <hr className="border-[#0F0F0F]/20 max-w-[1060px] mx-auto" />
      <ul className="flex font-medium gap-8 justify-center mt-8">
        <li>
          <Link>
            <img src={Facebook} alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={twitter} alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={Linkend} alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={youtube} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
