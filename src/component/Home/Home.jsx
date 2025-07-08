import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Success from "../Success/Success";
import { useLoaderData } from "react-router";

const Home = () => {
  const allDoctors = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <Doctors allDoctors={allDoctors}></Doctors>
      <Success></Success>
    </>
  );
};

export default Home;
