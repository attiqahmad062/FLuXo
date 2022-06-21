import {React,useState,useEffect} from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import UserActivity from "./UserActivity";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
const Activity = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPostData(snapshot.docs);}
    )
  },[db])
  return (
    <>
      {" "}
      <div className="flex justify-between">
        <h1 className="font-popins  pl-2 mt-3 font-bold text-lg">Activity</h1>
        <a
          href="#"
          className="text-gray-400 mr-2  mt-4 transition cursor-pointer ease-in-out text-xs font-normal hover:text-black"
        >
          See all
        </a>
      </div>
      <h1 className="ml-2 font-popins font-bold">New</h1>
      <div className="flex flex-col item-center mt-3 space-y-3  justify-between overflow-y-auto  scrollbar-hide h-48 ">
        {postData.map((post) => (
          <UserActivity key={post.id} id={post.id} data={post.data()} />
        ))}
      </div>
    </>
  );
};

export default Activity;
