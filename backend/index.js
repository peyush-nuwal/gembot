import express from 'express'

import cors from 'cors';


const app=express()

app.use(cors())
app.use(express.json())

const PORT=4001

const replay={
    "hi": "Hello! How can I help you today?",
    "hello": "Hello! How can I help you today?",
    "diamonds": "Diamonds are a girl's best friend! They are timeless and elegant.",
    "gold": "Gold jewelry is classic and versatile. It never goes out of style.",
    "silver": "Silver jewelry is a great choice for those who love a more understated look.",
    "bye": "Thank you for chatting! Have a great day!",
    "goodbye": "Thank you for chatting! Have a great day!",
    "default": "I'm not sure about that. Can you please specify?",
}


app.post('/api/chat',(req,res)=>{
   const userMessage =req.body.message.toLowerCase()
   if (!userMessage) {
    return res.status(400).json({ error: "Message is required." });
}
   const response=replay[userMessage]||replay["default"]
  res.json({response})
})





app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/api/chat`);

})