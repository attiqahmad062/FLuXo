import React, { useState } from 'react'
import { useSession, signIn, signOut, getProviders } from "next-auth/react"
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Dashboard from '../pages/Dashboard';
import Router from 'next/router';
const Loginbtn = () => {
  // const router = useRouter();
  const admin_id="attiqahmad77";
const admin_password="pakistan062";
  const [dark, setDark] = useState(false);
  const { data: session } = useSession();
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  if (session) {

    return (
      <>
      <Navbar /> 
       <Hero  />
      </>
    )
  }
  const checkLogin =()=>{
  if(admin_id===Id && Password===admin_password){
      Router.push("/Dashboard"); 
  }
  else{
  alert("id and password are incorect");
  setId('');
  setPassword('');
}
  }
  return (
    <>
        <div className='flex  w-full h-[100vh]  bg-white'>
          <div className='flex items-center w-[400px]  flex-col'>
            <h1 className='text-6xl sm:text-5xl font-bold mt-[12rem] sm:ml-20'>Welcome</h1>
            <h5 className='text-xl sm:text-xs mt-2 font-semibold  sm:ml-20'>to the world of Gaming</h5>
            <input value={Id} onChange={(e)=>setId(e.target.value)} className='text-xs  mt-5 w-[15rem] sm:w-[10rem] sm:ml-20 border-2 border-gray-100 placeholder:tracking-wide tracking-wider placeholder:text-[12px] sm:placeholder:text-[10px] placeholder:font-semibold p-2 outline-gray-400 rounded-sm ' type="email" placeholder='Please enter your email'/>
            <input value={Password} onChange={(e)=>setPassword(e.target.value)} className='text-xs mt-5 w-[15rem] sm:w-[10rem] sm:ml-20 border-2 border-gray-100 placeholder:tracking-wide tracking-wider placeholder:text-[12px] sm:placeholder:text-[10px] placeholder:font-semibold p-2 outline-gray-400 rounded-sm ' type="password" placeholder='Please enter your password'/>
            <button onClick={checkLogin} className='sm:ml-20 mt-5  text-white text-sm  pl-[5rem] pr-[9rem] py-3 sm:px-[3rem] sm:py-2 tracking-wide  rounded-md bg-[#252725] w-[12rem]'>Continue</button>
            <h1 className='sm:ml-20  mt-5 text-xs'>-------- <em className='text-xs tracking-wide font-semibold'>OR</em>---------</h1>
            <button type="button" onClick={() => signIn(getProviders.id,{callbackUrl:"/"})} className="text-white bg-[#4285F4] h-[3rem] w-[14rem] sm:w-12[rem] sm:first-line sm:ml-20 mt-5 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-8 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2">
  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
  Sign in with Google
</button>
        
          </div >
          <div className='h-[26rem] mt-2 hidden sm:inline flex-grow '>
            <img className='w-[70%] h-[155%] sm:ml-[10rem] rounded-l-[4rem] object-cover ' src='https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          </div>
      </div>
    </>
  )
  
}

export default Loginbtn;