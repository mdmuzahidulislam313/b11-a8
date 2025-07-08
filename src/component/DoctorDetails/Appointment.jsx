import React from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToStoreLs } from "../../utility/addToLs";

const Appointment = ({ id }) => {
  const navigate = useNavigate();
  const handleAppointment = (id) => {
    const success = addToStoreLs(id);
    if (success) {
      toast.success("🎉 Appointment booked successfully! Redirecting to your appointments...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate("/appointments");
      }, 1500);
    }
  };
  return (
    <>
      <ToastContainer />

      <div className=" bg-white rounded-3xl mb-8 py-20  mx-4 xl:mx-40 p-14">
        <p className="text-center text-2xl font-extrabold mb-4">
          Book an Appointment
        </p>

        <div className="border-dashed w-full border-t border-[#0F0F0F]/20"></div>
        <div className="flex justify-between items-center py-4">
          <p className="text-lg font-bold"> Availability </p>
          <span className="text-[#09982F] bg-[#09982F]/10 border border-[#09982F]/20 text-sm px-4 py-2 rounded-full font-medium">
            Doctor Available Today
          </span>
        </div>
        <div className="border-dashed w-full border-t border-[#0F0F0F]/20 mb-5"></div>

        <p className="text-[#FFA000] bg-[#FFA000]/10 px-4 py-2 rounded-full mb-10">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>

        <button
          onClick={() => handleAppointment(id)}
          className="btn-one w-full justify-center"
        >
          Book Appointment Now
        </button>
      </div>
    </>
  );
};

export default Appointment;
