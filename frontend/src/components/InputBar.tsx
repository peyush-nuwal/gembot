import React from 'react'

import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";


type prop={
    input:string,
    setInput:any,
    handleSendMessage:any

}
const InputBar = ({input,setInput,handleSendMessage}:prop) => {
   

  const handleOnChange=(e:any)=>{
       setInput(e.target.value)
  }


  return (
    <div  className='w-3/5 bg-white h-10 rounded-lg justifyEvenly'>
       <IoIosAttach className='text-primary text-lg'/>
      <input type='text' onChange={handleOnChange} placeholder="Send a new message" value={input} className='w-4/5 h-full outline-none' id="prompt"/>
      <button onClick={()=>handleSendMessage()} className='bg-primary text-white px-3 py-2 rounded-lg text-lg'>
      <IoSend/>
      </button>
      
    </div>
  )
}

export default InputBar