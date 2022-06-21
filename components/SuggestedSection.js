import {React,useEffect,useState} from "react";
import { RiUserAddLine } from "react-icons/ri";
import UserSuggetion from "./UserSuggetion";
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
const SuggestedSection = () => {
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
    <div className="">
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-xs font-bold ml-2 leading-none">
          Suggested For You
        </h1>
        <h5 className="text-gray-400 mr-2 transition cursor-pointer ease-in-out text-xs font-normal hover:text-black">
          See all
        </h5>
      </div>
      <div className="flex flex-col item-center mt-3 space-y-3 overflow-y-auto h-48 ">
      {postData.map((post) => (
          <UserSuggetion key={post.id} id={post.id} data={post.data()}/>
            ))}
      
        </div>
      </div>
    </>
  );
};

export default SuggestedSection;
