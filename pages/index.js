import React from 'react'


import Head from 'next/head';
import Loginbtn from '../components/loginbtn';
const index = () => {
  return (
    <>
    <Head>
      
      <title>FLuXo</title>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
       {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;1,200&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,200;0,400;0,500;0,600;1,200&display=swap" rel="stylesheet"></link>
</Head>
    <div className=' bg-[#e0e4e4]  tracking-wider font-[inter]'>
    <Loginbtn/>
    </div>
   
    </> 
  )
}

export default index;