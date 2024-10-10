import React, { useEffect, useState } from 'react'
import InputBar from './InputBar'
import { useDispatch, useSelector } from 'react-redux'
import {Rootstate,AppDispatch} from '../Store.tsx'
import { addUserMessage, sendMessage , } from '../Store/ChatSlice'

const Chat = () => {
    const [showChats, setShowChats] = useState(false)
    const [input, setInput] = useState('')
   

    const chats=useSelector((state:Rootstate)=>state.chat.chats)
    const dispatch=useDispatch<AppDispatch>()
     
    useEffect(() => {
    chats.length > 0 ?  setShowChats(true)  : setShowChats(false); 
        
      }, [chats]);
    
   


    const handleSendMessage=()=>{
        if(input.trim()==='')return
        const userMessage     =
        {
          id:Date.now().toString(),
          text:input,
          sender:'user'}
          
        dispatch(addUserMessage(userMessage));

        dispatch(sendMessage(input))
        setInput('');
    }
  return (
    <div className={` w-[80%]   h-[95vh] flex flex-col items-center ${showChats ?"justify-end":'justify-center'} p-3  `} >
      
          
          {showChats
          ?
          (
              <div className='  w-[85%] py-2  '>
              {
                chats.map((chat,idx)=>(
                  <>
                  { chat.sender==='user'
                  ?
                  <div className={` flex justify-${chat.sender==='user'?"end":"start"} items-center gap-2  mb-2`}
                  key={idx||chat.id}>
                     <p className='bg-white px-3 py-2 rounded-lg text-gray-800' key={idx||chat.id}>{chat.text}</p>
                     <div className="w-5 h-5 overflow-hidden object-cover object-center rounded-full">
                       <img src="profile.jpeg" alt=""  className="w-full h-full "/>
                          </div>
                 </div>
                  :
                  <div className={` flex justify-start items-center gap-2  mb-2`}
                  key={idx||chat.id}>
                    <div className="w-5 h-5 overflow-hidden object-cover object-center rounded-full">
                       <img src="logo.svg" alt=""  className="w-full h-full "/>
                          </div>
                     <p className='bg-white px-3 py-2 rounded-lg text-gray-800' key={idx||chat.id}>{chat.text}</p>
                     
                 </div>
                  }

                  </>
                ))
              }
            
            </div> 
          )
            :(
                <div className='mb-5 '>
                <q className='text-3xl font-semibold '><span className='text-primary' >what</span> can i help with</q>
            </div>
            )
          }
         

          
        
       <InputBar input={input} setInput={setInput} handleSendMessage={handleSendMessage} />
        </div>
  )
}

export default Chat