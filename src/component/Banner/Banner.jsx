import React from "react";
import bannerImg1 from "/banner1.jpg";
import bannerImg2 from "/banner2.png";

const Banner = () => {
  return (
    <div className="mx-4 xl:mx-12 bg-linear-to-bl from-white/0 to-white  border-white border-2 rounded-3xl px-6 2xl:px-40 py-16 text-center">
      <h1 className="text-3xl xl:text-5xl mb-4 font-extrabold">
        Dependable Care, Backed by Trusted Professionals.
      </h1>
      <p>
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="flex flex-col xl:flex-row gap-5 mt-6">
        <input
          className="border-gray-300 border rounded-full p-4 w-full"
          type="text"
          placeholder="Search any doctor..."
        />
        <button className="btn-one text-lg wrap-break-word min-w-48 justify-center">
          Search Now
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-6 gap-6">
        <div>
          <img className="rounded-2xl w-full" src={bannerImg1} alt="" />
        </div>
        <div>
          <img
            className="rounded-2xl max-h-[442px] w-full object-cover"
            src={bannerImg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
