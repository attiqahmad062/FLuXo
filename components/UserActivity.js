import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";

const UserActivity = (props) => {
  return (
    <>
    <div className="flex items-center ">
      <img
        className="rounded-full object-cover ml-2 h-8 w-8 cursor-pointer hover:opacity-80"
        src={props.data.userImg}
        alt=""
      />
      <div className="flex flex-col ml-5">
        <h4 className="text-xs pl-3 font-bold leading-4 tracking-wide ">
            {props.data.username? props.data.username : "User Name"}
        </h4>
        <h5 className="text-[9px] ml-2 font-[600] tracking-normal text-gray-500">
          Posted Something
        </h5>
      </div>
    </div>
  </>
  );
};

export default UserActivity;
