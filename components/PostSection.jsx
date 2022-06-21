import {React,useState} from "react";
import {HiDotsHorizontal} from "react-icons/hi";
import {FaRegHeart} from "react-icons/fa";
import {FaRegComment} from "react-icons/fa";
import {BiShare} from "react-icons/bi";
import {FiBookmark} from "react-icons/fi";
import { useSession,session } from "next-auth/react"
import {FiDelete} from "react-icons/fi";
import Router, { useRouter } from "next/router";
import { collection, deleteDoc ,doc } from "firebase/firestore";
import { db} from "../firebase";

const PostSection = (props) => {
  const router = useRouter();
  const { data: session } = useSession()
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const deletePost = (e) => {
        
    deleteDoc(doc(db,'posts', props.id));
    Router.push("/");
  }
  return (
    <div className="rounded-3xl shadow-2xl space-y-5 bg-white ">
      <div className="pt-5 flex">
        <img
        
         className=" ml-6 inline-block  cursor-pointer rounded-full h-9 w-9 "
          src={props.data.userImg}
          alt=""
        />
        <div className="ml-4 inline-block group space-y-1">
          <h5 className="font-bold text-[12px] cursor-pointer hover:underline ">
            {props.data.username}
          </h5>
          <h6 className="text-[10px] hover:underline font-semibold text-gray-500">
            @{props.data.tag[0]}
          </h6>
        </div>
        <HiDotsHorizontal className="h-6 ml-[26rem] w-6 cursor-pointer text-gray-700 hover:text-gray-900 hover:h-8" />
      </div>
      <div className="max-w-[620px] overflow-auto scrollbar-hide  max-h-[6rem]">
        <h6 className="mx-8 font-lg break-all tracking-wider">{props.data.text}</h6>
      </div>
      {
        
        props.data.image &&
      <div className="">
          < img onDoubleClick={()=>setLike(!like)} className="w-[92%] max-h-[600px] sm:w-[95%] cursor-pointer rounded-2xl object-cover  shadow-xl mr-3 ml-3" src={props.data.image} alt="" />
      </div>
      }
      <div className="flex items-center justify-evenly space-x-2 mt-3">
      <FaRegHeart onClick={()=>setLike(!like)} className={`h-7 transition-shadow ease-out hover:animate-bounce  w-7 ${like && `text-red-500` } cursor-pointer`} />
      {session.user.uid===props.data.id ? <FiDelete onClick={deletePost} className={`h-7  w-7 mt-[2px] transition-shadow ease-out hover:animate-bounce  text-red-500 cursor-pointer`}  /> : <BiShare className={`h-7  w-7 mt-[2px] transition-shadow ease-out hover:animate-bounce  text-red-500 cursor-pointer`} />}
      
      <FiBookmark onClick={()=>setBookmark(!bookmark)} className={`h-6 transition-shadow ease-out hover:animate-bounce w-6 cursor-pointer ${bookmark && `text-green-500`} `}/>
      </div>
      <div className="pt-5">

      </div>
    </div>
  );
};

export default PostSection;
