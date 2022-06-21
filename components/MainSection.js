import React from 'react';
import Userstory from './Userstory';
import { AiOutlinePlus } from 'react-icons/ai';
import InputSection from './InputSection';
import { useSession,session } from "next-auth/react"
const MainSection = () => {
  const { data: session } = useSession()
  return (
    <>
   <div className='h-[155vh] bg-[#e0e4e4] sm:h-[120vh]  min-w-[320px] overflow-y-auto scrollbar-hide  '>
    <div className='bg-[#e0e4e4] ml-3 mr-3 mt-1 min-h-[300px]'>
      {/* story Section */}
{/*       
     <div className='bg-white h-[6rem] max-w-[660px] overflow-x-auto  pb-3  scrollbar-hide flex items-center rounded-xl'>
      <div className='relative flex flex-col items-center '>
      <img className="rounded-full border-2 mt-4 ml-10 mr-3  border-gray-400 h-[3rem]" src={session.user.image} alt="" /> 
      <AiOutlinePlus className='absolute top-[3rem] cursor-pointer  text-white bg-blue-400 rounded-full ' />
      <h4 className='font-inter text-[8px] font-bold text-center pl-3 mr-5 mt-1 ml-[16px] text-gray-500'>Your Story</h4>
      </div>
      
      <Userstory userName={session.user.name.split(" ")} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Camela"} imgUrl={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1651791072410-9a5f5684220c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
      <Userstory userName={"Hannah"} imgUrl={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>
   

   
       </div> */}
     {/* ---------------------------Input section ---------------------------- */}
     <InputSection/>
      {/* ---------------------------Input section ---------------------------- */}
  
     </div>
     </div>
         </>
  )
}
export default MainSection;
  