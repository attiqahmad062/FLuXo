import {React,useState} from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
    <div className={`min-w-[250px] max-w-[1400px]`}>
      <div className="bg-white z-50 sticky w-full border rounded-t-md border-gray-300 text-center  flex items-center justify-evenly">
        <div className="mt-2 mb-2">
          <h1 className="ml-10 font-[inter] font-bold text-2xl pb-2 border-solid">
           FLuXo
          </h1>
        </div>
        <div className="hidden relative sm:inline ">
          <input
            className="	font-inter outline-0 placeholder:text-black-200 placeholder:text-[12px] placeholder:font-inter mt-2 mr-16 border border-inherit outline-inherit rounded-2xl pl-10 pr-32 bg-slate-100 "
            type="text"
            name=""
            id=""
            placeholder="Search for any profile"
          />
            <div className="absolute mb-2 top-[0.80rem] right-[26.5rem]">
            <BiSearch />
            </div>
        </div>
        
        <div  className="flex items-center mr-4 space-x-4">
          <i className=" border bg-slate-300	border-color: inherit rounded-full p-1 cursor-pointer hover:bg-slate-400">
            <AiOutlinePlus  />
          </i>
          <i className=" border bg-slate-300	border-color: inherit rounded-full p-1 cursor-pointer hover:bg-slate-400">
            <TbMessageCircle2 />
          </i>
          <img  src={session.user.image} alt=""  onClick={() => signOut()} className=" border bg-slate-300	border-color: inherit rounded-full p-1 w-9 h-9 cursor-pointer hover:bg-slate-400"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
