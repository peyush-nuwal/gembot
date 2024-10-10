import {  createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URL=' http://localhost:4001/api/chat'

interface message {
    id: string;
    text: string;
    sender: string; 
}

interface chatState{
    chats:message[]
    loading:boolean,
    error:string| null
}

const initialState:chatState={
    chats:[],
    loading: false,
    error: null,
}


export const sendMessage=createAsyncThunk('chats/sendMessage',async(userMessage:string,{rejectWithValue})=>{
    try {
        const res=await axios.post(URL,{
            message:userMessage
        })
        console.log(res)
        return res.data.response
    } catch (error) {
        console.error(error)
        return rejectWithValue('Failed to fectch AI response')
    }

})

console.log(sendMessage);



export const ChatSlice=createSlice({
     name:'chats',
     initialState,
     reducers:{
        addUserMessage:(state, action :PayloadAction<message>)=>{
            state.chats.push(action.payload)
        },
        clearAllMessages:(state)=>{
            // state.chats=[]
            // state.error=null
        }
     },
     extraReducers:(builder)=>{
        builder.addCase(sendMessage.pending,(state)=>{
           state.loading=true
           state.error=null
        })
       builder.addCase(sendMessage.fulfilled,(state,action:PayloadAction<string>)=>{
         const aiMessage:message={
            id:Date.now().toString(),
            text:action.payload,
            sender:'ai'
         }
         state.chats.push(aiMessage)
         state.loading=false
       })
       builder.addCase(sendMessage.rejected,(state,action)=>{
          state.loading=false,
          state.error=action.payload as string
       })
     }
})

export const {clearAllMessages,addUserMessage}=ChatSlice.actions

export default  ChatSlice.reducer
