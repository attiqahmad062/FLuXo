import React from "react";
import GridDesign from "./GridDesign";

const Explore = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-3 mb-2 mt-2">
        <h1 className="font-bold text-xs p-1">Explore</h1>
        <a
          className="text-gray-400 transition ease-in-out text-xs font-normal hover:text-black"
          href="https://www.amazon.com/s?k=gaming+accessories&crid=1NH914T4GT0TX&sprefix=gaming+acces%2Caps%2C268&ref=nb_sb_ss_i_2_12"
        >
          See all
        </a>
      </div>
      <GridDesign />
    </>
  );
};

export default Explore;
