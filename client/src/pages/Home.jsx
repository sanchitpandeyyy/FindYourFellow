import React from "react";
import hero from "../assets/images/herobanner.png";
import { IoFootball } from "react-icons/io5";
import { TbTrekking } from "react-icons/tb";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";
import CardList from "../components/Cards/CardList";

const Home = () => {
  return (
    <>
      <div className="relative bg-black">
        <img src={hero} alt="" className="h-[80vh] object-cover m-0 w-screen opacity-70" />
      </div>

      <div className="grid grid-cols-4 sm:flex justify-center w-full absolute top-[35rem]">
        <div
          className="flex flex-col justify-center bg-white p-6  sm:p-10 shadow-blue-300 shadow-lg border-2 items-center transition duration-150 ease-in  transform  hover:-translate-y-1 hover:scale-110 hover:bg-sky-100 hover:rounded-md hover:cursor-pointer hover:z-20
 "
        >
          <IoFootball className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2 " />
          <span className="font-semibold text-[#352f36] sm:text-lg text-xs ">Games</span>
        </div>

        <div className="flex flex-col justify-center bg-white p-6  sm:p-10 shadow-blue-300 shadow-lg border-2 items-center transition duration-150 ease-in  transform          hover:-translate-y-1 hover:scale-110 hover:bg-sky-100 hover:rounded-md hover:cursor-pointer hover:z-20">
          <TbTrekking className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2" />
          <span className="font-semibold  text-[#352f36] sm:text-lg text-xs">Trekking</span>
        </div>

        <div className="flex flex-col justify-center bg-white p-6 h-fit sm:p-10 shadow-blue-300 shadow-lg border-2 items-center transition duration-150 ease-in  transform          hover:-translate-y-1 hover:scale-110 hover:bg-sky-100 hover:rounded-md hover:cursor-pointer hover:z-20">
          <GiFullMotorcycleHelmet className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2" />
          <span className="font-semibold  text-[#352f36] sm:text-lg text-xs text-center">Bike Ride</span>
        </div>

        <div className="flex flex-col justify-center bg-white p-6  sm:p-10 shadow-blue-300 shadow-lg border-2 items-center transition duration-150 ease-in  transform          hover:-translate-y-1 hover:scale-110 hover:bg-sky-100 hover:rounded-md hover:cursor-pointer hover:z-20">
          <MdVolunteerActivism className="sm:scale-150 text-[#6522ad] w-6 h-6 mb-2" />
          <span className="font-semibold  text-[#352f36] sm:text-lg text-xs">Volunteer</span>
        </div>
      </div>
      <div className="mt-40 px-11  lg:px-36 text-center">
      Find Your Fellow is a user-friendly social networking app that connects you with people nearby who share your interests. It helps you find and connect with like-minded individuals, discover local events, and expand your social circle effortlessly.
        <div>
          
        </div>
        <CardList className="mt-20" />
      </div>
    </>
  );
};

export default Home;
