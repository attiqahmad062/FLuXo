
import React from "react";
import Activity from "./Activity";
import Explore from "./Explore";
import MainSection from "./MainSection";
import MessagesSection from "./MessagesSection";
import SuggestedSection from "./SuggestedSection";
const Hero = () => {
  return (
    <>
      <div className="mt-2 gap-4 flex ">
        <div className="hidden xl:inline bg-gray-200 sm:ml-24 sm:basis-[18%] sm:border sm:rounded-lg">
          <div className="bg-white shadow-2xl basis-1/4 h-[18rem]  border rounded-lg">
            <Activity />
          </div>
          <div className="bg-white shadow-2xl basis-1/4 h-[15rem] mt-3  border rounded-lg">
            <Explore className="font-inter" />
          </div>
        </div>
        <div className="bg-[#e0e4e4] shadow-2xl w-[350px] sm:min-w-[300px]  grow border rounded-lg">
          <MainSection/>
        </div >
        <div className=" hidden xl:inline">
        <div className=" sm:bg-gray-200 sm:mr-28 sm:basis-[18%] sm:border sm:rounded-lg">
          <div className="bg-white shadow-2xl basis-1/4 h-[22rem]  border rounded-lg">
            <MessagesSection/>
          </div>
          <div className="bg-white shadow-2xl basis-1/4 h-[15rem] mt-3  border rounded-lg">
            <SuggestedSection className="font-inter" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
