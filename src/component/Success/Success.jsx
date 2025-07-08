import React from "react";
import Counter from "./Counter";

const Success = () => {
  return (
    <div className="mx-4 xl:mx-40">
      <div className="text-center">
        <p className="text-[40px] font-bold">
          We Provide Best Medical Services
        </p>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 my-8 pb-10">
        <Counter></Counter>
      </div>
    </div>
  );
};

export default Success;
