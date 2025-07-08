import React from "react";
import CountUp from "react-countup";
import icon1 from "/icon/01.svg";
import icon2 from "/icon/02.svg";
import icon3 from "/icon/03.svg";
import icon4 from "/icon/04.svg";

const Counter = () => {
  return (
    <>
      <div className="bg-white rounded-2xl px-12 py-10">
        <img src={icon1} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={199} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold  ">
          Total Doctors
        </p>
      </div>

      <div className="bg-white rounded-2xl px-12 py-10">
        <img src={icon2} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={467} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold  ">
          Total Reviews
        </p>
      </div>

      <div className="bg-white rounded-2xl px-12 py-10">
        <img src={icon3} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={1900} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold  ">Patients</p>
      </div>

      <div className="bg-white rounded-2xl px-12 py-10">
        <img src={icon4} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={300} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold  ">
          Total Stuffs
        </p>
      </div>
    </>
  );
};

export default Counter;
