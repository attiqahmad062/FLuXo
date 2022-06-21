import { React, useState, useRef, useEffect } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { session, useSession, signIn, signOut } from "next-auth/react";
import { ImCross } from "react-icons/im";
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
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import PostSection from "./PostSection";


const InputSection = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPostData(snapshot.docs);}
    )
  },[db])
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [input, setInput] = useState("");
  const imgRefrence = useRef(null);
  const [loading, setLoading] = useState(false);
  // ---------------------------------------POST IMAGE----------------------------
  const postAdd = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.firstName,
      text: input,
      timestamp: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
  };

  // ---------------------------------------POST IMAGE----------------------------

  // ---------------------------------------add IMAGE----------------------------
  const imageAdd = (e) => {
    const file = new FileReader();
    file.readAsDataURL(e.target.files[0]);
    file.onload = (e) => {
      setSelectedFile(e.target.result);
    };
  };
  
  return (
    <>
     <div className="min-w-[250px]  max-w-[1400px]">
      <div className={loading && `opacity-60`}>
        <div className="bg-white shadow-2xl h-30 mt-4 rounded-lg ">
          <div className="  h-20 rounded-lg flex items-center ">
            <img
              className=" cursor-pointer h-9 w-9 ml-3 object-cover rounded-full"
              src={session.user.image}
              alt="profile"
            />
            <div className="flex items-center justify-center ml-5 relative  text-center">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className=" outline-none text-sm tracking-wider placeholder:text-xs placeholder:tracking-wider min-h-5 min-w-[200px] overflow-y-scroll scrollbar-hide"
                placeholder="Play Something"
                name=""
                id=""
                rows="2"
              ></textarea>
            </div>
          </div>
          <div>
            {selectedFile && (
              <div className="flex relative items-center h-80 w-full ">
                <img
                  src={selectedFile}
                  className="h-80 mb-6 w-[90%] mx-auto rounded-2xl mt-3 object-cover"
                  alt=""
                />
                <div className="absolute  top-[1rem] left-[4rem] z-50">
                  <ImCross
                    onClick={() => setSelectedFile(null)}
                    className="cursor-pointer text-white   rounded-full p-2 h-9 w-9 hover:bg-red-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="relative">
              <input
                type="file"
                className=" "
                onChange={imageAdd}
                hidden
                ref={imgRefrence}
                name=""
                id=""
              />
              <HiOutlinePhotograph
                onClick={() => imgRefrence.current.click()}
                className="ml-10 mb-3 h-7 top-3 w-6 cursor-pointer  hover:text-gray-700"
              />
            </div>
            <div className="flex items-center">
              {!loading && (
                <div >
                
                <button 
                  onClick={postAdd}
                  disabled={!selectedFile && !input.trim()}
                  className="  mr-11 shadow-2xl glow-on-hover mb-4 " 
                >
                  Post
                </button>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  type="button"
                  class="py-1 px-5 mr-11 mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                >
                  <svg
                    role="status"
                    class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                  Loading...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
       
        <div className="space-y-4 mt-4">
          {postData.map((post) => (
          <PostSection key={post.id} id={post.id} data={post.data()}/>
            ))}
          </div>
          </div>
      </div>
    </>
  );
};

export default InputSection;
