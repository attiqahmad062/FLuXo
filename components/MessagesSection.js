import React from 'react'
import {BiMessageAltEdit} from 'react-icons/bi'
import {BiSearch} from 'react-icons/bi'
import PrimarySection from './PrimarySection'
import GeneralSection from './GeneralSection'
import { useState } from 'react'

const MessagesSection = () => {
  const [Active, setActive] = useState(false)
  return (
    <>
    <div>
        <div className="flex mt-4 items-center justify-around">
         <h1 className='text-[#28282B] mr-3 text-sm font-bold'>Messages</h1>
         <BiMessageAltEdit className='ml-3 h-8 cursor-pointer hover:opacity-75'/>
        </div>
        <div className='flex items-center justify-center relative text-center'>
            <input className='placeholder:text-[9px] pl-7 text-[10px] font-Inter placeholder:m-2 placeholder:text-gray-600  rounded-xl outline-none border-gray-300 bg-gray-200 h-5 w-32' type="text" placeholder='Search for message' />
            <BiSearch className='absolute h-4 top-[2px] left-7' />
        </div>
        <div>
            <div className={`flex mt-4 items-center ml-3 justify-evenly pb-2 border-b-2 border-gray-400 ${Active && "border-b-black border-b-2"} w-36 `}>
              <br />
                <h1 className={`text-xs text-gray-400 font-semibold Active `} onClick={()=>setActive(!Active)}>Primary</h1>
                <h1 className='text-xs text-gray-400 font-semibold' >General</h1>
            </div>
            {Active? <PrimarySection/>:  <GeneralSection /> }
           
           
        </div>
    </div>
    </>
  )
}

export default MessagesSection