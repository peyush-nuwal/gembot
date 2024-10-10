import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './Store/ChatSlice.tsx'
const Store=configureStore({
    reducer:{
     chat:chatReducer
    }
})

export type Rootstate=ReturnType<typeof Store.getState>
export type AppDispatch= typeof Store.dispatch

export default Store