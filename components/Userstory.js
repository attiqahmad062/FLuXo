import React from 'react'

const Userstory = ({profilePic,imgUrl,userName}) => {
  return (
    <>
    <div className='flex flex-col items-center p-3  justify-center'>
      <img className="rounded-full border-2 ml-6 mr-[18px] cursor-pointer hover:opacity-80 object-cover border-red-400 w-[3rem] h-[3rem]" src={imgUrl} alt="" /> 
      <h4 className='font-inter text-[8px] mt-2 font-bold text-center text-gray-500'>{userName}</h4>
        </div>
        
      
        </>
  )
}

export default Userstory;