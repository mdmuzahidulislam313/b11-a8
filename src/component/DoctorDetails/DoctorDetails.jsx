import { useLoaderData, useParams } from "react-router";
import Appointment from "./Appointment";
import rIcon from "/R.svg";

const DoctorDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleDoc = data?.find((item) => item.id === parseInt(id));
  const {
    doctor_image,
    doctor_name,
    registration_number,
    education,
    workplace,
    fee,
    availability,
    speciality
  } = singleDoc;

  return (
    <>
      <div className="text-center bg-white rounded-3xl mb-8 py-20 xl:px-40 mx-4 xl:mx-40">
        <p className="font-extrabold text-3xl mb-4">Doctor's Profile Details</p>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      <div className=" bg-white rounded-3xl mb-8 py-20  mx-4 xl:mx-40 p-14">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <img className="rounded-2xl" src={doctor_image} alt="" />
          </div>
          <div className="col-span-9">
            <p className="text-3xl font-extrabold mb-3">{doctor_name}</p>
            <p className="text-lg font-medium text-[#0F0F0F]/60">
              {education[0]}
            </p>
            {education[1] && (
              <p className="text-lg font-medium text-[#0F0F0F]/60">
                {education[1]}
              </p>
            )}
            <p className="text-xl font-medium text-[#0F0F0F]/60 pt-3">
              Working at
            </p>

            <p className="text-xl font-bold mb-5">
              {workplace}
            </p>
            <div className="border-dashed w-full border-t border-[#0F0F0F]/20"></div>
            <div className="flex gap-3 py-3">
              <img src={rIcon} alt="" />
              <p>Reg No: {registration_number} </p>
            </div>
            <div className="border-dashed w-full border-t border-[#0F0F0F]/20"></div>
            <div className="flex items-center mt-5">
              <p className="font-bold mr-4">Availability</p>
              {availability.map((day, index) => (
                <span
                  key={index}
                  className="text-[#FFA000] bg-[#FFA000]/10 border border-[#FFA000]/20 rounded-full px-4 py-2 text-sm mr-2"
                >
                  {day}
                </span>
              ))}
            </div>
            <div className="flex items-center mt-5">
              <p className="font-bold mr-4">Consultation Fee:</p>
              <p>
                <span className="font-extrabold text-[#176AE5]">
                  Taka : {fee}
                </span>
                <span className="px-2"> (incl. Vat)</span>
                <span className="font-medium text-[#176AE5]">
                  Per consultation
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Appointment id={id}></Appointment>
    </>
  );
};

export default DoctorDetails;
