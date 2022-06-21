import React from "react";
import { RiUserAddLine } from "react-icons/ri";
const UserSuggetion = (props) => {

  return (
        
    <>
      
      <div className="flex items-center justify-between">
        <img
          className="rounded-full object-cover ml-2 h-8 w-8 cursor-pointer hover:opacity-80"
          src={props.data.userImg}
          alt=""
        />
        <div className="flex flex-col mr-5">
          <h4 className=" pl-2 text-xs font-bold leading-4 tracking-wide ">
            {props.data.username}
          </h4>
          {/* <h5 className="text-[9px] font-[600] tracking-normal text-gray-500">
            {props.userStatus}
          </h5> */}
        </div>
        <i className="mr-2 cursor-pointer bg-gray-200 transition hover:bg-gray-300 hover:ease-out rounded-full p-2 ">
        <RiUserAddLine />
        </i>
      </div>
    </>
  );
};

export default UserSuggetion;
